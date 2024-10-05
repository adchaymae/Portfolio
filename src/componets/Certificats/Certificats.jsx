import React from "react";

import styles from "./Certificats.module.css";
import certificats from "../../data/certificats.json";
import { getImageUrl } from "../../utils";

export const Certificats = () => {
  return (
    <section className={styles.container} id="certificats">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>
        <ul className={styles.certificats}>
          {certificats.map((certificatsItem, id) => {
            return (
              <li key={id} className={styles.certificatsItem}>
                <div className={styles.certificatsItemDetails}>
                  <h3>{`${certificatsItem.role} - ${certificatsItem.organisation} ,${certificatsItem.startDate}`}</h3>
                  <ul>
                    {certificatsItem.certificats.map((certificats, id) => {
                      return <li key={id}>{certificats}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
