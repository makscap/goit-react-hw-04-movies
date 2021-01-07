import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
import Header from './components/Header';
import Loader from './components/Loader';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);
const SearchMoviesView = lazy(() =>
  import('./views/MoviesView' /* webpackChunkName: "movies-search-view" */),
);
const MovieDetailsView = lazy(() =>
  import(
    './views/MovieDetailsView' /* webpackChunkName: "movie-details-view" */
  ),
);

export default function App() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <SearchMoviesView />
          </Route>

          <Route path="/movies/:slug">
            <MovieDetailsView />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3000} />
    </Container>
  );
}