import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          command wraps the <strong>circom compiler</strong> to compile your
          circuit files into R1CS constraint systems and WASM witness generation
          files. zkkit executes the{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded">circom</code> CLI
          with optimized flags.
        </p>

        <Card className="p-4 border-l-4 border-l-primary bg-muted/30">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Under the hood:</strong> This
            command runs{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
              circom [circuit] --r1cs --wasm -o outputs
            </code>
          </p>
        </Card>
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
                  src/commands/compile.js
                </p>
                <pre className="text-sm overflow-x-auto">
                  <code>{`import { run } from "../utils/exec.js";

export default async function compile(opts = {}) {
  const { circuit = "circuits/schema.circom" } = opts;

  await run(\`circom \${circuit} --r1cs --wasm -o outputs\`);
  
  console.log("✔ Circuit compiled");
}`}</code>
                </pre>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold">What it does:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Takes circuit path as parameter (defaults to{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      circuits/schema.circom
                    </code>
                    )
                  </li>
                  <li>
                    Executes the Circom compiler with{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      --r1cs
                    </code>{" "}
                    flag to generate constraint system
                  </li>
                  <li>
                    Uses{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      --wasm
                    </code>{" "}
                    flag to generate WebAssembly binary
                  </li>
                  <li>
                    Outputs compiled files to the{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      outputs/
                    </code>{" "}
                    directory
                  </li>
                  <li>Returns success message when compilation completes</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="cli" className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-l-emerald-500">
                <p className="text-sm font-mono mb-2 text-muted-foreground">
                  Terminal Command
                </p>
                <CommandBlock command="zkkit compile --circuit circuits/schema.circom" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">CLI Usage:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Use{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      --circuit
                    </code>{" "}
                    flag to specify your Circom file
                  </li>
                  <li>
                    Default circuit path is{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      circuits/schema.circom
                    </code>
                  </li>
                  <li>Generates R1CS constraint system and WASM binary</li>
                  <li>
                    All output files are saved to{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      outputs/
                    </code>{" "}
                    directory
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
