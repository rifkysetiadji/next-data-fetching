import React from "react";
import base64 from "base-64";
import { loadPosts } from "../lib/fetch-posts";
export default function Ssg({ posts }) {
  return (
    <div>
      {posts.map((d, i) => (
        <p key={i}>{d.webEvent.title}</p>
      ))}
    </div>
  );
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const posts = await loadPosts();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
