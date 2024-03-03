import React, { ReactElement, ReactNode, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
  path: Array<string>;
};

import Styles from "./path.module.scss";

const Header: React.FC<Props> = ({ path }: Props) => {
  path.unshift("Início");

  let last = path.length - 1;

  return (
    <div className={Styles.pathContainer}>
      {path.map((item, index) => {
        return (
          <div key={index} className={Styles.pathItem}>
            {index == last ? <p className={Styles.pFocus}>{item}</p> : <p>{item}</p>}
            {index !== last && <IoIosArrowForward size={20} />}
          </div>
        );
      })}
    </div>
  );
};

export default Header;
