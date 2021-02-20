import { render, fireEvent } from '@testing-library/react';
import { MovieItem } from './index';
import { getFullImagePath } from '../../../helpers';

const onMovieSelected = () => {};

it('renders without crashing', () => {
  const m = window.MOVIE;
  render(<MovieItem onMovieSelected={onMovieSelected} movie={m} />);
});

it('handle select movie', () => {
  const handleSelect = jest.fn();
  const m = window.MOVIE;
  const { container } = render(<MovieItem movie={m} onMovieSelected={handleSelect}/>);
  fireEvent.click(container.firstChild as HTMLDivElement);
  expect(handleSelect).toBeCalledWith(m);
});

it('contain the title', () => {
  const m = window.MOVIE;
  const handleSelect = jest.fn();
  const { getByText } = render(<MovieItem movie={m} onMovieSelected={handleSelect}/>);
  expect(getByText('Some title')).toBeInTheDocument();
});

it('poster contains full url', () => {
  const m = window.MOVIE;
  const handleSelect = jest.fn();
  const { container } = render(<MovieItem movie={m} onMovieSelected={handleSelect}/>);
  const url = getFullImagePath(m.poster_path);
  expect((container.querySelector('.poster') as HTMLDivElement).getAttribute('style')).toMatch(url as string);
});

it('renders extra content', () => {
  const m = window.MOVIE;
  const handleSelect = jest.fn();
  const extraContent = () => 'some extra content here';
  const { getByText } = render(<MovieItem movie={m} onMovieSelected={handleSelect} extraContent={extraContent}/>);
  expect(getByText(extraContent())).toBeInTheDocument();
});
