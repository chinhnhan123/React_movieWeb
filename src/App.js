import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import Form from "./components/form/Form";
import HeaderMain from "./components/HeaderMain";
import Banner from "./components/movie/banner/Banner";
import Main from "./components/movie/layout/Main";
import HomePage from "./page/HomePage";
import MovieDetailPage from "./page/MovieDetailPage";
import Movies from "./page/Movies";
// import {NavLink} from "react-dom-router"
function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetailPage></MovieDetailPage>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}
export default App;
