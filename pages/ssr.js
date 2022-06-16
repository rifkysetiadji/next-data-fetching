import React from "react";
import base64 from "base-64";

export default function Ssg({ posts }) {
  return (
    <div>
      {posts.map((d, i) => (
        <p key={i}>{d.webEvent.title}</p>
      ))}
    </div>
  );
}
export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://api.onegml.com/v1/event/intro/0/0/6/1", {
    headers: new Headers({
      Authorization: `Basic ${base64.encode(`onegmlapi:O1n6e0G4M7L`)}`,
    }),
  });
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
