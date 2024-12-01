export default function Item({ item, onUpdateItem }) {
  const increment = () => {
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    onUpdateItem(updatedItem);
  };

  const decrement = () => {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      onUpdateItem(updatedItem);
    }
  };

  return (
    <li className="bg-blue-800 rounded-md p-2 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
      <div>
        <h1 className="text-2xl font-semibold text-black">{item.name}</h1>
        <p className="text-base text-white mb-2">
          Buy {item.quantity} in {item.category}
        </p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="bg-blue-500 text-white text-center px-4 py-2 rounded-md"
        >
          -
        </button>
        <button
          onClick={increment}
          className="bg-blue-500 text-white text-center px-4 py-2 rounded-md"
        >
          +
        </button>
      </div>
    </li>
  );
}
