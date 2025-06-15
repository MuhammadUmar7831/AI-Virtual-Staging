import React from 'react'

const VectorDiagonal = ({stroke}: {stroke: string}) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M1 14L14 1M14 1H2.3M14 1V12.7" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default VectorDiagonal
