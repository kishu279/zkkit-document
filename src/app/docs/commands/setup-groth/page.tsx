import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          command wraps <strong>snarkjs groth16 setup</strong> to perform Phase
          2 of the trusted setup, generating circuit-specific proving and
          verification keys for the Groth16 proving system.
        </p>

        <Card className="p-4 border-l-4 border-l-primary bg-muted/30">
          <p className="text-sm text-muted-foreground mb-2">
            <strong className="text-foreground">Under the hood:</strong> This
            command runs snarkjs operations:
          </p>
          <ul className="text-xs space-y-1 ml-4 list-disc text-muted-foreground">
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">
                snarkjs groth16 setup [r1cs] [ptau] circuit_0000.zkey
              </code>
            </li>
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">
                snarkjs zkey export verificationkey
              </code>
            </li>
          </ul>
        </Card>
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
                  src/commands/groth.js
                </p>
                <pre className="text-sm overflow-x-auto">
                  <code>{`import { run } from "../utils/exec.js";

export default async function groth(opts = {}) {
  const { verification = "verification_key.json" } = opts;

  await run(
    "snarkjs groth16 setup outputs/schema.r1cs pot12_final.ptau circuit_0000.zkey"
  );
  
  await run(
    \`snarkjs zkey export verificationkey circuit_0000.zkey \${verification}\`
  );

  console.log("✔ Groth16 setup completed");
}`}</code>
                </pre>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold">What it does:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Accepts verification key output filename (defaults to{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      verification_key.json
                    </code>
                    )
                  </li>
                  <li>
                    <strong>Step 1:</strong> Performs Groth16-specific setup
                    using R1CS and Powers of Tau
                  </li>
                  <li>
                    <strong>Step 2:</strong> Generates the proving key (
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      circuit_0000.zkey
                    </code>
                    )
                  </li>
                  <li>
                    <strong>Step 3:</strong> Exports the verification key from
                    the zkey file
                  </li>
                  <li>
                    Creates circuit-specific keys required for proof generation
                    and verification
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="cli" className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-l-emerald-500">
                <p className="text-sm font-mono mb-2 text-muted-foreground">
                  Terminal Command
                </p>
                <CommandBlock command="zkkit setup:groth [circuit-name]" />
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
                      --ptau
                    </code>{" "}
                    - Path to powers of tau file
                  </li>
                  <li>
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      --contributions
                    </code>{" "}
                    - Number of contributions (default: 1)
                  </li>
                  <li>Generates circuit-specific Groth16 proving key</li>
                  <li>Exports verification key for proof verification</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
