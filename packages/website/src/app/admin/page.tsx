import { CreateSPGCollection } from "@/components/CreateSPGCollection";

export default function AdminPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold">Admin Dashboard</h1>
      
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
        <CreateSPGCollection />
      </div>
    </div>
  );
} 