import styles from "./page.module.scss";
import Header from "../../components/header";
import Table from "../../components/table";

const Home = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Table />
    </main>
  );
};

export default Home;
