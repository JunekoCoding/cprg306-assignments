import Link from "next/link";

export default function Page() {
  // Array of weeks to avoid repeating <Link> 10 times
  const weeks = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      {/* Grid container for the links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {weeks.map((week) => (
          <Link
            key={week}
            href={`/week-${week}/`}
            className="flex items-center justify-center p-4 bg-slate-900 border border-slate-800 rounded-lg text-blue-400 hover:text-orange-500 hover:border-orange-500 hover:bg-slate-800 transition-all font-medium shadow-sm"
          >
            Week {week}
          </Link>
        ))}
      </div>
    </main>
  );
}