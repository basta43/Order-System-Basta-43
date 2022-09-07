import React, { useState } from 'react';
import {Category} from '../category';
import {ShoppingCart} from '../shopping-cart';
import {counter} from '../counter';
import styles from './page.module.css';

export function Page({content}) {
    const [currentOrder, setCurrentOrder] = useState([
        { name: 'gold star', amount: 0},
        { name: 'arak', amount: 5} 
        
    ]);
    return (
        <div className={styles.page}>
            <div className={styles.categoryList}>
                {content.map((category) => <Category name={category.categoryName} items={category.items} />)}
            </div>
            <ShoppingCart  order = {currentOrder} />
           
        </div>
    )
}
