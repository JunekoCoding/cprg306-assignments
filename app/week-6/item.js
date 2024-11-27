export default function Item({ item }) {
  return (
    <li className="bg-blue-800 rounded-md p-2 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
      <div>
        <h1 className="text-2xl font-semibold text-black">{item.name}</h1>
        <p className="text-base text-white">
          Buy {item.quantity} in {item.category}
        </p>
      </div>
    </li>
  );
}