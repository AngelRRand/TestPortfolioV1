import React from 'react'
import './Container.css'
type Props = {  
    children?: React.ReactNode
    style: string
}
const Container: React.FC<Props> = ({children,  style}) => {
  return (
    <div className={`container ${style}`}>
        {children}
    </div>
  )
}

export default Container