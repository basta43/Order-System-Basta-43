import React from 'react';
import { Counter } from '../counter';
import styles from './item.module.css';

export function Item({ name, price, img }) {
    return (
        <div  className={styles.item}>
            <div style={{ backgroundImage: `url(${img})` }}>
                <div>{name}</div>
                <div>{price}</div>
            </div>
            <Counter />

        </div>

    )
}
