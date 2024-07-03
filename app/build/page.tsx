"use client";

import { useRouter } from "next/navigation";
import { generateReadme } from "@/lib/utils";
import ReadmeForm from "@/components/ReadmeForm";
import { ThemeToggle } from "@/components/ThemeToggle";
export default function BuildPage() {
  const router = useRouter();

  const handleGenerateReadme = (formData: {
    projectName: string;
    description: string;
    nodeVersion: string;
    features: string;
  }) => {
    const readmeContent = generateReadme(
      formData.projectName,
      formData.description,
      formData.nodeVersion,
      formData.features
    );
    // Store the generated README in localStorage
    localStorage.setItem("generatedReadme", readmeContent);
    // Navigate to the result page
    router.push("/result");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Build Your README</h1>
        <ThemeToggle />
      </div>
      <ReadmeForm onSubmit={handleGenerateReadme} />
    </div>
  );
}
