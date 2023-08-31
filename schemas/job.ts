import { Briefcase } from 'lucide-react';

const job = {
  name: 'job',
  title: 'Job',
  type: 'document',
  icon: Briefcase,
  fields: [
    {
      name: 'name',
      title: 'Company Name',
      type: 'string',
      description: 'The name of the company you worked for',
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      description: 'The title of the job. Ex: Software Engineer',
    },
    {
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
    },
    {
      name: 'url',
      title: 'Company Website',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'text',
      rows: 3,
      description: 'A short description of the job',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'The location of the job{state}, {country} or {remote}',
    },
  ],
};

export default job;
