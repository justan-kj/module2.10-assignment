import styles from './Product.module.css'

import { useState } from 'react';
import Card from './Card';
import Viewlist from './Viewlist'
function Product() {

  const [list, setList] = useState([]);
  const [count, setCount] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState('Banana');
  const [price, setPrice] = useState(2.99);
  const [total, setTotal] = useState([0,0,0])

  const handlerPlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };
  const handlerMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      if (count < 0) return 0;
      return count;
    });
  };

  const handlerChangeName = (value) => {
    setName(value);
  };
  const handlerChangePrice = (value) => {
    setPrice(value);
  };


  const handlerAddProduct = () => {
    console.log('handlerAddProduct');

    const newSubtotal = price * ((100 - discount) / 100) * count

    const newItem = {
      name: name,
      price: price,
      discount: discount,
      quantity: count,
      subtotal: newSubtotal,
  
    }
    const newList = [...list, newItem]

    setList(newList);

    const newTotal = newList.map(item => item.subtotal).reduce((prev, next) => prev + next);
    const newFullTotal = newList.map(item => item.price * item.quantity).reduce((prev, next) => prev + next);
    console.log(newTotal)
    setTotal([      
      newFullTotal,
      newFullTotal - newTotal,
      newTotal
    ]
    )
  }

  const handlerClearProduct = () => {
    setList([]);
    setTotal([0,0,0]);
  }

  return (
    <div className={styles.container}>
      <Card
        count={count}
        discount={discount}
        name={name}
        price={price}
        handlerPlus={handlerPlus}
        handlerMinus={handlerMinus}
        handlerChangeName={handlerChangeName}
        handlerChangePrice={handlerChangePrice}
        handlerAddProduct={handlerAddProduct}
        handlerClearProduct={handlerClearProduct}
      />
      <Viewlist list={list} total={total} />
    </div>
  );
}
export default Product;
