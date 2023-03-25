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
      <CardSlider title="Nuevos lanzamientos" data={getMoviesFromRange(10,20)} />
      <CardSlider title="Popular" data={getMoviesFromRange(20,30)} />
      <CardSlider title="Para pasar el rato" data={getMoviesFromRange(30,40)} />
      <CardSlider title="Antiguas" data={getMoviesFromRange(40,50)} />
      <CardSlider title="Para ver en familia" data={getMoviesFromRange(50,60)} />
    </div>
  )
}

export default slider
