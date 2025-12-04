import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

export default function SetupTrustedCommandPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">zkkit setup:trusted</h1>
        <p className="text-lg text-muted-foreground">
          Perform trusted setup ceremony for PLONK or other proving systems
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-muted-foreground">
          The{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded">setup:trusted</code>{" "}
          command runs a trusted setup ceremony to generate the proving and
          verification keys required for creating and verifying zero-knowledge
          proofs.
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CommandBlock command="zkkit setup:trusted [circuit-name]" />
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Options</h2>
        <Card className="p-4 bg-muted/50">
          <ul className="space-y-3 text-sm">
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">--protocol</code>
              <span className="text-muted-foreground ml-2">
                Specify protocol (plonk, fflonk) - default: plonk
              </span>
            </li>
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">--ptau</code>
              <span className="text-muted-foreground ml-2">
                Path to powers of tau file
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
              Run trusted setup for a circuit:
            </p>
            <CommandBlock command="zkkit setup:trusted multiplier" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Use FFLONK protocol:
            </p>
            <CommandBlock command="zkkit setup:trusted multiplier --protocol fflonk" />
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
                proving_key.zkey
              </code>{" "}
              - Key for generating proofs
            </li>
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">
                verification_key.json
              </code>{" "}
              - Key for verifying proofs
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
