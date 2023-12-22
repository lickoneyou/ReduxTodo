import React from "react";
import TextArea from "./TextArea/TextArea";
import Btn from "./Btn/Btn";
import styles from './Main.module.css'

const Main = () => {
  return (
    <main className={styles.main}>
      <TextArea />
      <Btn />
    </main>
  );
};

export default Main;
