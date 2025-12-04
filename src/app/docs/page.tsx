import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Introduction</h1>
        <p className="text-lg text-muted-foreground">
          Understanding Zero-Knowledge Proofs
        </p>
      </div>

      <Separator />

      {/* What ZK Proofs Do */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">
          What Do Zero-Knowledge Proofs Do?
        </h2>
        <p className="text-muted-foreground">
          Zero-knowledge proofs allow you to prove that something is true{" "}
          <strong>without revealing why it's true</strong>. It's like proving
          you know a secret without showing the secret itself.
        </p>
      </div>

      <Separator />

      {/* Simple Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">A Simple Example</h2>

        <Card className="p-6 border-l-4 border-l-primary bg-muted/30">
          <h3 className="font-semibold mb-4 text-lg">
            🔐 The Password Scenario
          </h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold">
                ❌ Traditional Way (Not Private):
              </p>
              <div className="bg-muted/50 p-3 rounded text-sm">
                <p className="text-muted-foreground">
                  You type your password → Server sees your actual password →
                  Server checks if it matches
                </p>
                <p className="text-red-600 text-xs mt-2 font-medium">
                  Problem: The server knows your password!
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold">
                ✅ Zero-Knowledge Way (Private):
              </p>
              <div className="bg-muted/50 p-3 rounded text-sm">
                <p className="text-muted-foreground">
                  You create a mathematical proof → Server verifies the proof →
                  Server confirms you know the password
                </p>
                <p className="text-emerald-600 text-xs mt-2 font-medium">
                  Success: Server never sees your actual password!
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-5 bg-muted/50">
          <h3 className="font-semibold mb-3">
            💡 Real-World Example: Age Verification
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Scenario:</strong> You need to
              prove you're over 18 to enter a website.
            </p>
            <div className="space-y-2">
              <p>
                <strong className="text-foreground">Old way:</strong> Show your
                ID card (reveals birthdate, address, photo, ID number)
              </p>
              <p>
                <strong className="text-foreground">ZK way:</strong> Generate a
                proof that says "Yes, I'm over 18" without showing any other
                information
              </p>
            </div>
            <p className="text-emerald-600 font-medium pt-2">
              The website gets its answer, but your privacy is protected!
            </p>
          </div>
        </Card>
      </div>

      <Separator />

      {/* Why It Matters */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Why This Matters</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4 border-l-4 border-l-primary bg-muted/30">
            <h3 className="font-semibold mb-2">🔒 Privacy</h3>
            <p className="text-sm text-muted-foreground">
              Keep your sensitive data private while still proving facts about
              it
            </p>
          </Card>

          <Card className="p-4 border-l-4 border-l-primary bg-muted/30">
            <h3 className="font-semibold mb-2">🛡️ Security</h3>
            <p className="text-sm text-muted-foreground">
              Less data shared means fewer chances for data breaches
            </p>
          </Card>

          <Card className="p-4 border-l-4 border-l-primary bg-muted/30">
            <h3 className="font-semibold mb-2">🌐 Trust</h3>
            <p className="text-sm text-muted-foreground">
              Verify claims without needing to trust the person making them
            </p>
          </Card>

          <Card className="p-4 border-l-4 border-l-primary bg-muted/30">
            <h3 className="font-semibold mb-2">⚡ Efficiency</h3>
            <p className="text-sm text-muted-foreground">
              Proofs are small and fast to verify, even for complex computations
            </p>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Use Cases */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Common Use Cases</h2>

        <Card className="p-5 bg-muted/50">
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <strong>Financial Privacy:</strong> Prove you have enough funds
                without revealing your balance
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <strong>Identity Verification:</strong> Prove you're eligible
                (age, citizenship, etc.) without exposing personal details
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <strong>Blockchain Scaling:</strong> Process thousands of
                transactions and prove they're valid with a single proof
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <strong>Private Voting:</strong> Prove your vote was counted
                without revealing who you voted for
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <strong>Credential Systems:</strong> Prove you have a valid
                license/certificate without sharing the actual document
              </div>
            </li>
          </ul>
        </Card>
      </div>

      <Separator />

      {/* What is zkkit */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">What is zkkit?</h2>
        <p className="text-muted-foreground">
          zkkit is a toolkit that makes it easy to build zero-knowledge proofs.
          It handles all the complex cryptography so you can focus on what you
          want to prove.
        </p>
        <Card className="p-4 bg-muted/50">
          <p className="text-sm text-muted-foreground">
            zkkit provides simple commands to compile circuits, generate proofs,
            and verify them using the industry-standard
            <strong> Groth16</strong> proving system with{" "}
            <strong>Circom</strong> circuit language.
          </p>
        </Card>
      </div>

      <Separator />

      {/* Next Steps */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Ready to Get Started?</h2>
        <p className="text-muted-foreground">
          Follow these steps to start building with zero-knowledge proofs:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/docs/installation">
            <Card className="p-6 h-full hover:border-primary transition-colors cursor-pointer group">
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl font-bold text-primary">1</div>
                <span className="text-2xl text-muted-foreground group-hover:text-primary">
                  →
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Installation</h3>
              <p className="text-sm text-muted-foreground">
                Install zkkit and all required dependencies (Rust, Circom,
                SnarkJS)
              </p>
            </Card>
          </Link>

          <Link href="/docs/quick-start">
            <Card className="p-6 h-full hover:border-primary transition-colors cursor-pointer group">
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl font-bold text-primary">2</div>
                <span className="text-2xl text-muted-foreground group-hover:text-primary">
                  →
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Start</h3>
              <p className="text-sm text-muted-foreground">
                Build your first zero-knowledge proof with a step-by-step
                tutorial
              </p>
            </Card>
          </Link>

          <Link href="/docs/commands/init">
            <Card className="p-6 h-full hover:border-primary transition-colors cursor-pointer group">
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl font-bold text-primary">3</div>
                <span className="text-2xl text-muted-foreground group-hover:text-primary">
                  →
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Commands</h3>
              <p className="text-sm text-muted-foreground">
                Explore all available zkkit commands and their options
              </p>
            </Card>
          </Link>
        </div>

        <div className="pt-4">
          <Card className="p-5 border-l-4 border-l-amber-500 bg-muted/30">
            <p className="text-sm">
              <strong>💡 Tip:</strong> Start with the Quick Start guide to get
              hands-on experience immediately, or dive into Installation if you
              want to set up your environment first.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
