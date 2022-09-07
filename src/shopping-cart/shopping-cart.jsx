import React from 'react';
import styles from './shopping-cart.module.css';
import {Item} from '../item';
import { Counter } from '../counter';

export function ShoppingCart(props) {
    let line =1;
    return (
        <div className={styles.shoppingCart}>
            <h2>shopping cart</h2>
            <div id="line"> {line} </div>
            <div className={styles.orderLine}>
                
            </div>
        </div>
    )
}

