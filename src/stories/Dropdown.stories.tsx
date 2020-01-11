import React from 'react'
import { action } from '@storybook/addon-actions'
import { Dropdown } from '../components/GameControllers'

export default {
  title: 'Dropdown',
  component: Dropdown
}

export const Default = () => (
  <Dropdown
    title="Example options"
    options={[{ name: 'First option' }, { name: 'Second option' }]}
    onChange={action('changed')}
    onClick={action('clicked')}
  />
)
