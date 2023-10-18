import React from 'react'

type Props = {}

const Spinner = (props: Props) => {
  return (
    <div className='spinOverlay' >
        <div className='spinContainer' ></div>
    </div>
  )
}

export default Spinner