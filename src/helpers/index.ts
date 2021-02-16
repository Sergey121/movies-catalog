const IMAGE_PREFIX = 'https://image.tmdb.org/t/p/w500';

export const getFullImagePath = (path: string | null | undefined) => {
  if (path) {
    return `${IMAGE_PREFIX}${path}`;
  }
  return undefined;
};
