import { useState } from "react";
import styles from "./Greetings.module.css";

const Greetings = () => {
  const [name, setName] = useState();

  const displayChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div className={styles.form}>
        <label className={styles.label} htmlFor="name">Enter Your name:</label>
        {/* <br /> */}
        <input
          className={styles.input}
          name="name"
          value={name}
          type="text"
          onChange={displayChange}
        />
      </div>

      <div className={styles.output}>
        {name && <h2>Hello {name}!</h2>}
        </div>
    </>
  );
};

export default Greetings;
