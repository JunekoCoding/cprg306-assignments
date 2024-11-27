import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-blue-950 p-5">
      <h1 className="ml-4 mb-2 text-3xl font-bold text-gray-200">Shopping List</h1>
      <ItemList />
    </main>
  );
}
