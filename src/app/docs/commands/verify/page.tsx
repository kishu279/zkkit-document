import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

export default function VerifyCommandPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">zkkit verify</h1>
        <p className="text-lg text-muted-foreground">
          Verify a zero-knowledge proof using the verification key
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-muted-foreground">
          The <code className="bg-muted px-1.5 py-0.5 rounded">verify</code>{" "}
          command verifies a zero-knowledge proof using the verification key and
          public signals to ensure the proof is valid.
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CommandBlock command="zkkit verify [circuit-name]" />
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Options</h2>
        <Card className="p-4 bg-muted/50">
          <ul className="space-y-3 text-sm">
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">--proof</code>
              <span className="text-muted-foreground ml-2">
                Path to proof file (default: proof.json)
              </span>
            </li>
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">--public</code>
              <span className="text-muted-foreground ml-2">
                Path to public signals file (default: public.json)
              </span>
            </li>
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">--vkey</code>
              <span className="text-muted-foreground ml-2">
                Path to verification key (default: verification_key.json)
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
              Verify a proof with default files:
            </p>
            <CommandBlock command="zkkit verify multiplier" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Verify with custom file paths:
            </p>
            <CommandBlock command="zkkit verify multiplier --proof my_proof.json --public my_public.json" />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Output</h2>
        <p className="text-muted-foreground">The command will output either:</p>
        <Card className="p-4 bg-muted/50">
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li className="text-green-600">
              ✓ Proof is valid - Verification successful
            </li>
            <li className="text-red-600">
              ✗ Proof is invalid - Verification failed
            </li>
          </ul>
        </Card>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Note</h2>
        <p className="text-muted-foreground">
          Verification is fast and can be performed by anyone with the
          verification key and public signals, without needing access to the
          private inputs (witness).
        </p>
      </div>
    </div>
  );
}
