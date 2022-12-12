import React from "react";

import { PostsGrid } from "../../posts";
import { PostItemModel } from "../../../models/FrontendModels/PostItem.model";
import styles from "./FeaturedPosts.module.css";

interface IProps {
  posts: PostItemModel[];
}

const FeaturedPosts: React.FC<IProps> = ({ posts }) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
