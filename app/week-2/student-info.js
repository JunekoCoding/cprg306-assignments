import Link from 'next/link';

export default function StudentInfo() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-2">Student Information</h1>
      <p className="mb-4">June Gomez</p>
      <Link
        href="https://github.com/JunekoCoding/cprg306-assignments"
        className="text-blue-500 underline"
      >
        GitHub Link
      </Link>
    </main>
  );
}