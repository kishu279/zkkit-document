import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function WitnessCommandPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">zkkit witness</h1>
        <p className="text-lg text-muted-foreground">
          Generate a witness file from circuit inputs
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-muted-foreground">
          The <code className="bg-muted px-1.5 py-0.5 rounded">witness</code>{" "}
          command generates a witness file by executing your compiled circuit
          with provided input values.
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CommandBlock command="zkkit witness [circuit-name] [input-file]" />
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Generate witness from an input JSON file:
            </p>
            <CommandBlock command="zkkit witness multiplier input.json" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Example input.json format:
            </p>
            <Card className="p-4 bg-muted/50">
              <pre className="text-sm">
                {`{
  "a": "3",
  "b": "5"
}`}
              </pre>
            </Card>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Output</h2>
        <p className="text-muted-foreground">
          This command generates a{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded">witness.wtns</code>{" "}
          file containing all the wire values computed during circuit execution.
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
                  src/commands/witness.js
                </p>
                <pre className="text-sm overflow-x-auto">
                  <code>{`import { run } from "../utils/exec.js";

export default async function witness(opts = {}) {
  const input = opts.input || "inputs/inputs.json";
  const name = opts.name || "witness.wtns";

  // Use snarkjs to generate witness
  await run(
    \`snarkjs wtns calculate outputs/schema_js/schema.wasm \${input} outputs/\${name}\`
  );

  console.log(\`✔ Witness generated: outputs/\${name}\`);
}`}</code>
                </pre>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold">What it does:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Accepts input JSON path (defaults to{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      inputs/inputs.json
                    </code>
                    )
                  </li>
                  <li>
                    Accepts witness output name (defaults to{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      witness.wtns
                    </code>
                    )
                  </li>
                  <li>
                    Uses snarkjs to calculate witness from the compiled WASM
                    binary
                  </li>
                  <li>Evaluates the circuit with the provided input values</li>
                  <li>
                    Saves the witness file to{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      outputs/
                    </code>{" "}
                    directory
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="cli" className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-l-emerald-500">
                <p className="text-sm font-mono mb-2 text-muted-foreground">
                  Terminal Command
                </p>
                <CommandBlock command="zkkit witness [circuit-name] [input-file]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">CLI Usage:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      [circuit-name]
                    </code>{" "}
                    - Name of your compiled circuit
                  </li>
                  <li>
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      [input-file]
                    </code>{" "}
                    - Path to JSON file with input values
                  </li>
                  <li>
                    Generates{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      witness.wtns
                    </code>{" "}
                    in the outputs directory
                  </li>
                  <li>
                    Witness contains all wire values computed by the circuit
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
