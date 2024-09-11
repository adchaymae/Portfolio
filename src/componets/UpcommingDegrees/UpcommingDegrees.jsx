import React from "react";

import styles from "./UpcommingDegrees.module.css";
import { getImageUrl } from "../../utils";

export const UpcommingDegrees = () => {
  return (
    <section className={styles.container} id="upcommingDegrees">
      <h2 className={styles.title}>Upcomming Degrees</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Double Master's in MIAGE and Applied Artificial Intelligence</h3>
              <p>University of Côte d'Azur, 2025</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Engineering Degree in Computer Science and Networks</h3>
              <p>Moroccan School of Engineering Sciences (EMSI), 2025</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>IT Architecture Expert, Computer Science</h3>
              <p className={styles.text}>42-Network, 2025</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};