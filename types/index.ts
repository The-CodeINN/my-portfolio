import { TableRow } from '@sanity/table';
import { PortableTextBlock } from 'sanity';

export interface Table {
  rows?: TableRow[];
  title?: string;
}

export interface TableValueProps {
  table?: Table;
  caption?: string;
}

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

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  repository: string;
  logo: string;
  coverImage: {
    image: string;
    alt: string | null;
    lqip: string;
  };
  description: PortableTextBlock[];
};
