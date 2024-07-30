'use client'
import styles from "./page.module.css";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import List from "./components/List/list";
import Status from "./components/status/status";

window.addEventListener('error', (event) => {
  if (event.message.includes('Hydration failed')) {
    event.stopImmediatePropagation();
  }
});

window.addEventListener('unhandledrejection', (event) => {
  if (event.reason.message.includes('Hydration failed')) {
    event.stopImmediatePropagation();
  }
});
export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <div>
          <Sidebar />
        </div>
        <div className={styles.List}>
          <List />
        </div>
        <div className={styles.detail}>
          <Status />
        </div>
      </div>
    </main>
    </>
  )
}
