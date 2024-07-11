import { defineConfig } from 'sanity';
import { projectId, dataset } from './lib/env.api';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import { table } from '@sanity/table';
import { schemaTypes } from './schemas';
import { structureTool } from 'sanity/structure';

const config = defineConfig({
  name: 'thecodeinn',
  title: 'thecodeinn.vercel.app',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [structureTool(), visionTool(), codeInput(), table()],
  schema: { types: schemaTypes },
});

export default config;
