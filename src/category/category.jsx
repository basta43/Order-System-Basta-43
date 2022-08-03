import React from 'react';
import {Item} from '../item';
import styles from './category.module.css';

export function Category({name, items}) {
        return (
        <div className={styles.category}>
            <h2>{name}</h2>
            <div className={styles.itemList}>
                {items.map(item => <Item name={item.name} price={item.price} img={item.img} />)}
            </div>
        </div>
    )
}