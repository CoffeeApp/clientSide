import React from 'react'
import ToggleOn from './ToggleOn'
import ToggleOff from './ToggleOff'

const Toggle = ({ toggle, fill, text }) => (
  <div>
    { toggle ? null : <ToggleOff fill={fill} text={text} /> }
    { toggle ? <ToggleOn fill={fill} text={text} /> : null }
  </div>
)

export default Toggle
