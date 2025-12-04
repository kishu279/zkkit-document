import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Zero-knowledge proof workflow toolkit
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Getting Started</h2>
        <p className="text-muted-foreground">
          Documentation coming soon. Below are example command blocks showing zkkit usage.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Installation</h3>
        <CommandBlock command="npm install -g zkkit" />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Initialize a Project</h3>
        <CommandBlock command="zkkit init my-project" />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Compile Circuits</h3>
        <CommandBlock command="zkkit compile" />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Generate Proof</h3>
        <CommandBlock command="zkkit proof" />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Verify Proof</h3>
        <CommandBlock command="zkkit verify" />
      </div>
    </div>
  );
}
