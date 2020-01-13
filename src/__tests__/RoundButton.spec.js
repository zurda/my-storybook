import React from 'react'
import { create } from 'react-test-renderer'
import { RoundButton } from '../components/GameControllers'

describe('RoundButton component', () => {
  test('Matches the snapshot', () => {
    const roundButton = create(<RoundButton>Button text</RoundButton>)
    expect(roundButton.toJSON()).toMatchSnapshot()
  })
})
