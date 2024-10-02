export default function Item(props) {
  return (
    <li className="bg-blue-800 p-2 m-4">
      <div>
        <h1 className="text-2xl font-semibold text-black">{props.name}</h1>
        <p className="text-base text-white">
          Buy {props.quantity} in {props.category}
        </p>
      </div>
    </li>
  );
}