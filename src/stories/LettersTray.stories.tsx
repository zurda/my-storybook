import React from 'react'
import { action } from '@storybook/addon-actions'
import { LettersTray, Char } from '../components/LettersTray'

export default {
  title: 'Letters Tray',
  component: LettersTray
}

export const MyLettersTray = () => (
  <LettersTray guessedLetters={[' ', 'S', 's', 'T', 't']} />
)

export const MyChar = () => (
  <Char value="T" disabled={false} onClick={action('Clicked')}>
    T
  </Char>
)
