import styles from "./buttoncounter.module.css" ;
import { useState } from "react";

const Counter = ()=>{

    const [count , setCount] = useState(0);
    const displayCount = ()=>{
        setCount(count + 1);
    };

    const decrementCount =()=>{
        setCount(count - 1);
    };

    return(
        <>
            <div className={styles.counter}>
                <p className={styles.para}>Button clicked {count} times</p>
                <button className={styles.button} onClick={displayCount}>Submit</button>
            </div>
            <button className={styles.button} onClick={decrementCount}>Decrement</button>
        </>
    )
}

export default Counter;