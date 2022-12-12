import React from "react";

import { PostItemModel } from "../../../models/FrontendModels/PostItem.model";

import PostsGrid from "../PostsGrid/PostsGrid";

import styles from "./AllPosts.module.css";

interface IProps {
  posts: PostItemModel[];
}

const AllPosts: React.FC<IProps> = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
