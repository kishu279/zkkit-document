import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

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
      </div>
    </div>
  );
}
