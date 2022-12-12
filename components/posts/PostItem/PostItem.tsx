import React from "react";

import Link from "next/link";
import Image from "next/image";

import { PostItemModel } from "../../../models/FrontendModels/PostItem.model";

import styles from "./PostItem.module.css";

interface IProps {
  post: PostItemModel;
}

const PostItem: React.FC<IProps> = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <div className={styles.image}>
          <Image
            className={styles.responsive}
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            sizes="100vw"
          />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
