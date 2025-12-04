import { CommandBlock } from "@/components/CommandBlock";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Installation</h1>
        <p className="text-lg text-muted-foreground">
          Set up your environment with all required dependencies
        </p>
      </div>

      <Separator />

      {/* Prerequisites Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Prerequisites</h2>
          <p className="text-muted-foreground">
            Before installing zkkit, ensure you have the following tools
            installed on your system.
          </p>
        </div>

        {/* Rust Installation */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">1. Rust</h3>
          <p className="text-muted-foreground">
            Rust is required for compiling zero-knowledge circuits efficiently.
          </p>

          <Tabs defaultValue="linux" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="linux">Linux (Ubuntu)</TabsTrigger>
              <TabsTrigger value="mac">macOS</TabsTrigger>
              <TabsTrigger value="windows">Windows</TabsTrigger>
            </TabsList>

            <TabsContent value="linux" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Install Rust using rustup on Ubuntu/Debian-based systems:
              </p>
              <CommandBlock command="curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh" />
              <p className="text-sm text-muted-foreground">
                After installation, configure your current shell:
              </p>
              <CommandBlock command="source $HOME/.cargo/env" />
              <p className="text-sm text-muted-foreground">
                Verify the installation:
              </p>
              <CommandBlock command="rustc --version" />
            </TabsContent>

            <TabsContent value="mac" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Install Rust using rustup on macOS:
              </p>
              <CommandBlock command="curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh" />
              <p className="text-sm text-muted-foreground">
                After installation, configure your current shell:
              </p>
              <CommandBlock command="source $HOME/.cargo/env" />
              <p className="text-sm text-muted-foreground">
                Verify the installation:
              </p>
              <CommandBlock command="rustc --version" />
            </TabsContent>

            <TabsContent value="windows" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Download and run the Rust installer for Windows:
              </p>
              <Card className="p-4 bg-muted/50">
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    Download the installer from{" "}
                    <a
                      href="https://rustup.rs"
                      className="text-primary underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      rustup.rs
                    </a>
                  </li>
                  <li>
                    Run{" "}
                    <code className="bg-muted px-1.5 py-0.5 rounded">
                      rustup-init.exe
                    </code>
                  </li>
                  <li>Follow the on-screen instructions</li>
                  <li>Restart your terminal after installation</li>
                </ol>
              </Card>
              <p className="text-sm text-muted-foreground mt-4">
                Verify the installation in PowerShell or Command Prompt:
              </p>
              <CommandBlock command="rustc --version" />
            </TabsContent>
          </Tabs>
        </div>

        {/* Circom Installation */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">2. Circom</h3>
          <p className="text-muted-foreground">
            Circom is the circuit compiler for zero-knowledge proofs.
          </p>

          <Tabs defaultValue="linux" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="linux">Linux (Ubuntu)</TabsTrigger>
              <TabsTrigger value="mac">macOS</TabsTrigger>
              <TabsTrigger value="windows">Windows</TabsTrigger>
            </TabsList>

            <TabsContent value="linux" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Install Circom on Ubuntu/Debian-based systems:
              </p>
              <CommandBlock command="git clone https://github.com/iden3/circom.git" />
              <CommandBlock command="cd circom" />
              <CommandBlock command="cargo build --release" />
              <CommandBlock command="cargo install --path circom" />
              <p className="text-sm text-muted-foreground">
                Verify the installation:
              </p>
              <CommandBlock command="circom --version" />
            </TabsContent>

            <TabsContent value="mac" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Install Circom on macOS:
              </p>
              <CommandBlock command="git clone https://github.com/iden3/circom.git" />
              <CommandBlock command="cd circom" />
              <CommandBlock command="cargo build --release" />
              <CommandBlock command="cargo install --path circom" />
              <p className="text-sm text-muted-foreground">
                Verify the installation:
              </p>
              <CommandBlock command="circom --version" />
            </TabsContent>

            <TabsContent value="windows" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Install Circom on Windows using PowerShell:
              </p>
              <CommandBlock command="git clone https://github.com/iden3/circom.git" />
              <CommandBlock command="cd circom" />
              <CommandBlock command="cargo build --release" />
              <CommandBlock command="cargo install --path circom" />
              <p className="text-sm text-muted-foreground">
                Verify the installation:
              </p>
              <CommandBlock command="circom --version" />
            </TabsContent>
          </Tabs>
        </div>

        {/* SnarkJS Installation */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">3. SnarkJS</h3>
          <p className="text-muted-foreground">
            SnarkJS is a JavaScript library for zero-knowledge proofs. Requires
            Node.js to be installed.
          </p>

          <Tabs defaultValue="linux" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="linux">Linux (Ubuntu)</TabsTrigger>
              <TabsTrigger value="mac">macOS</TabsTrigger>
              <TabsTrigger value="windows">Windows</TabsTrigger>
            </TabsList>

            <TabsContent value="linux" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                First, ensure Node.js is installed. Then install SnarkJS
                globally:
              </p>
              <CommandBlock command="npm install -g snarkjs" />
              <p className="text-sm text-muted-foreground">
                Verify the installation:
              </p>
              <CommandBlock command="snarkjs --version" />
            </TabsContent>

            <TabsContent value="mac" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                First, ensure Node.js is installed. Then install SnarkJS
                globally:
              </p>
              <CommandBlock command="npm install -g snarkjs" />
              <p className="text-sm text-muted-foreground">
                Verify the installation:
              </p>
              <CommandBlock command="snarkjs --version" />
            </TabsContent>

            <TabsContent value="windows" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                First, ensure Node.js is installed. Then install SnarkJS
                globally using PowerShell or Command Prompt:
              </p>
              <CommandBlock command="npm install -g snarkjs" />
              <p className="text-sm text-muted-foreground">
                Verify the installation:
              </p>
              <CommandBlock command="snarkjs --version" />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Separator />

      {/* zkkit Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Install zkkit</h2>
        <p className="text-muted-foreground">
          Once all prerequisites are installed, install zkkit globally using
          npm:
        </p>
        <CommandBlock command="npm install -g zkkit" />
        <p className="text-sm text-muted-foreground">
          Verify the installation:
        </p>
        <CommandBlock command="zkkit --version" />
      </div>

      <Separator />

      {/* Next Steps */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <p className="text-muted-foreground">
          Now that you have zkkit installed, explore the available commands:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link href="/docs/commands/init">
            <Card className="p-4 hover:bg-accent transition-colors cursor-pointer">
              <h3 className="font-semibold mb-1">zkkit init</h3>
              <p className="text-sm text-muted-foreground">
                Initialize a new project
              </p>
            </Card>
          </Link>
          <Link href="/docs/commands/compile">
            <Card className="p-4 hover:bg-accent transition-colors cursor-pointer">
              <h3 className="font-semibold mb-1">zkkit compile</h3>
              <p className="text-sm text-muted-foreground">Compile circuits</p>
            </Card>
          </Link>
          <Link href="/docs/commands/witness">
            <Card className="p-4 hover:bg-accent transition-colors cursor-pointer">
              <h3 className="font-semibold mb-1">zkkit witness</h3>
              <p className="text-sm text-muted-foreground">
                Generate witness files
              </p>
            </Card>
          </Link>
          <Link href="/docs/commands/setup-trusted">
            <Card className="p-4 hover:bg-accent transition-colors cursor-pointer">
              <h3 className="font-semibold mb-1">zkkit setup:trusted</h3>
              <p className="text-sm text-muted-foreground">
                Trusted setup ceremony
              </p>
            </Card>
          </Link>
          <Link href="/docs/commands/setup-groth">
            <Card className="p-4 hover:bg-accent transition-colors cursor-pointer">
              <h3 className="font-semibold mb-1">zkkit setup:groth</h3>
              <p className="text-sm text-muted-foreground">Groth16 setup</p>
            </Card>
          </Link>
          <Link href="/docs/commands/proof">
            <Card className="p-4 hover:bg-accent transition-colors cursor-pointer">
              <h3 className="font-semibold mb-1">zkkit proof</h3>
              <p className="text-sm text-muted-foreground">Generate proofs</p>
            </Card>
          </Link>
          <Link href="/docs/commands/verify">
            <Card className="p-4 hover:bg-accent transition-colors cursor-pointer">
              <h3 className="font-semibold mb-1">zkkit verify</h3>
              <p className="text-sm text-muted-foreground">Verify proofs</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
