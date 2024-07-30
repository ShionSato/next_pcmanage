import ErrorBoundary from './components/ErrorBoundary';
import styles from "./page.module.css";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import List from "./components/List/list";
import Status from "./components/status/status";

export default function Home() {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}
