import { StoryClient, StoryConfig } from '@story-protocol/core-sdk';
import { createWalletClient, http, toHex } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { storyAeneid } from 'viem/chains';

export const getWalletClient = async () => {
  const privateKey = process.env.NEXT_PUBLIC_STORY_PRIVATE_KEY;
  
  if (!privateKey) {
    throw new Error('NEXT_PUBLIC_STORY_PRIVATE_KEY environment variable is not set');
  }
  const account = privateKeyToAccount(`0x${privateKey.startsWith('0x') ? privateKey.slice(2) : privateKey}`);
  const walletClient = createWalletClient({
    account,
    chain: storyAeneid,
    transport: http('https://aeneid.storyrpc.io')
  });

  return walletClient;
}

// Initialize the Story client with viem wallet
export const getStoryClient = async () => {
  // Get private key from environment variable
  const privateKey = process.env.NEXT_PUBLIC_STORY_PRIVATE_KEY;
  
  if (!privateKey) {
    throw new Error('NEXT_PUBLIC_STORY_PRIVATE_KEY environment variable is not set');
  }

  // Create viem account from private key
  const account = privateKeyToAccount(`0x${privateKey.startsWith('0x') ? privateKey.slice(2) : privateKey}`);
  
  // Create viem wallet client
  


const config: StoryConfig = {  
    account: account,  
    transport: http('https://aeneid.storyrpc.io'),
    chainId: 'aeneid',  
  }
  return StoryClient.newClient(config);
  
};

// Function to create an SPG NFT collection
export const createSPGCollection = async (collectionData: {
  name: string;
  symbol: string;
  description?: string;
  baseURI?: string;
}) => {
  try {
    const client = await getStoryClient();
    const walletClient = await getWalletClient();

    console.log({client}, walletClient.account.address)
    
    const response = await client.nftClient.createNFTCollection({
      name: collectionData.name,
      symbol: collectionData.symbol,
      isPublicMinting: true, // Allow public minting
      mintOpen: true, // Open for minting immediately
      contractURI: collectionData.description ? 
        `data:application/json;base64,${btoa(JSON.stringify({
          name: collectionData.name,
          description: collectionData.description
        }))}` : 
        "",
      baseURI: collectionData.baseURI || "ipfs://intern/",
      mintFeeRecipient: walletClient.account.address, // Set the wallet address as the fee recipient
      txOptions: { waitForTransaction: true }
    });

    console.log(`
      SPG NFT Collection created successfully!
      Contract address: ${response.spgNftContract}
      Transaction hash: ${response.txHash}
    `);
    
    return response;
  } catch (error) {
    console.error("Error creating SPG NFT collection:", error);
    throw error;
  }
};

// Function to mint NFT and register IP Asset
export const mintNFTAndIPAsset = async (formData: any) => {
  try {
    const client = await getStoryClient();
    
    // You'll need an SPG NFT contract address - this should be your collection
    // Get contract address from form data or environment variable
    const spgNftContract = formData.spgNftContract || process.env.NEXT_PUBLIC_SPG_NFT_CONTRACT;
    
    if (!spgNftContract) {
      throw new Error('SPG NFT Contract address is not provided');
    }

    // Convert string contract address to Address type (0x-prefixed string)
    const contractAddress = spgNftContract.startsWith('0x') 
      ? spgNftContract as `0x${string}` 
      : `0x${spgNftContract}` as `0x${string}`;

    // Use IPFS metadata if available, otherwise generate from name
    const metadataURI = formData.ipfsUrl 
      ? `https://ipfs.io/ipfs/${formData.ipfsHash}` 
      : `https://ipfs.io/ipfs/intern/${formData.name || 'intern'}`;
    
    // Create a hash from the metadata or name

    console.log("testing: ", formData.ipfsHash, formData.name)
    const metadataHash = formData.ipfsHash 
      ? toHex(formData.ipfsHash.slice(0, 32), { size: 32 })
      : toHex(formData.name || 'intern', { size: 32 });

      console.log({metadataURI})

    const response = await client.ipAsset.mintAndRegisterIp({
      spgNftContract: contractAddress,
      allowDuplicates: true, // Allow multiple NFTs with the same metadata
      // Metadata for both the NFT and IP asset
      ipMetadata: {
        ipMetadataURI: metadataURI,
        ipMetadataHash: metadataHash,
        nftMetadataURI: metadataURI,
        nftMetadataHash: metadataHash,
      },
      txOptions: { waitForTransaction: true }
    });

    console.log(`
      Transaction successful!
      Transaction hash: ${response.txHash}
      NFT Token ID: ${response.tokenId}
      IP Asset ID: ${response.ipId}
    `);
    
    return response;
  } catch (error) {
    console.error("Error minting NFT and IP Asset:", error);
    throw error;
  }
}; 