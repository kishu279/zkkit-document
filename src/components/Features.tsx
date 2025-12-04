import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const quotes = [
  {
    title: "Privacy-Preserving",
    quote: "Prove you know something without revealing what you know",
    icon: "shield",
  },
  {
    title: "Trustless Verification",
    quote: "Verify computations without trusting the prover",
    icon: "check",
  },
  {
    title: "Cryptographic Security",
    quote: "Mathematical certainty through advanced cryptography",
    icon: "lock",
  },
];

function ShieldIcon() {
  return (
    <svg
      className="w-16 h-16 mx-auto mb-4 text-blue-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-16 h-16 mx-auto mb-4 text-green-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      className="w-16 h-16 mx-auto mb-4 text-purple-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
}

export function Features() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        What is Zero-Knowledge?
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-base md:text-lg">
        Zero-knowledge proofs allow one party to prove to another that a
        statement is true, without revealing any information beyond the validity
        of the statement itself.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        {quotes.map((item, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              {item.icon === "shield" && <ShieldIcon />}
              {item.icon === "check" && <CheckIcon />}
              {item.icon === "lock" && <LockIcon />}
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base italic">
                "{item.quote}"
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Visual Explanation */}
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-12 h-12 text-blue-600 dark:text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Prover</h4>
              <p className="text-sm text-muted-foreground">
                Has secret information
              </p>
            </div>

            <div className="text-center">
              <svg className="w-full h-12" viewBox="0 0 100 50" fill="none">
                <path
                  d="M10 25 L90 25"
                  stroke="currentColor"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                  </marker>
                </defs>
              </svg>
              <p className="text-sm font-semibold mt-2">Zero-Knowledge Proof</p>
              <p className="text-xs text-muted-foreground">
                No secrets revealed
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-12 h-12 text-green-600 dark:text-green-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Verifier</h4>
              <p className="text-sm text-muted-foreground">Confirms validity</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Use Cases */}
      <div className="max-w-6xl mx-auto mt-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Use Cases
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🔐</div>
            <h4 className="font-semibold mb-2">Authentication</h4>
            <p className="text-sm text-muted-foreground">
              Prove identity without revealing credentials
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">💰</div>
            <h4 className="font-semibold mb-2">Private Payments</h4>
            <p className="text-sm text-muted-foreground">
              Transact without exposing amounts
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🗳️</div>
            <h4 className="font-semibold mb-2">Voting Systems</h4>
            <p className="text-sm text-muted-foreground">
              Anonymous yet verifiable voting
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-semibold mb-2">Data Privacy</h4>
            <p className="text-sm text-muted-foreground">
              Verify data without disclosure
            </p>
          </Card>
        </div>
      </div>

      {/* Quick Start */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Get Started in Minutes
        </h3>
        <p className="text-muted-foreground mb-6">
          Install zkkit and start building zero-knowledge applications
        </p>
        <Card className="p-6 bg-muted/30">
          <code className="text-sm md:text-base font-mono">
            npm install -g zkkit
          </code>
        </Card>
      </div>
    </section>
  );
}
