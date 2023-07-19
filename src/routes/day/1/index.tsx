import { component$ } from "@builder.io/qwik";
import styles from "./styles.module.css";

export default component$(() => (
  <main class={styles.rootX}>
    <h1 aria-label="100 days css challenge">
      <div aria-hidden />
      <div aria-hidden />
      <div aria-hidden />
      <div aria-hidden />
      <span>days</span>
      <span>css challenge</span>
    </h1>
  </main>
));
