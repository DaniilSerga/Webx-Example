import {observer} from "mobx-react-lite";
import React, {FC} from "react";
import counterStore from "stores/counter-store";
import styles from "./Counter.module.scss";

const Counter: FC = observer(() => {
    const {count, increment, decrement, total} = counterStore;

    return (
        <div className={styles.container}>
            <button onClick={() => decrement(1)}>-</button>
            <span>{count}</span>
            <button onClick={() => increment(1)}>+</button>
            <span>{total}</span>
        </div>
    );
});

export default Counter;
