import React from "react";

import ReactDOM from "react-dom";

import { NotificationModel } from "../../models/FrontendModels/Notification.model";
import { Status } from "../../models/FrontendModels/Status.model";
import styles from "./Notification.module.css";

interface IProps extends NotificationModel {}

const Notification: React.FC<IProps> = ({ title, message, status }) => {
  let statusClasses = "";

  if (status === Status.SUCCESS) {
    statusClasses = styles.success;
  }

  if (status === Status.ERROR) {
    statusClasses = styles.error;
  }

  const cssClasses = `${styles.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications") as Element
  );
};

export default Notification;
