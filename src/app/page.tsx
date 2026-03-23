import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Your idea starts here
      </h1>
      <p className="max-w-md text-lg text-muted-foreground">
        Auth, database, and hosting are already wired up. Just start building.
      </p>
      <div className="flex gap-3">
        <Link
          href="/signup"
          className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
        >
          Get started
        </Link>
        <Link
          href="/login"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Sign in
        </Link>
      </div>
    </main>
  );
}
