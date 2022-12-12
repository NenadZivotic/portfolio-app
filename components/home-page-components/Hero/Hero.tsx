import React from "react";

import Image from "next/image";

import styles from "./Hero.module.css";

interface IProps {}

const Hero: React.FC<IProps> = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/profile-pic.jpg"
          alt="An image showing me"
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <h1>Hi, my name is Nenad</h1>
      <p>
        I am a Frontend Developer with experience in JavaScript and its
        frameworks like Angular and React.js
      </p>
    </section>
  );
};

export default Hero;
