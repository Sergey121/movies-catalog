export const IMAGE_PREFIX = 'https://image.tmdb.org/t/p/w500';

export const getFullImagePath = (path: string | null | undefined) => {
  if (path) {
    return `${IMAGE_PREFIX}${path}`;
  }
  return undefined;
};

export const STORE_KEYS = {
  favoriteMovies: 'favorite_movies',
  watchLaterMovies: 'watch_later',
};

export const storeData = (key: string, data: object) => {
  window.localStorage.setItem(key, JSON.stringify(data));
}

export const restoreData = (key: string, defaultValue: any) => {
  const str = window.localStorage.getItem(key);
  if (!str) return defaultValue;
  return JSON.parse(str);
}
