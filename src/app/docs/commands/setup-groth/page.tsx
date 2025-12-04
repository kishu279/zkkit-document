import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

export default function SetupGrothCommandPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">zkkit setup:groth</h1>
        <p className="text-lg text-muted-foreground">
          Perform Groth16 trusted setup ceremony
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-muted-foreground">
          The{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded">setup:groth</code>{" "}
          command performs a Groth16-specific trusted setup ceremony to generate
          proving and verification keys optimized for the Groth16 proving
          system.
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CommandBlock command="zkkit setup:groth [circuit-name]" />
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Options</h2>
        <Card className="p-4 bg-muted/50">
          <ul className="space-y-3 text-sm">
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">--ptau</code>
              <span className="text-muted-foreground ml-2">
                Path to powers of tau file
              </span>
            </li>
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">
                --contributions
              </code>
              <span className="text-muted-foreground ml-2">
                Number of contributions (default: 1)
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
              Run Groth16 setup for a circuit:
            </p>
            <CommandBlock command="zkkit setup:groth multiplier" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Specify custom powers of tau:
            </p>
            <CommandBlock command="zkkit setup:groth multiplier --ptau powersOfTau28_hez_final_15.ptau" />
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
                circuit_final.zkey
              </code>{" "}
              - Final proving key
            </li>
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">
                verification_key.json
              </code>{" "}
              - Verification key
            </li>
          </ul>
        </Card>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">About Groth16</h2>
        <p className="text-muted-foreground">
          Groth16 is one of the most efficient zero-knowledge proof systems,
          producing very small proofs with fast verification times. However, it
          requires a circuit-specific trusted setup.
        </p>
      </div>
    </div>
  );
}
