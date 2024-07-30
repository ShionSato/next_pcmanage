'use client'
import { useEffect } from 'react';
import styles from "./page.module.css";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import List from "./components/List/list";
import Status from "./components/status/status";

export default function Home() {
  useEffect(() => {
    const handleError = (event) => {
      if (event.message.includes('Hydration failed')) {
        event.stopImmediatePropagation();
      }
    };

    const handleUnhandledRejection = (event) => {
      if (event.reason.message.includes('Hydration failed')) {
        event.stopImmediatePropagation();
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

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
