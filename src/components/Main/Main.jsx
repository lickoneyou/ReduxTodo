import React from "react";
import { TextArea } from "./TextArea/TextArea";
import styles from "./Main.module.css";
import Btn from "./Btn/Btn";

const Main = () => {
  return (
    <main className={styles.main}>
      <TextArea />
      <Btn />
    </main>
  );
};

export default Main;
