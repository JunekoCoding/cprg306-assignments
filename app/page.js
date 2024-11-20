import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link
          href="/week-2"
          className="text-blue-500 hover:text-orange-500 hover:underline"
        >
          Week 2
        </Link>
      </p>
      <p>
        <Link
          href="/week-3"
          className="text-blue-500 hover:text-orange-500 hover:underline"
        >
          Week 3
        </Link>
      </p>
      <p>
        <Link
          href="/week-4"
          className="text-blue-500 hover:text-orange-500 hover:underline"
        >
          Week 4
        </Link>
      </p>
    </main>
  );
}
