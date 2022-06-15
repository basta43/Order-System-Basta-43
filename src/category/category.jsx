import React from 'react';
import {Item} from '../item';
import styles from './category.module.css';

export function Category({name, items}) {
    return (
        <div className={styles.category}>
            <h3>{name}</h3>
            <div className={styles.itemList}>
                {items.map(item => <Item name={item.name} price={item.price} />)}
            </div>
        </div>
    )
}