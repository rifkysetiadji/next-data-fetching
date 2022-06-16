import base64 from "base-64";
export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://api.onegml.com/v1/event/intro/0/0/6/1", {
    headers: new Headers({
      Authorization: `Basic ${base64.encode(`onegmlapi:O1n6e0G4M7L`)}`,
    }),
  });
  const posts = await res.json();
  return posts;
}
