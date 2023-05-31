import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'wxsjgdk5',
  dataset: 'production',
  title: 'My Portfolio Website',
  apiVersion: '2023-05-29',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
