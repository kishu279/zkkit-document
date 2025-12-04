import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

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
    </div>
  );
}
