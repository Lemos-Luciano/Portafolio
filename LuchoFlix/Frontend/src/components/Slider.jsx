import React from 'react'
import CardSlider from './CardSlider'
import styled from "styled-components";


const slider = ({movies}) => {

    const getMoviesFromRange = (from, to) => {
        return movies.slice (from, to)
    }

  return (
    <Container className='luciano'>
        {/* Cada slider tiene 10 peliculas */}
      <div>Luciano</div>
      <CardSlider title="Tendencias" data={getMoviesFromRange(0,10)} className="luciano"/>
      <CardSlider title="Nuevos lanzamientos" data={getMoviesFromRange(10,20)} className="luciano" />
      <CardSlider title="Popular" data={getMoviesFromRange(20,30)} />
      <CardSlider title="Para pasar el rato" data={getMoviesFromRange(30,40)} />
      <CardSlider title="Antiguas" data={getMoviesFromRange(40,50)} />
      <CardSlider title="Para ver en familia" data={getMoviesFromRange(50,60)} />
    </Container>
  )
}


export default slider


const Container = styled.div`

`;