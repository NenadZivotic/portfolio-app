import React from "react";

import { GetStaticPropsContext, NextPage } from "next";

import PostContent from "../../components/posts/post-detail/PostContent/PostContent";
import { getPostData, getPostsFiles } from "../../util/posts-util";
import { PostContentModel } from "../../models/FrontendModels/PostItem.model";

interface PageProps {
  post: PostContentModel;
}

const PostDetailPage: NextPage<PageProps> = ({ post }) => {
  return <PostContent post={post} />;
};

export const getStaticProps = (context: GetStaticPropsContext) => {
  const slug = context.params?.slug;

  const postData = getPostData(slug as string);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
