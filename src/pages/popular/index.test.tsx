import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { PopularPage } from './index';

const server = setupServer(
  rest.get(`https://api.themoviedb.org/3/movie/popular`, (req, res, ctx) => {
    return res(ctx.json({ results: [window.MOVIE] }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('should render popular list', async () => {
  render(<PopularPage/>);
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  await waitFor(() => screen.findByText('Popular'));
  expect(screen.getAllByText('Some title')).toHaveLength(1);

  fireEvent.click(screen.getByText('Load more'));

  expect(screen.getByText('Load more')).toHaveAttribute('disabled');

  await waitFor(() =>
    expect(screen.getAllByText('Some title')).toHaveLength(2)
  );

  fireEvent.click(screen.getByText('Load more'));

  expect(screen.getByText('Load more')).toHaveAttribute('disabled');

  await waitFor(() =>
    expect(screen.getAllByText('Some title')).toHaveLength(3)
  );
});


