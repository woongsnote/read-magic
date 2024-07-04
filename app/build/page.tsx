"use client";

import { useRouter } from "next/navigation";
import { generateReadme } from "@/lib/utils";
import ReadmeForm from "@/components/ReadmeForm";
import Header from "@/components/Header";
import Title from "@/components/Title";

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
    localStorage.setItem("generatedReadme", readmeContent);
    router.push("/result");
  };

  return (
    <>
      <Title title="Build Your README" />
      <ReadmeForm onSubmit={handleGenerateReadme} />
    </>
  );
}
