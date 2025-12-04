import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Implementation</h2>
          <p className="text-muted-foreground mb-4">
            View how this command works under the hood:
          </p>

          <Tabs defaultValue="api" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="api">API Function</TabsTrigger>
              <TabsTrigger value="cli">CLI Command</TabsTrigger>
            </TabsList>

            <TabsContent value="api" className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-l-primary">
                <p className="text-sm font-mono mb-2 text-muted-foreground">
                  src/commands/verify.js
                </p>
                <pre className="text-sm overflow-x-auto">
                  <code>{`import { run } from "../utils/exec.js";

export default async function verify(opts = {}) {
  const {
    verification = "verification_key.json",
    output = "public.json",
    proof = "proof.json",
  } = opts;

  const result = await run(
    \`snarkjs groth16 verify \${verification} \${output} \${proof}\`
  );

  console.log(
    result.includes("OK") ? "✔ Proof verified" : "✘ Verification failed"
  );
}`}</code>
                </pre>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold">What it does:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Accepts verification key filename (defaults to{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      verification_key.json
                    </code>
                    )
                  </li>
                  <li>
                    Accepts public signals filename (defaults to{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      public.json
                    </code>
                    )
                  </li>
                  <li>
                    Accepts proof filename (defaults to{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      proof.json
                    </code>
                    )
                  </li>
                  <li>
                    Uses Groth16 verification algorithm to check proof validity
                  </li>
                  <li>
                    Checks if the output contains "OK" to determine success
                  </li>
                  <li>
                    Returns verification status without accessing private inputs
                  </li>
                  <li>
                    Verification is fast and can be done by anyone with the
                    public files
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="cli" className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-l-emerald-500">
                <p className="text-sm font-mono mb-2 text-muted-foreground">
                  Terminal Command
                </p>
                <CommandBlock command="zkkit verify [circuit-name]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">CLI Usage:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      [circuit-name]
                    </code>{" "}
                    - Name of your circuit
                  </li>
                  <li>
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      --proof
                    </code>{" "}
                    - Path to proof file (default: proof.json)
                  </li>
                  <li>
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      --public
                    </code>{" "}
                    - Path to public signals file (default: public.json)
                  </li>
                  <li>
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      --vkey
                    </code>{" "}
                    - Path to verification key (default: verification_key.json)
                  </li>
                  <li>Verifies proof validity using public parameters only</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
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
