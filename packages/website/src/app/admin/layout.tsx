import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - The Intern",
  description: "Admin dashboard for The Intern",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="container mx-auto py-4">
          <h1 className="text-xl font-bold">The Intern Admin</h1>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
} 