import React from "react";

import PostItem from "../PostItem/PostItem";

import { PostItemModel } from "../../../models/FrontendModels/PostItem.model";

import styles from "./PostsGrid.module.css";

interface IProps {
  posts: PostItemModel[];
}

const PostsGrid: React.FC<IProps> = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
