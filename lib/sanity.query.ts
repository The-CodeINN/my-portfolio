import { groq } from 'next-sanity';
import client from './sanity.client';

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {
        "image": asset->url,
        "lqip": asset->metadata.lqip,
        alt,
      },
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      usage
    }`
  );
}
