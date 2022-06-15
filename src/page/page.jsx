import React from 'react';
import {Category} from '../category';
import {ShoppingCart} from '../shopping-cart';
import styles from './page.module.css';

export function Page({content}) {
    return (
        <div className={styles.page}>
            <div className={styles.categoryList}>
                {content.map((category) => <Category name={category.categoryName} items={category.items} />)}
            </div>
            <ShoppingCart />
        </div>
    )
}
