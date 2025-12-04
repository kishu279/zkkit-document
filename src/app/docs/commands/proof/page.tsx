import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          command wraps <strong>snarkjs groth16 prove</strong> to generate a
          zero-knowledge proof. snarkjs performs the cryptographic operations
          using the witness and proving key.
        </p>

        <Card className="p-4 border-l-4 border-l-primary bg-muted/30">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Under the hood:</strong> This
            command runs{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-xs">
              snarkjs groth16 prove circuit_0000.zkey outputs/[witness] [proof]
              [public]
            </code>
          </p>
        </Card>
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
                  src/commands/proof.js
                </p>
                <pre className="text-sm overflow-x-auto">
                  <code>{`import { run } from "../utils/exec.js";

export default async function proof(opts = {}) {
  const {
    witness = "witness.wtns",
    proof = "proof.json",
    output = "public.json",
  } = opts;

  await run(
    \`snarkjs groth16 prove circuit_0000.zkey outputs/\${witness} \${proof} \${output}\`
  );

  console.log("✔ Proof generated: proof.json, public.json");
}`}</code>
                </pre>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold">What it does:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Accepts witness filename (defaults to{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      witness.wtns
                    </code>
                    )
                  </li>
                  <li>
                    Accepts proof output filename (defaults to{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      proof.json
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
                    Uses Groth16 protocol to generate zero-knowledge proof from
                    witness and proving key
                  </li>
                  <li>
                    Outputs both the proof and public inputs/outputs as separate
                    JSON files
                  </li>
                  <li>
                    The proof is succinct and can be verified quickly without
                    revealing private inputs
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="cli" className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-l-emerald-500">
                <p className="text-sm font-mono mb-2 text-muted-foreground">
                  Terminal Command
                </p>
                <CommandBlock command="zkkit proof [circuit-name]" />
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
                      --witness
                    </code>{" "}
                    - Path to witness file (default: witness.wtns)
                  </li>
                  <li>
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      --zkey
                    </code>{" "}
                    - Path to proving key file
                  </li>
                  <li>
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      -o, --output
                    </code>{" "}
                    - Output file path (default: proof.json)
                  </li>
                  <li>Generates zero-knowledge proof and public signals</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
