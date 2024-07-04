import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textarea?: boolean;
};

export function InputField({
  label,
  name,
  value,
  onChange,
  textarea = false,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      {textarea ? (
        <Textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="mt-1"
        />
      ) : (
        <Input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="mt-1"
        />
      )}
    </div>
  );
}
