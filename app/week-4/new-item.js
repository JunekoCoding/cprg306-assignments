'use client';

import { useState } from 'react';

export default function NewItem() {
    //initialize state variable 'quantity' with a value of 1
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        //increment the quantity by 1
        setQuantity((prevQuantity) => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity));
    };

    const decrement = () => {
        //decrement the quantity by 1
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
    };

    return (
        <div class='bg-white px-4 py-4 my-5'>
            <div class='flex items-center gap-2'>
                <button onClick={increment} disabled={quantity === 20}className='px-2 py-2 font-bold text-white bg-blue-400 rounded disabled:bg-gray-400'>+</button>
                <span class ='text-black'>{quantity}</span>
                <button onClick={decrement} disabled={quantity === 1}className='px-2.5 py-2 font-bold text-white bg-blue-400 rounded disabled:bg-gray-400'>-</button>
            </div>
        </div>
    );
}
