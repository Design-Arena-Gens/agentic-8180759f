export function NewsletterSignup() {
  return (
    <section
      id="newsletter"
      className="rounded-[40px] border border-zinc-200 bg-white p-12 shadow-2xl shadow-amber-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-amber-500/20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600 dark:text-amber-300">
          Stay in the loop
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Get the Orbit Notes briefing every two weeks.
        </h2>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300">
          Essays, templates, and curated reads on product storytelling. No spam,
          ever. You&apos;ll also receive a library of free facilitation guides
          for onboarding your team.
        </p>
        <form className="mt-8 flex flex-col gap-4 text-left sm:flex-row sm:items-center sm:justify-center">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className="h-12 w-full rounded-full border border-zinc-200 px-5 text-sm text-zinc-700 shadow-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-amber-300 dark:focus:ring-amber-500/40 sm:max-w-md"
          />
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-6 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 dark:bg-amber-400 dark:text-zinc-900 dark:hover:bg-amber-300"
          >
            Join the list
          </button>
        </form>
        <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
          7,000+ people already subscribe. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}
