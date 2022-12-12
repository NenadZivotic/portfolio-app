import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { PostContentModel } from "../models/FrontendModels/PostItem.model";

const postsDirectory = path.join(process.cwd(), "content/posts");

export const getPostsFiles = (): string[] => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier: string): PostContentModel => {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);
  const { date, title, image, isFeatured } = matter(fileContent).data;

  const postData = {
    slug: postSlug,
    date,
    title,
    image,
    content,
    isFeatured,
  };

  return postData;
};

export const getAllPosts = (): PostContentModel[] => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = (): PostContentModel[] => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
