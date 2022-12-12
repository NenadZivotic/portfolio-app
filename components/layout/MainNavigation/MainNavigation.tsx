import React from "react";

import Link from "next/link";

import Logo from "../Logo/Logo";

import styles from "./MainNavigation.module.css";

interface IProps {}

const MainNavigation: React.FC<IProps> = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
