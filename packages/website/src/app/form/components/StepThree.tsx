"use client";
import { uploadJsonToPinata } from "@/lib/pinata";
import { mintNFTAndIPAsset } from "@/lib/story";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface StepThreeProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
}

export default function StepThree({ formData, setFormData, onNext }: StepThreeProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [customContract, setCustomContract] = useState("");
  const [showCustomContract, setShowCustomContract] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const handleMintNFTAndIPAsset = async () => {
    setIsLoading(true);
    setError(null);
    setUploadStatus(null);
    
    try {
      // First, upload the character.json data to Pinata
      setUploadStatus("Uploading character data to IPFS...");
      
      // Parse the JSON data from formData.name
      let characterData;
      try {
        // Try to parse the JSON string from formData.name
        characterData = JSON.parse(formData.name);
        
        // If parsing succeeds but result is not an object, create a simple object
        if (typeof characterData !== 'object' || characterData === null) {
          characterData = { name: formData.name };
        }
      } catch (parseError) {
        // If parsing fails, use the raw string as the name
        console.warn("Failed to parse character data as JSON:", parseError);
        characterData = { name: formData.name };
      }
      
      // Add any additional data from formData that might be useful
      if (formData.handles) {
        characterData.handles = formData.handles;
      }
      
      // Upload to Pinata
      const pinataResponse = await uploadJsonToPinata(characterData);
      
      setUploadStatus("Character data uploaded to IPFS. Minting NFT...");
      
      // If user provided a custom contract address, use it
      let contractAddress = process.env.NEXT_PUBLIC_SPG_NFT_CONTRACT;
      if (customContract) {
        // Use the custom contract instead of the environment variable
        contractAddress = customContract;
      }
      
      // Add IPFS data to formData for minting
      const mintFormData = {
        ...formData,
        ipfsHash: pinataResponse.ipfsHash,
        ipfsUrl: pinataResponse.pinataUrl,
        spgNftContract: contractAddress
      };
      
      // Mint NFT with the IPFS data
      const response = await mintNFTAndIPAsset(mintFormData);
      
      // Store the IP Asset ID and Token ID in formData
      setFormData({
        ...formData,
        ipAssetId: response.ipId,
        nftTokenId: response.tokenId,
        txHash: response.txHash,
        spgNftContract: contractAddress,
        ipfsHash: pinataResponse.ipfsHash,
        ipfsUrl: pinataResponse.pinataUrl
      });
      
      // Proceed to the next step
      onNext();
    } catch (error) {
      console.error("Error in minting process:", error);
      setError("Failed to complete the minting process. Please try again.");
    } finally {
      setIsLoading(false);
      setUploadStatus(null);
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/interns-story.png"
          alt="The Intern Banner"
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <div className="text-sm font-bold uppercase tracking-wide text-blue-600">
        Intellectual Property
      </div>
      <h2 className="text-2xl font-bold sm:text-3xl">Give Your Intern Ownership</h2>
      <p className="font-bold">
        Each intern has their personality stored an IP Asset on Story Protocol, via a custom NFT.
        This enables your Intern to both own their personality, but also all of the content that
        they generate on X.{" "}
      </p>

      {error && <p className="text-red-500">{error}</p>}
      {uploadStatus && <p className="text-blue-500">{uploadStatus}</p>}
      
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => setShowCustomContract(!showCustomContract)}
          className="text-sm text-blue-500 hover:text-blue-700"
        >
          {showCustomContract ? "Hide custom contract" : "Use custom SPG NFT contract"}
        </button>
        
        <Link href="/admin" className="ml-4 text-sm text-blue-500 hover:text-blue-700">
          Create new SPG collection
        </Link>
      </div>
      
      {showCustomContract && (
        <div className="space-y-2">
          <label htmlFor="customContract" className="block text-sm font-medium">
            SPG NFT Contract Address
          </label>
          <input
            id="customContract"
            type="text"
            value={customContract}
            onChange={(e) => setCustomContract(e.target.value)}
            placeholder="0x..."
            className="w-full rounded border p-2 text-sm"
          />
          <p className="text-xs text-gray-500">
            Enter the address of your SPG NFT contract. If left empty, the default contract from .env will be used.
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={handleMintNFTAndIPAsset}
        disabled={isLoading}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
      >
        {isLoading ? "Processing..." : "Mint NFT & IP Asset"}
      </button>
    </div>
  );
}
