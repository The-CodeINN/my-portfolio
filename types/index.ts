import { PortableTextBlock } from 'sanity';

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    image: string;
    lqip: string;
    alt: string;
  };
  shortBio: string;
  email: string;
  location: string;
  resumeURL: string;
  og: string;
  fullBio: PortableTextBlock[];
  usage: PortableTextBlock[];
};
