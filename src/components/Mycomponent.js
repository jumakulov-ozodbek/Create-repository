import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // `count` degan o'zgaruvchi yaratdik

  const increment = () => setCount(count + 1); // `count`ni oshirish

  return (
    <div>
      <h3>Hisoblagich: {count}</h3>
      <button onClick={increment}>Qo‘shish</button>
    </div>
  );
}

export default Counter;
