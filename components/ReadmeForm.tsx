import { useState } from "react";
import { InputField } from "./InputField";
import { Button } from "./ui/button";

type ReadmeFormProps = {
  onSubmit: (formData: FormData) => void;
};

type FormData = {
  projectName: string;
  description: string;
  nodeVersion: string;
  features: string;
};

const ReadmeForm = ({ onSubmit }: ReadmeFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    projectName: "",
    description: "",
    nodeVersion: "",
    features: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Project Name"
        name="projectName"
        value={formData.projectName}
        onChange={handleChange}
      />
      <InputField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        textarea
      />
      <InputField
        label="Node.js Version"
        name="nodeVersion"
        value={formData.nodeVersion}
        onChange={handleChange}
      />
      <InputField
        label="Features (comma-separated)"
        name="features"
        value={formData.features}
        onChange={handleChange}
      />
      <Button type="submit">Generate README</Button>
    </form>
  );
};

export default ReadmeForm;
