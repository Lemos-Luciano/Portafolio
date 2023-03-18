import React from 'react'
import CardSlider from './CardSlider'

const slider = ({movies}) => {

    const getMoviesFromRange = (from, to) => {
        return movies.slice (from, to)
    }

  return (
    <div>
        {/* Cada slider tiene 10 peliculas */}
      <CardSlider title="Tendencias" data={getMoviesFromRange(0,10)} />
      <CardSlider title="Estrenos" data={getMoviesFromRange(10,20)} />
      <CardSlider title="Popular" data={getMoviesFromRange(20,30)} />
      <CardSlider title="Comedia" data={getMoviesFromRange(30,40)} />
      <CardSlider title="Acción" data={getMoviesFromRange(40,50)} />
      <CardSlider title="Drama" data={getMoviesFromRange(50,60)} />
    </div>
  )
}

export default slider
