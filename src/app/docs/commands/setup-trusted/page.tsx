import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
                  src/commands/trustedSetup.js
                </p>
                <pre className="text-sm overflow-x-auto">
                  <code>{`import { run } from "../utils/exec.js";

export default async function trustedSetup(
  entropy = "default-random-entropy-" + Date.now()
) {
  console.log("running trusted setup");

  await run("snarkjs powersoftau new bn128 12 pot12_0000.ptau");

  await run(
    "snarkjs powersoftau contribute pot12_0000.ptau pot12_0001.ptau",
    entropy + "\\n" // Entropy sent to stdin
  );

  await run(
    "snarkjs powersoftau prepare phase2 pot12_0001.ptau pot12_final.ptau"
  );
  
  await run("snarkjs powersoftau verify pot12_final.ptau");

  console.log("✔ Trusted setup completed");
}`}</code>
                </pre>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold">What it does:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Accepts entropy string parameter (auto-generates if not
                    provided)
                  </li>
                  <li>
                    <strong>Step 1:</strong> Creates initial Powers of Tau file
                    using BN128 curve with size 12
                  </li>
                  <li>
                    <strong>Step 2:</strong> Contributes entropy to the ceremony
                    for randomness
                  </li>
                  <li>
                    <strong>Step 3:</strong> Prepares the final Powers of Tau
                    file for Phase 2
                  </li>
                  <li>
                    <strong>Step 4:</strong> Verifies the trusted setup
                    parameters are valid
                  </li>
                  <li>
                    Uses snarkjs commands to perform the multi-step ceremony
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="cli" className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-l-emerald-500">
                <p className="text-sm font-mono mb-2 text-muted-foreground">
                  Terminal Command
                </p>
                <CommandBlock command="zkkit setup:trusted [circuit-name]" />
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
                      --protocol
                    </code>{" "}
                    - Specify protocol (plonk, fflonk) - default: plonk
                  </li>
                  <li>
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      --ptau
                    </code>{" "}
                    - Path to powers of tau file
                  </li>
                  <li>Performs multi-step trusted setup ceremony</li>
                  <li>Generates proving and verification keys</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
