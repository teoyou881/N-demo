import React from 'react'
import {usePopularMoviesQuery} from '../../../../hooks/usePopularMovies.ts';

const Banner = () => {

  const {data} = usePopularMoviesQuery();
  console.log("Banner.tsx: 7", data);

  return (
      <>Banner</>
  )
}
export default Banner
