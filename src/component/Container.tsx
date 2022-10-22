import React from 'react'
import './Container.css'
type Props = {  
    children?: React.ReactNode
    styles: string
}
const Container: React.FC<Props> = ({children,  styles}) => {
  return (
    <div className={`container ${styles}`}>
        {children}
    </div>
  )
}

export default Container