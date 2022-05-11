import React from 'react'

export default function ScrollReveal() {
    const sr=({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,})
       // reset: true
      sr.reveal ('.home_title')
      sr.reveal ('.homne description', {delay: 50})
  return (
    <div>Scroll</div>
  )
}
