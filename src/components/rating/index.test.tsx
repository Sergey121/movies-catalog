import { render } from '@testing-library/react';
import { Rating } from './index';

const movie = window.MOVIE;
it('renders without crashing', () => {
  render(<Rating voteAverage={movie.vote_average}/>);
});

it('rating rendered', () => {
  const { container } = render(<Rating voteAverage={movie.vote_average}/>);
  expect((container.querySelector('span') as HTMLSpanElement).textContent).toBe('5.6');
});

it('svg icon rendered', () => {
  const { container } = render(<Rating voteAverage={movie.vote_average}/>);
  expect((container.querySelector('svg'))).toBeInTheDocument();
});
