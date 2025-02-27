import axios from 'axios';

// Function to upload JSON data to Pinata
export const uploadJsonToPinata = async (jsonData: any) => {
  try {
    // Get Pinata API keys from environment variables
    const pinataApiKey = process.env.NEXT_PUBLIC_PINATA_API_KEY;
    const pinataSecretApiKey = process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY;
    
    if (!pinataApiKey || !pinataSecretApiKey) {
      throw new Error('Pinata API keys are not set in environment variables');
    }
    
    // Prepare the data for upload
    const data = JSON.stringify({
      pinataOptions: {
        cidVersion: 1
      },
      pinataMetadata: {
        name: `Intern-${Math.random().toString(36)}`,
      },
      pinataContent: jsonData
    });

    const options = {
      method: 'POST',
      // headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
      body: '{"pinataOptions":{"cidVersion":1},"pinataMetadata":{"name":"pinnie.json"},"pinataContent":{"somekey":"somevalue"}}'
    };
    
    // Configure the request
    const config = {
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
      headers: {
        'Content-Type': 'application/json',
        'pinata_api_key': pinataApiKey,
        'pinata_secret_api_key': pinataSecretApiKey
      },
      data: data
    };
    
    // Make the request to Pinata
    const response = await axios(config);
    
    // Return the IPFS hash (CID)
    return {
      success: true,
      ipfsHash: response.data.IpfsHash,
      pinataUrl: `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`
    };
  } catch (error) {
    console.error('Error uploading to Pinata:', error);
    throw error;
  }
}; 