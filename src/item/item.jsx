import React from 'react';
import { Counter } from '../counter';
import styles from './item.module.css';

export function Item({ name, price, img, showCounter = true }) {
    return (
        <div className={styles.item}> 
            <div className={styles.name}>{name}</div>
            <div className={styles.price}>₪{price} </div>
            <img className={styles.img} src={img} /> 
            {showCounter && <Counter />}
        </div>
    )
}


