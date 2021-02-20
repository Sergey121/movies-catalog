import { IMAGE_PREFIX, getFullImagePath, restoreData, storeData } from './index';

it('creates an image full path', () => {
  expect(getFullImagePath(undefined)).toBe(undefined);
  expect(getFullImagePath(null)).toBe(undefined);

  let path = `/image/test.png`;
  expect(getFullImagePath(path)).toBe(`${IMAGE_PREFIX}${path}`);
});

it('validate stored and restored data', () => {
  let defaultArr: string[] = [];
  const key = 'some_test_key';
  let data = restoreData(key, defaultArr);
  expect(data).toBe(defaultArr);

  data = [{ test: 'test data' }];

  storeData(key, data);
  const restored = restoreData(key, defaultArr);

  expect(restored).toStrictEqual(data);
});
