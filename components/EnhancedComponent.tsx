import React from 'react'
import Layout from './Layout'

type Props = {}

const EnhancedComponent = (props: Props) => {
  return (
    <div>EnhancedComponent</div>
  )
}

export const RenderedComponent = Layout(EnhancedComponent)