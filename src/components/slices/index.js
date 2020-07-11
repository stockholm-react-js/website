import React from 'react'
import Speaker from './Speaker'
import Schedule from './Schedule'
import Contact from './Contact'

const Slices = ({ slices }) => {
  console.log(slices)
  return slices.map((slice, index) => {

    const res = (() => {
      console.log(slice.type)
      switch (slice.type) {
        case 'speaker': return (
          <Speaker key={index} slice={slice} />
        )
        case 'schedule': return (
          <Schedule key={index} slice={slice} />
        )
        case 'contact_image': return (
          <Contact key={index} slice={slice} />
        )
        default: return
      }
    })();
    return res
  })
}

export default Slices