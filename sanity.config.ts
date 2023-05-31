import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: 'wxsjgdk5',
  dataset: 'new',
  title: 'My Portfolio Website',
  apiVersion: '2023-05-29',
  basePath: '/admin',
  plugins: [deskTool()],
});

export default config;
