import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> Hi, I'm Chaymae Adlane</h1>
                <p className={styles.description}>Final-year Computer Science and Networks Engineering student with a strong passion for software development. 
                    Let's connect to explore how I can contribute to your team.</p>
                <a href="mailto:chaymaeadlane65@gmail.com" className={styles.contactBtn}>Hire me !</a>
            </div>
            <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};