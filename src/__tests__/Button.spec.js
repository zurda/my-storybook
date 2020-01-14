import React from 'react'
import { create } from 'react-test-renderer'
import { Button } from '../components/GameControllers'

describe('Button component', () => {
  test('Matches the snapshot', () => {
    const button = create(<Button>Button text</Button>)
    expect(button.toJSON()).toMatchSnapshot()
  })
})
