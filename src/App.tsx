import {Route, Routes} from 'react-router-dom';
import './App.css'
import AppLayout from './layout/AppLayout.tsx';
import HomePage from './pages/Homepage/HomePage.tsx';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage.tsx';
import MoviePage from './pages/Movies/MoviePage.tsx';
import NotFoundPage from './pages/NotFoundpage/NotFoundPage.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
      <>
        <Routes>
          <Route path="/" element={<AppLayout/>}>
            <Route index element={<HomePage/>}></Route>
            <Route path={'movies'}>
              <Route index element={<MoviePage/>}></Route>
              <Route path={':moviesId'} element={<MovieDetailPage/>}></Route>
            </Route>
          </Route>

          <Route path={"*"} element={<NotFoundPage/>}></Route>
        </Routes>
      </>
  )
}

export default App
