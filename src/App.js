import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import Form from "./components/form/Form";
import HeaderMain from "./components/HeaderMain";
import Banner from "./components/movie/banner/Banner";
import Main from "./components/movie/layout/Main";

// import HomePage from "./page/HomePage";
// import MovieDetailPage from "./page/MovieDetailPage";
// import Movies from "./page/Movies";

// splitting Routes help website loading faster. vi no chia nho ra va load cai can thiet
const HomePage = lazy(() => import("./page/HomePage"));
const MovieDetailPage = lazy(() => import("./page/MovieDetailPage"));
const Movies = lazy(() => import("./page/Movies"));
// import {NavLink} from "react-dom-router"
function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={Main}>
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
            <Route path="/movies" element={Movies}></Route>
            <Route path="/movie/:movieId" element={MovieDetailPage}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}
export default App;
