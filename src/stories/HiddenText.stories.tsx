import React from 'react'
import HiddenText from '../components/HiddenText'

export default {
  title: 'Hidden Text',
  component: HiddenText
}

export const MyHiddenText = () => (
  <HiddenText
    filmArr={['T', 'o', 'y', ' ', 'S', 't', 'o', 'r', 'y']}
    guessedLetters={[' ', 'S', 's', 'T', 't']}
  />
)
