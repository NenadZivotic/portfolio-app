import React from "react";

import styles from "./Logo.module.css";

interface IProps {}

const Logo: React.FC<IProps> = () => {
  return <div className={styles.logo}>Nenad Blog</div>;
};

export default Logo;
