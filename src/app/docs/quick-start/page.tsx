import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function QuickStartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Quick Start Guide</h1>
        <p className="text-lg text-muted-foreground">
          Get started with zkkit by building your first zero-knowledge circuit
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          This guide will walk you through the complete workflow of creating a
          simple zero-knowledge proof using zkkit's default tools. We'll create
          a basic multiplier circuit that proves you know two numbers that
          multiply to a specific result, without revealing the numbers
          themselves.
        </p>
      </div>

      <Separator />

      {/* Step 1: Initialize Project */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
            1
          </div>
          <h2 className="text-2xl font-semibold">Initialize Your Project</h2>
        </div>
        <p className="text-muted-foreground">
          Start by creating a new zkkit project. This sets up the necessary
          directory structure and configuration files.
        </p>
        <CommandBlock command="zkkit init my-first-zk-project" />
        <CommandBlock command="cd my-first-zk-project" />

        <Card className="p-4 bg-muted/50">
          <p className="text-sm font-semibold mb-2">
            📁 Project Structure Created:
          </p>
          <pre className="text-xs text-muted-foreground">
            {`my-first-zk-project/
├── circuits/          # Your circuit files go here
├── build/            # Compiled circuits output
├── zkkit.config.json # Project configuration
└── package.json      # Node.js dependencies`}
          </pre>
        </Card>
      </div>

      <Separator />

      {/* Step 2: Create Circuit */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
            2
          </div>
          <h2 className="text-2xl font-semibold">Create Your Circuit</h2>
        </div>
        <p className="text-muted-foreground">
          Create a simple multiplier circuit file in the{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded">circuits/</code>{" "}
          directory.
        </p>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Create{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded">
              circuits/multiplier.circom
            </code>
            :
          </p>
          <Card className="p-4 bg-muted/50">
            <pre className="text-xs overflow-x-auto">
              {`pragma circom 2.0.0;

// This circuit proves that you know two numbers (a, b)
// that multiply to give c, without revealing a or b

template Multiplier() {
    // Private inputs (secret)
    signal input a;
    signal input b;
    
    // Public output
    signal output c;
    
    // Constraint: c must equal a * b
    c <== a * b;
}

component main = Multiplier();`}
            </pre>
          </Card>
        </div>

        <Card className="p-4 border-l-4 border-l-primary bg-muted/30">
          <p className="text-sm">
            <strong>💡 What's happening here?</strong>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            The circuit defines private inputs (a, b) that remain secret, and a
            public output (c). Anyone can verify that you know values of a and b
            that multiply to c, without ever seeing a or b!
          </p>
        </Card>
      </div>

      <Separator />

      {/* Step 3: Compile */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
            3
          </div>
          <h2 className="text-2xl font-semibold">Compile the Circuit</h2>
        </div>
        <p className="text-muted-foreground">
          Compile your circuit into the R1CS constraint system and WASM witness
          generator.
        </p>
        <CommandBlock command="zkkit compile circuits/multiplier.circom" />

        <Card className="p-4 bg-muted/50">
          <p className="text-sm font-semibold mb-2">✅ Files Generated:</p>
          <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
            <li>
              <code>build/multiplier.r1cs</code> - Constraint system
            </li>
            <li>
              <code>build/multiplier.wasm</code> - Witness generator
            </li>
            <li>
              <code>build/multiplier.sym</code> - Symbol information
            </li>
          </ul>
        </Card>
      </div>

      <Separator />

      {/* Step 4: Create Input */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
            4
          </div>
          <h2 className="text-2xl font-semibold">Prepare Input Data</h2>
        </div>
        <p className="text-muted-foreground">
          Create an input file with your secret values. Let's prove we know that
          3 × 11 = 33.
        </p>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Create{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded">input.json</code>:
          </p>
          <Card className="p-4 bg-muted/50">
            <pre className="text-xs">
              {`{
  "a": "3",
  "b": "11"
}`}
            </pre>
          </Card>
        </div>

        <Card className="p-4 border-l-4 border-l-primary bg-muted/30">
          <p className="text-sm">
            <strong>🔒 Privacy Note:</strong>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            The values "3" and "11" are our private inputs. They will never be
            revealed in the proof—only the fact that we know numbers that
            multiply to 33.
          </p>
        </Card>
      </div>

      <Separator />

      {/* Step 5: Generate Witness */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
            5
          </div>
          <h2 className="text-2xl font-semibold">Generate Witness</h2>
        </div>
        <p className="text-muted-foreground">
          Compute the witness by executing the circuit with your input values.
        </p>
        <CommandBlock command="zkkit witness multiplier input.json" />

        <Card className="p-4 bg-muted/50">
          <p className="text-sm font-semibold mb-2">✅ Generated:</p>
          <p className="text-xs text-muted-foreground">
            <code>witness.wtns</code> - Contains all intermediate wire values
          </p>
        </Card>
      </div>

      <Separator />

      {/* Step 6: Trusted Setup */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
            6
          </div>
          <h2 className="text-2xl font-semibold">Run Trusted Setup</h2>
        </div>
        <p className="text-muted-foreground">
          Perform the trusted setup ceremony to generate proving and
          verification keys. We'll use Groth16 for this example.
        </p>
        <CommandBlock command="zkkit setup:groth multiplier" />

        <Card className="p-4 bg-muted/50">
          <p className="text-sm font-semibold mb-2">✅ Keys Generated:</p>
          <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
            <li>
              <code>circuit_final.zkey</code> - Proving key (used to create
              proofs)
            </li>
            <li>
              <code>verification_key.json</code> - Verification key (used to
              verify proofs)
            </li>
          </ul>
        </Card>

        <Card className="p-4 border-l-4 border-l-amber-500 bg-muted/30">
          <p className="text-sm">
            <strong>⚡ One-Time Setup:</strong>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            You only need to run the trusted setup once per circuit. The
            verification key can be shared publicly and reused for all proofs of
            this circuit.
          </p>
        </Card>
      </div>

      <Separator />

      {/* Step 7: Generate Proof */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
            7
          </div>
          <h2 className="text-2xl font-semibold">Generate the Proof</h2>
        </div>
        <p className="text-muted-foreground">
          Create a zero-knowledge proof using the witness and proving key.
        </p>
        <CommandBlock command="zkkit proof multiplier" />

        <Card className="p-4 bg-muted/50">
          <p className="text-sm font-semibold mb-2">✅ Proof Created:</p>
          <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
            <li>
              <code>proof.json</code> - The zero-knowledge proof
            </li>
            <li>
              <code>public.json</code> - Public signals (output: 33)
            </li>
          </ul>
        </Card>

        <Card className="p-4 border-l-4 border-l-emerald-500 bg-muted/30">
          <p className="text-sm">
            <strong>🎉 Success!</strong>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            You now have a cryptographic proof that you know two numbers that
            multiply to 33, without revealing what those numbers are!
          </p>
        </Card>
      </div>

      <Separator />

      {/* Step 8: Verify */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
            8
          </div>
          <h2 className="text-2xl font-semibold">Verify the Proof</h2>
        </div>
        <p className="text-muted-foreground">
          Verify that the proof is valid using the verification key and public
          signals.
        </p>
        <CommandBlock command="zkkit verify multiplier" />

        <Card className="p-4 bg-muted/50">
          <p className="text-sm font-semibold mb-2">Expected Output:</p>
          <pre className="text-xs text-green-600 mt-2">
            ✓ Proof is valid - Verification successful
          </pre>
        </Card>

        <Card className="p-4 border-l-4 border-l-primary bg-muted/30">
          <p className="text-sm">
            <strong>🔍 What Just Happened?</strong>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            The verifier confirmed that your proof is mathematically valid—you
            DO know numbers that multiply to 33—without ever learning that those
            numbers are 3 and 11!
          </p>
        </Card>
      </div>

      <Separator />

      {/* Complete Workflow */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Complete Command Summary</h2>
        <p className="text-muted-foreground">
          Here's the entire workflow in one place:
        </p>

        <Card className="p-4 bg-muted/50">
          <pre className="text-xs overflow-x-auto">
            {`# 1. Initialize project
zkkit init my-first-zk-project
cd my-first-zk-project

# 2. Create circuit (circuits/multiplier.circom)
# [Create the circuit file as shown above]

# 3. Compile circuit
zkkit compile circuits/multiplier.circom

# 4. Create input file (input.json)
# [Create the input file as shown above]

# 5. Generate witness
zkkit witness multiplier input.json

# 6. Run trusted setup
zkkit setup:groth multiplier

# 7. Generate proof
zkkit proof multiplier

# 8. Verify proof
zkkit verify multiplier`}
          </pre>
        </Card>
      </div>

      <Separator />

      {/* Next Steps */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <p className="text-muted-foreground">
          Now that you've completed your first zero-knowledge proof, you can:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link href="/docs/commands/init">
            <Card className="p-4 hover:bg-accent transition-colors cursor-pointer h-full">
              <h3 className="font-semibold mb-2">📖 Explore Commands</h3>
              <p className="text-sm text-muted-foreground">
                Learn more about each zkkit command and its options
              </p>
            </Card>
          </Link>

          <Card className="p-4 bg-muted/50 h-full">
            <h3 className="font-semibold mb-2">🔧 Try Different Circuits</h3>
            <p className="text-sm text-muted-foreground">
              Experiment with more complex circuits like hash functions or
              Merkle trees
            </p>
          </Card>

          <Card className="p-4 bg-muted/50 h-full">
            <h3 className="font-semibold mb-2">⚡ Optimize Performance</h3>
            <p className="text-sm text-muted-foreground">
              Learn about circuit optimization techniques for faster proofs
            </p>
          </Card>

          <Card className="p-4 bg-muted/50 h-full">
            <h3 className="font-semibold mb-2">🚀 Deploy to Production</h3>
            <p className="text-sm text-muted-foreground">
              Integrate zkkit proofs into your blockchain or web applications
            </p>
          </Card>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>
        <Card className="p-4 bg-muted/50">
          <ul className="space-y-3 text-sm">
            <li>
              <p className="font-semibold">Command not found?</p>
              <p className="text-muted-foreground text-xs mt-1">
                Make sure zkkit is installed globally:{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  npm install -g zkkit
                </code>
              </p>
            </li>
            <li>
              <p className="font-semibold">Compilation errors?</p>
              <p className="text-muted-foreground text-xs mt-1">
                Verify that Rust and Circom are properly installed and in your
                PATH
              </p>
            </li>
            <li>
              <p className="font-semibold">Proof generation fails?</p>
              <p className="text-muted-foreground text-xs mt-1">
                Ensure the witness file was generated successfully before
                creating the proof
              </p>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
