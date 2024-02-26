import React from "react";
import styles from "../styles/Message.module.css";

const Message = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) => {
  return (
    <div className={styles[`${type}`]}>
      <p>{children}</p>
    </div>
  );
};

export default Message;
