import React, { useState } from "react";

import Styles from "./modal.module.scss";
import { IoCloseOutline } from "react-icons/io5";
type Props = {
  title: string;
  content: any;
  close: () => void;
};

const Modal: React.FC<Props> = ({ title, content, close }: Props) => {
  const [value, setValue] = useState("");

  return (
    <div className={Styles.modal}>
      <div className={Styles.container}>
        <div className={Styles.header}>
          <h2>{title}</h2>
          <IoCloseOutline onClick={() => close()} size={24} />
        </div>
        
        {content}
      </div>
    </div>
  );
};

export default Modal;
