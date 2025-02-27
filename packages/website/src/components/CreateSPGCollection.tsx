'use client'
import { createSPGCollection } from "@/lib/story";
import { useState } from "react";

export function CreateSPGCollection() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "Intern NFTs",
    symbol: "INTERN",
    description: "Collection of NFTs for AI interns with their personalities stored as IP assets on Story Protocol",
    baseURI: "ipfs://intern/"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateCollection = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      const response = await createSPGCollection(formData);
      
      setSuccess(`
        SPG NFT Collection created successfully!
        Contract address: ${response.spgNftContract}
        Transaction hash: ${response.txHash}
        
        Add this contract address to your .env.local file as NEXT_PUBLIC_SPG_NFT_CONTRACT
      `);
      
      // Copy to clipboard
      if (response.spgNftContract) {
        navigator.clipboard.writeText(response.spgNftContract)
          .then(() => console.log("Contract address copied to clipboard"))
          .catch(err => console.error("Could not copy to clipboard", err));
      }
      
    } catch (error) {
      console.error("Error creating SPG NFT collection:", error);
      setError("Failed to create SPG NFT collection. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-lg border p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">Create SPG NFT Collection</h2>
      
      <form onSubmit={handleCreateCollection} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block font-medium">
            Collection Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded border p-2"
            required
          />
        </div>
        
        <div>
          <label htmlFor="symbol" className="mb-1 block font-medium">
            Collection Symbol
          </label>
          <input
            id="symbol"
            name="symbol"
            type="text"
            value={formData.symbol}
            onChange={handleChange}
            className="w-full rounded border p-2"
            required
          />
        </div>
        
        <div>
          <label htmlFor="description" className="mb-1 block font-medium">
            Collection Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded border p-2"
            rows={3}
          />
        </div>
        
        <div>
          <label htmlFor="baseURI" className="mb-1 block font-medium">
            Base URI
          </label>
          <input
            id="baseURI"
            name="baseURI"
            type="text"
            value={formData.baseURI}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />
        </div>
        
        {error && <p className="text-red-500">{error}</p>}
        
        {success && (
          <div className="rounded bg-green-50 p-3 text-green-800">
            <pre className="whitespace-pre-wrap text-sm">{success}</pre>
            <p className="mt-2 text-sm font-medium">Contract address copied to clipboard!</p>
          </div>
        )}
        
        <button
          type="submit"
          disabled={isLoading}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isLoading ? "Creating..." : "Create SPG Collection"}
        </button>
      </form>
    </div>
  );
} 