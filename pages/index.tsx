import React from "react";

import { NextPage } from "next";

import { FeaturedPosts, Hero } from "../components/home-page-components";
import { PostItemModel } from "../models/FrontendModels/PostItem.model";
import { getFeaturedPosts } from "../util/posts-util";

interface PageProps {
  posts: PostItemModel[];
}

const HomePage: NextPage<PageProps> = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
