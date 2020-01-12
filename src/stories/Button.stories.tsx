import React from 'react'
import { withA11y } from '@storybook/addon-a11y'

import { action } from '@storybook/addon-actions'
import { Button } from '../components/GameControllers'

export default {
  title: 'Button',
  component: Button,
  decorators: [withA11y]
}

export const Default = () => <Button onClick={action('clicked')}>Hit me!</Button>
