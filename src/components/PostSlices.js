import React from 'react'
import Speaker from '../components/slices/Speaker'
import Schedule from '../components/slices/Schedule'
import Contact from '../components/slices/Contact'

const PostSlices = ({ slices }) => {
  console.log(slices)
  return slices.map((slice, index) => {

    const res = (() => {
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

export default PostSlices