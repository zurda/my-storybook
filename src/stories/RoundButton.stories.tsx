import React from 'react'
import { action } from '@storybook/addon-actions'
import { RoundButton } from '../components/GameControllers'

export default {
  title: 'Round button',
  component: RoundButton
}

export const Default = () => (
  <RoundButton onClick={action('clicked')}>Reveal</RoundButton>
)
