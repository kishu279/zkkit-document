import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

export default function CompileCommandPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">zkkit compile</h1>
        <p className="text-lg text-muted-foreground">
          Compile Circom circuits into R1CS constraints and WASM files
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-muted-foreground">
          The <code className="bg-muted px-1.5 py-0.5 rounded">compile</code>{" "}
          command takes your Circom circuit files and compiles them into the
          R1CS constraint system and WASM witness generation files needed for
          zero-knowledge proofs.
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CommandBlock command="zkkit compile [circuit-file]" />
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Options</h2>
        <Card className="p-4 bg-muted/50">
          <ul className="space-y-3 text-sm">
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">
                -o, --output
              </code>
              <span className="text-muted-foreground ml-2">
                Specify output directory (default: build/)
              </span>
            </li>
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">--optimize</code>
              <span className="text-muted-foreground ml-2">
                Enable circuit optimization
              </span>
            </li>
          </ul>
        </Card>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Compile a specific circuit:
            </p>
            <CommandBlock command="zkkit compile circuits/multiplier.circom" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Compile with optimization enabled:
            </p>
            <CommandBlock command="zkkit compile circuits/multiplier.circom --optimize" />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Output Files</h2>
        <Card className="p-4 bg-muted/50">
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">
                circuit.r1cs
              </code>{" "}
              - R1CS constraint system
            </li>
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">
                circuit.wasm
              </code>{" "}
              - WebAssembly witness generator
            </li>
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">
                circuit.sym
              </code>{" "}
              - Symbol information
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
