import React, { useState } from 'react';
import styles from './counter.module.css';

export function Counter({}) {
    const [amount, setAmount] = useState(0);
    return (
        <div className={styles.counter}>
            <button onClick={() => setAmount(amount - 1)}>-</button>
            <div>{amount}</div>
            <button onClick={() => setAmount(amount + 1)}>+</button>
        </div>
    )
}
