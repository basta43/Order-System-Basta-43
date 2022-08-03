import React, { useState } from 'react';
import styles from './counter.module.css';

export function Counter({}) {
    const [amount, setAmount] = useState(0);
    return (
        <div>
            <div className={styles.amount}> {amount} </div>

            <div className={styles.counter}>
                <button className={styles.button} onClick={() =>  amount > 0? setAmount(amount - 1) : 0}>-</button>
                <button className={styles.button} onClick={() => setAmount(amount + 1)}>+</button>
            </div>
        </div>
    )
}
