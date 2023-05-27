import React from 'react'

export default function BigTextInTheMiddle(props) {
  return (
    <div className="flex justify-center items-center h-screen">
        <div class="text-center text-3xl md:text-5xl font-black transition-text duration-500">{props.children}</div>
    </div>
  )
}