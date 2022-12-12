import React from "react";

import { NextPage } from "next";

import { PostItemModel } from "../../models/FrontendModels/PostItem.model";
import AllPosts from "../../components/posts/AllPosts/AllPosts";
import { getAllPosts } from "../../util/posts-util";

interface PageProps {
  posts: PostItemModel[];
}

const AllPostsPage: NextPage<PageProps> = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
