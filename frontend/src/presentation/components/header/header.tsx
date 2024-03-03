import React, { ReactElement, ReactNode, useState } from "react";
import { CiLogout } from "react-icons/ci";


import Styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={Styles.headerTrack}>
        <img src="https://149513748.v2.pressablecdn.com/wp-content/uploads/2023/02/track_logo_dpi.png" width={207}></img>
        <div className={Styles.logOutSection}>
            <p>Log Out</p>
            <CiLogout size={28} />
        </div>
    </header>
  );
};

export default Header;
