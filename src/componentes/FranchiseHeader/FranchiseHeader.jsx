import React from "react";
import styles from "./FranchiseHeader.module.css";
import logo from "../../assets/LogoPani.png";
import Nav from "../Nav/Nav";

const FranchiseHeader = () => {
return (
<header className={styles.header}>
<div className={styles.navContainer}>
<Nav />
</div>

<div className={styles.imageSection}>
<div className={styles.imageBackground}></div>
<div className={styles.overlay}></div>
<div className={styles.logoContainer}>
{/* <img src={logo} alt="PANICAFE" className={styles.mainLogo} /> */}
</div>
</div>
</header>
);
};

export default FranchiseHeader;