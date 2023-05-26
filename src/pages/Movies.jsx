import SearchBox from 'components/SearchBox/SearchBox'
import React, { useEffect } from 'react'
import {  Outlet } from 'react-router-dom';

const Movies = () => {

  useEffect(() => {
    // HTTPS  запит
      }, []);

  const handleSubmit = (filmName) => {
    // Обробка подання форми
    console.log(filmName);
  };

  return (
    <>
      <SearchBox onSubmit={handleSubmit}/>
      <Outlet />  
    </>
  )
}

export default Movies
