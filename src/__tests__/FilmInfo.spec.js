import React from 'react'
import { create } from 'react-test-renderer'
import FilmInfo from '../components/FilmInfo'

const filmDetails = {
  overview: 'some overview',
  poster_path: '/eufF3xEif5EZ1gTjdubw3KWh9xU.jpg',
  tagline: 'same as overview'
}

describe('Film Info component', () => {
  test('Matches the snapshot', () => {
    const filmInfo = create(<FilmInfo film={filmDetails} />)
    expect(filmInfo.toJSON()).toMatchSnapshot()
  })
})
