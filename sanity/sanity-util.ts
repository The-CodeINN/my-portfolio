import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "wxsjgdk5",
    dataset: "production",
    apiVersion: "2023-05-29",
  });

  return client.fetch(
    groq`*[_type == "project"]{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                "image": image.asset->url,
                url,
                content,
          }`
  );
}
