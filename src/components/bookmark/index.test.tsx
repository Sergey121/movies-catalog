import { render, fireEvent } from '@testing-library/react';
import { Bookmark } from './index';
import { restoreData, STORE_KEYS } from '../../helpers';

it('can add and remove movie from watch later', () => {
  const m = window.MOVIE;
  const { container } = render(<Bookmark movie={m}/>);

  const wrapper = container.querySelector('.wrapper') as HTMLDivElement;
  expect(wrapper.getAttribute('title')).toBe('Add to favorite');
  expect(wrapper.classList.contains('selected')).toBe(false);
  let data = restoreData(STORE_KEYS.favoriteMovies, []);
  expect(data).toStrictEqual([]);

  fireEvent.click(wrapper);

  expect(wrapper.getAttribute('title')).toBe('Remove from favorite');
  expect(wrapper.classList.contains('selected')).toBe(true);

  data = restoreData(STORE_KEYS.favoriteMovies, []);
  expect(data).toStrictEqual([m]);
});
