import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl flex justify-center">CPRG 306: Web Development 2 - Assignments</h1>
      <p className="flex justify-center">
        <Link
          href="/week-2"
          className="text-blue-500 hover:text-orange-500 hover:underline"
        >
          Week 2
        </Link>
      </p>
      <p className="flex justify-center">
        <Link
          href="/week-3"
          className="text-blue-500 hover:text-orange-500 hover:underline"
        >
          Week 3
        </Link>
      </p>
      <p className="flex justify-center">
        <Link
          href="/week-4"
          className="text-blue-500 hover:text-orange-500 hover:underline"
        >
          Week 4
        </Link>
      </p>
      <p className="flex justify-center">
        <Link
          href="/week-5"
          className="text-blue-500 hover:text-orange-500 hover:underline"
        >
          Week 5
        </Link>
      </p>
      <p className="flex justify-center">
        <Link
          href="/week-6"
          className="text-blue-500 hover:text-orange-500 hover:underline"
        >
          Week 6
        </Link>
      </p>
    </main>
  );
}
