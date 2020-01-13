import React from 'react'
import { create } from 'react-test-renderer'
import HiddenText from '../components/HiddenText'

describe('Button component', () => {
  test('Matches the snapshot', () => {
    const hiddenText = create(
      <HiddenText
        filmArr={['T', 'o', 'y', ' ', 'S', 't', 'o', 'r', 'y']}
        guessedLetters={[' ', 'S', 's', 'T', 't']}
      />
    )
    expect(hiddenText.toJSON()).toMatchSnapshot()
  })
})
