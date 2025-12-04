import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

export default function ProofCommandPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">zkkit proof</h1>
        <p className="text-lg text-muted-foreground">
          Generate a zero-knowledge proof from witness and proving key
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-muted-foreground">
          The <code className="bg-muted px-1.5 py-0.5 rounded">proof</code>{" "}
          command generates a zero-knowledge proof using the witness file and
          proving key from the trusted setup.
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CommandBlock command="zkkit proof [circuit-name]" />
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Options</h2>
        <Card className="p-4 bg-muted/50">
          <ul className="space-y-3 text-sm">
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">--witness</code>
              <span className="text-muted-foreground ml-2">
                Path to witness file (default: witness.wtns)
              </span>
            </li>
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">--zkey</code>
              <span className="text-muted-foreground ml-2">
                Path to proving key file
              </span>
            </li>
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">
                -o, --output
              </code>
              <span className="text-muted-foreground ml-2">
                Output file path (default: proof.json)
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
              Generate proof for a circuit:
            </p>
            <CommandBlock command="zkkit proof multiplier" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Specify custom witness and output files:
            </p>
            <CommandBlock command="zkkit proof multiplier --witness custom_witness.wtns -o my_proof.json" />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Output</h2>
        <p className="text-muted-foreground">
          This command generates two files:
        </p>
        <Card className="p-4 bg-muted/50">
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">proof.json</code>{" "}
              - The zero-knowledge proof
            </li>
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">
                public.json
              </code>{" "}
              - Public signals/inputs
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
