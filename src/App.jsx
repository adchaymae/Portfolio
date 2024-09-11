import styles from "./App.module.css";
import { Navbar } from "./componets/Navbar/Navbar";
import { Hero } from "./componets/Hero/Hero";
import { UpcommingDegrees } from "./componets/UpcommingDegrees/UpcommingDegrees";
import { Experience } from "./componets/Experience/Experience";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <UpcommingDegrees />
      <Experience />
    </div>
  );
}

export default App;
