import React from 'react';
import styles from './shopping-cart.module.css';
// import { Item } from '../item';
// import { Counter } from '../counter';
const order = {
  drinks: [
    { name: 'goldstar', price: 15, amount: 1  },
    { name: 'carlsberg', price: 15, amount: 3  },
    { name: 'arak', price: 15, amount: 5  },
      
  ]
}

export function ShoppingCart() {
  console.log({ order });

  return (
    <div className={styles.shoppingCart}>
      <h2>shopping cart</h2>
      {order.map((item) => {
        return (
          <div>
            <div>{item.name}</div>
            <div className={styles.orderLine}>{item.amount}</div>
          </div>
        );
      })}
    </div>
  );
}
