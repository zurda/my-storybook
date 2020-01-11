import React from 'react'
import Header from '../components/Header'

export default {
  title: 'Header',
  component: Header
}

export const MyHeader = () => (
  <Header
    appName="Sample app"
    appDescription="Sample app description: whatever whatever"
  />
)

export const SecondHeader = () => (
  <Header appName="Longer app name" appDescription="Shorter description" />
)
