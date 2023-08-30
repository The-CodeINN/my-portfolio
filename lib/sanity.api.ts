export const useCdn = false;

export const projectId = checkValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const dataset: string = checkValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'NEXT_PUBLIC_SANITY_DATASET'
);

export const token = checkValue(
  process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN,
  'NEXT_PUBLIC_SANITY_ACCESS_TOKEN'
);

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-08-30';

function checkValue<T>(value: T | undefined, errorMessage: string): T {
  if (value === undefined) {
    throw new Error(`Missing environment variable: ${errorMessage}`);
  }
  return value;
}
