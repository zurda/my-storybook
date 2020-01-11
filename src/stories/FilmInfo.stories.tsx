import React from 'react'
import FilmInfo from '../components/FilmInfo'

export default {
  title: 'FilmInfo',
  component: FilmInfo
}

const filmDetails = {
  poster_path: '/eufF3xEif5EZ1gTjdubw3KWh9xU.jpg',
  overview: 'some overview',
  tagline: 'same as overview'
}

export const MyFilmInfo = () => <FilmInfo film={filmDetails}> Some text</FilmInfo>
