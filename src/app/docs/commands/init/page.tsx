import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function InitCommandPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">zkkit init</h1>
        <p className="text-lg text-muted-foreground">
          Initialize a new zkkit project with the required structure and
          configuration
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-muted-foreground">
          The <code className="bg-muted px-1.5 py-0.5 rounded">init</code>{" "}
          command creates a new zkkit project structure with all necessary
          directories and configuration files.
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CommandBlock command="zkkit init [project-name]" />
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Initialize a new project in the current directory:
            </p>
            <CommandBlock command="zkkit init" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Initialize a new project with a specific name:
            </p>
            <CommandBlock command="zkkit init my-zk-project" />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">What Gets Created</h2>
        <Card className="p-4 bg-muted/50">
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">circuits/</code>{" "}
              - Directory for your circuit files
            </li>
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">build/</code> -
              Directory for compiled circuits
            </li>
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">
                zkkit.config.json
              </code>{" "}
              - Project configuration file
            </li>
            <li>
              <code className="bg-muted px-1.5 py-0.5 rounded">
                package.json
              </code>{" "}
              - Node.js dependencies
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
                  src/commands/init.js
                </p>
                <pre className="text-sm overflow-x-auto">
                  <code>{`import fs from "fs-extra";

export default async function init() {
  await fs.ensureDir("circuits");
  await fs.ensureDir("inputs");
  await fs.ensureDir("outputs");

  await fs.writeJson("inputs/inputs.json", { a: 3, b: 11 });
  await fs.writeFile("circuits/schema.circom", \`
// your circuit here

pragma circom 2.0.0;

template SumProduct(){
    // Inputs
    signal input a;
    signal input b;

    // Outputs
    signal output sum;
    signal output product;

    // Constraints 
    sum <== a + b;
    product <== a * b;
}

component main = SumProduct();
  \`);
  
  console.log("✔ Project initialized");
}`}</code>
                </pre>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold">What it does:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Creates three essential directories using{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      fs.ensureDir()
                    </code>
                  </li>
                  <li>
                    Generates a default{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      inputs.json
                    </code>{" "}
                    with sample values (a=3, b=11)
                  </li>
                  <li>
                    Creates a template Circom circuit file with a simple
                    SumProduct example
                  </li>
                  <li>Outputs a success message when complete</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="cli" className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-l-emerald-500">
                <p className="text-sm font-mono mb-2 text-muted-foreground">
                  Terminal Command
                </p>
                <CommandBlock command="zkkit init" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">CLI Usage:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    No parameters required - just run the command in your
                    project directory
                  </li>
                  <li>
                    Creates{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      circuits/
                    </code>
                    ,{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      inputs/
                    </code>
                    , and{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">
                      outputs/
                    </code>{" "}
                    folders
                  </li>
                  <li>Generates starter files to help you begin immediately</li>
                  <li>Safe to run - will not overwrite existing files</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
