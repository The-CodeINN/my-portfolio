import { defineConfig } from 'sanity';
import { projectId, dataset } from './lib/sanity.api';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';

const config = defineConfig({
  name: 'thecodeinn',
  title: 'thecodeinn.vercel.app',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [deskTool(), visionTool(), codeInput()],
});

export default config;
