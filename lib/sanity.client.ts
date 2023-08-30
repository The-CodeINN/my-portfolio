import { createClient, type ClientConfig } from 'next-sanity';
import { projectId, dataset, useCdn, token, apiVersion } from './sanity.api';

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token,
  ignoreBrowserTokenWarning: true,
};

const client = createClient(config);

export default client;
