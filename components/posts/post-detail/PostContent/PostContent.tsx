import React from "react";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { PostContentModel } from "../../../../models/FrontendModels/PostItem.model";
import PostHeader from "../PostHeader/PostHeader";
import styles from "./PostContent.module.css";

interface IProps {
  post: PostContentModel;
}

const PostContent: React.FC<IProps> = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const MarkdownComponents: object = {
    // img: (image: any) => {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p: (paragraph: { children?: boolean; node?: any }) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div style={{ width: "100%", maxWidth: "60rem" }}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code: (code: any) => {
      return (
        <SyntaxHighlighter style={atomDark} language={code.className.slice(-2)}>
          {code.children[0]}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={MarkdownComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
