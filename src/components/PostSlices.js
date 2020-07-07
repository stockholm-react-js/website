import React from 'react'
import Speaker from '../components/slices/Speaker'
import Schedule from '../components/slices/Schedule'


const PostSlices = ({ slices }) => {
  console.log(slices)
  return slices.map((slice, index) => {

    const res = (() => {
      switch (slice.type) {
        case 'speaker': return (
          <div key={index}>
            {<Speaker slice={slice} />}
          </div>
        )
        case 'schedule': return (
          <div key={index}>
            {<Schedule slice={slice} />}
          </div>
        )

        default: return
      }
    })();
    return res;
  })
}

export default PostSlices