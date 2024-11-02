import React from 'react'
import './TextArea.css'

function TextArea(props) {
  return (
    <textarea name="" value={props.value} className='text-area' onChange={props.onChange} readOnly={!props.text} autoFocus={props.text} placeholder={props.text || "Result here..."}/>
  )
}

export default TextArea