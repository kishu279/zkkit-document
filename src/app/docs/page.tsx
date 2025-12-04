import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Complete guide to zkkit - Zero-knowledge proof workflow toolkit
        </p>
      </div>

      <Separator />

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          zkkit abstracts the complexity of zero-knowledge proof development by
          providing a clean, intuitive API and CLI interface. Whether you're
          building privacy-preserving applications, credentials systems, or
          cryptographic protocols, zkkit handles the heavy lifting of zk-SNARK
          operations using the <strong>Groth16</strong> proving system.
        </p>
      </div>

      <Separator />

      {/* Command Reference */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Command Reference</h2>
        <p className="text-muted-foreground">
          Complete reference for all zkkit CLI commands. Each command is
          designed to handle a specific part of the zero-knowledge proof
          workflow.
        </p>

        {/* zkkit init */}
        <Card className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">zkkit init</h3>
            <p className="text-sm text-muted-foreground">
              Initialize a new zkSNARK project with the required directory
              structure.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Command:</p>
            <CommandBlock command="zkkit init" />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">What it does:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>
                Creates{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  circuits/
                </code>{" "}
                directory for Circom circuit files
              </li>
              <li>
                Creates{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">inputs/</code>{" "}
                directory for input JSON files
              </li>
              <li>
                Creates{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">outputs/</code>{" "}
                directory for compiled outputs
              </li>
              <li>
                Generates a sample{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  schema.circom
                </code>{" "}
                file with SumProduct template
              </li>
              <li>
                Creates a sample{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  inputs.json
                </code>{" "}
                file with default values
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Requirements:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>None - this is the first command you run</li>
            </ul>
          </div>
        </Card>

        {/* zkkit compile */}
        <Card className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">zkkit compile</h3>
            <p className="text-sm text-muted-foreground">
              Compile a Circom circuit to R1CS (Rank-1 Constraint System) and
              WebAssembly formats.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Command:</p>
            <CommandBlock command="zkkit compile --circuit circuits/schema.circom" />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Options:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  -c, --circuit &lt;path&gt;
                </code>{" "}
                - Path to the .circom file (default: "circuits/schema.circom")
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">What it does:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>
                Runs{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">circom</code>{" "}
                compiler on your circuit file
              </li>
              <li>
                Generates{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  outputs/schema.r1cs
                </code>{" "}
                - R1CS constraint system
              </li>
              <li>
                Generates{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  outputs/schema_js/schema.wasm
                </code>{" "}
                - WebAssembly binary
              </li>
              <li>
                Generates{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  outputs/schema_js/generate_witness.js
                </code>{" "}
                - Witness generator script
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Requirements:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>Circom must be installed and available in PATH</li>
              <li>Valid .circom circuit file must exist</li>
              <li>Rust toolchain required for Circom compilation</li>
            </ul>
          </div>
        </Card>

        {/* zkkit witness */}
        <Card className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">zkkit witness</h3>
            <p className="text-sm text-muted-foreground">
              Generate a witness from circuit inputs. The witness is a complete
              assignment of values to all wires in the circuit.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Command:</p>
            <CommandBlock command="zkkit witness --input inputs/inputs.json --name witness.wtns" />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Options:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  -i, --input &lt;json&gt;
                </code>{" "}
                - Path to input JSON file (default: "inputs/inputs.json")
              </li>
              <li>
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  -n, --name &lt;string&gt;
                </code>{" "}
                - Name of output witness file (default: "witness.wtns")
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">What it does:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>
                Uses snarkjs to calculate witness from the WASM binary and input
                JSON
              </li>
              <li>Evaluates the circuit with your private inputs</li>
              <li>
                Generates{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  outputs/witness.wtns
                </code>{" "}
                file
              </li>
              <li>Verifies that all circuit constraints are satisfied</li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Input JSON Format:</p>
            <div className="bg-muted p-3 rounded text-sm font-mono">
              {`{
  "a": 3,
  "b": 11
}`}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Requirements:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>Circuit must be compiled first</li>
              <li>Valid input JSON file matching circuit's input signals</li>
              <li>snarkjs must be installed globally</li>
            </ul>
          </div>
        </Card>

        {/* zkkit setup:trusted */}
        <Card className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">zkkit setup:trusted</h3>
            <p className="text-sm text-muted-foreground">
              Perform the Powers of Tau ceremony - the first phase of the
              trusted setup. Generates public parameters needed for the proving
              system.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Command:</p>
            <CommandBlock command='zkkit setup:trusted "your-entropy-string"' />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">What it does:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>
                Runs{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  snarkjs powersoftau new
                </code>{" "}
                to create initial parameters
              </li>
              <li>Contributes randomness using your entropy string</li>
              <li>Prepares phase 2 parameters</li>
              <li>Verifies the final Powers of Tau file</li>
              <li>
                Generates{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  pot12_0000.ptau
                </code>
                ,{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  pot12_0001.ptau
                </code>
                , and{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  pot12_final.ptau
                </code>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">⚠️ Security Important:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>The entropy parameter is crucial for security</li>
              <li>Use a cryptographically secure, high-entropy string</li>
              <li>Keep your entropy string secret</li>
              <li>
                This is a one-time setup that can be reused across multiple
                circuits
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Requirements:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>snarkjs must be installed globally</li>
              <li>Sufficient disk space for Powers of Tau files</li>
              <li>This step can take several minutes</li>
            </ul>
          </div>
        </Card>

        {/* zkkit setup:groth */}
        <Card className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">zkkit setup:groth</h3>
            <p className="text-sm text-muted-foreground">
              Perform Phase 2 setup specific to your circuit. Creates the
              proving and verification keys for the Groth16 protocol.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Command:</p>
            <CommandBlock command="zkkit setup:groth" />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Options:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  -v, --verification &lt;string&gt;
                </code>{" "}
                - Verification key filename (default: "verification_key.json")
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">What it does:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>
                Runs{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  snarkjs groth16 setup
                </code>{" "}
                with your R1CS and Powers of Tau
              </li>
              <li>
                Generates{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  circuit_0000.zkey
                </code>{" "}
                - Proving key (keep this private!)
              </li>
              <li>
                Exports{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  verification_key.json
                </code>{" "}
                - Public verification key
              </li>
              <li>Links your specific circuit to the trusted setup</li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Requirements:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>Circuit must be compiled (R1CS file exists)</li>
              <li>
                Trusted setup must be completed (
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  pot12_final.ptau
                </code>{" "}
                exists)
              </li>
              <li>snarkjs must be installed globally</li>
            </ul>
          </div>
        </Card>

        {/* zkkit proof */}
        <Card className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">zkkit proof</h3>
            <p className="text-sm text-muted-foreground">
              Generate a zero-knowledge proof using the witness and proving key.
              This creates a succinct proof that can be verified efficiently.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Command:</p>
            <CommandBlock command="zkkit proof" />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Options:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  -w, --witness &lt;string&gt;
                </code>{" "}
                - Witness filename (default: "witness.wtns")
              </li>
              <li>
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  -p, --proof &lt;string&gt;
                </code>{" "}
                - Proof output filename (default: "proof.json")
              </li>
              <li>
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  -o, --output &lt;string&gt;
                </code>{" "}
                - Public signals output filename (default: "public.json")
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">What it does:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>
                Runs{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  snarkjs groth16 prove
                </code>{" "}
                with the proving key and witness
              </li>
              <li>
                Generates{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  proof.json
                </code>{" "}
                - The zero-knowledge proof
              </li>
              <li>
                Generates{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  public.json
                </code>{" "}
                - Public inputs and outputs
              </li>
              <li>
                The proof is succinct (small size) and can be verified quickly
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Requirements:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>Witness must be generated</li>
              <li>Groth16 setup must be completed (proving key exists)</li>
              <li>snarkjs must be installed globally</li>
            </ul>
          </div>
        </Card>

        {/* zkkit verify */}
        <Card className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">zkkit verify</h3>
            <p className="text-sm text-muted-foreground">
              Verify a zero-knowledge proof using the verification key. Anyone
              can verify the proof without knowing the private inputs.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Command:</p>
            <CommandBlock command="zkkit verify" />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Options:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  -v, --verification &lt;string&gt;
                </code>{" "}
                - Verification key filename (default: "verification_key.json")
              </li>
              <li>
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  -p, --proof &lt;string&gt;
                </code>{" "}
                - Proof filename (default: "proof.json")
              </li>
              <li>
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  -o, --output &lt;string&gt;
                </code>{" "}
                - Public signals filename (default: "public.json")
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">What it does:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>
                Runs{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded">
                  snarkjs groth16 verify
                </code>{" "}
                with verification key, proof, and public signals
              </li>
              <li>
                Checks that the proof is valid for the given public inputs
              </li>
              <li>
                Returns "✔ Proof verified" on success or "✘ Verification failed"
                on failure
              </li>
              <li>Verification is fast and doesn't require private inputs</li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Requirements:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>Proof must be generated</li>
              <li>Verification key must exist</li>
              <li>Public signals JSON must exist</li>
              <li>snarkjs must be installed globally</li>
            </ul>
          </div>
        </Card>
      </div>

      <Separator />

      {/* Workflow */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Complete Workflow</h2>
        <p className="text-muted-foreground mb-4">
          Here's the complete sequence of commands to create, prove, and verify
          a zero-knowledge proof:
        </p>

        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium mb-2">1. Initialize project</p>
            <CommandBlock command="zkkit init" />
          </div>

          <div>
            <p className="text-sm font-medium mb-2">2. Compile circuit</p>
            <CommandBlock command="zkkit compile --circuit circuits/schema.circom" />
          </div>

          <div>
            <p className="text-sm font-medium mb-2">3. Generate witness</p>
            <CommandBlock command="zkkit witness --input inputs/inputs.json" />
          </div>

          <div>
            <p className="text-sm font-medium mb-2">
              4. Perform trusted setup (one-time)
            </p>
            <CommandBlock command='zkkit setup:trusted "your-secure-entropy-string-12345"' />
          </div>

          <div>
            <p className="text-sm font-medium mb-2">5. Setup Groth16</p>
            <CommandBlock command="zkkit setup:groth" />
          </div>

          <div>
            <p className="text-sm font-medium mb-2">6. Generate proof</p>
            <CommandBlock command="zkkit proof" />
          </div>

          <div>
            <p className="text-sm font-medium mb-2">7. Verify proof</p>
            <CommandBlock command="zkkit verify" />
          </div>
        </div>
      </div>

      <Separator />

      {/* Project Structure */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Structure</h2>
        <p className="text-muted-foreground mb-4">
          After running the complete workflow, your project will have the
          following structure:
        </p>

        <div className="bg-muted p-4 rounded text-sm font-mono overflow-x-auto">
          <pre>{`your-project/
├── circuits/
│   └── schema.circom          # Your circuit definitions
├── inputs/
│   └── inputs.json            # Circuit input values
├── outputs/
│   ├── schema.r1cs            # Compiled R1CS
│   ├── witness.wtns           # Generated witness
│   └── schema_js/
│       ├── schema.wasm        # WebAssembly binary
│       └── generate_witness.js
├── proof.json                 # Generated proof
├── public.json                # Public outputs
├── verification_key.json      # Verification key
├── circuit_0000.zkey          # Proving key
└── pot12_final.ptau          # Powers of Tau`}</pre>
        </div>
      </div>
    </div>
  );
}
