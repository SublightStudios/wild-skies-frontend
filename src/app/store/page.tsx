export default function StorePage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-ws-darker flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-ws-accent mb-4">404</h1>
        <p className="text-ws-text text-xl mb-2">Store Coming Soon</p>
        <p className="text-ws-muted mb-8">Check back later...</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-ws-accent text-ws-darker font-medium rounded-lg hover:shadow-glow transition-all"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
