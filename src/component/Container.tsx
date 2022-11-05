import React from 'react'
import { Containers } from '../interfaces/Interface'
import './Container.css'

const Container: React.FC<Containers> = ({children,  styles}) => {
  return (
    <div className={`container ${styles}`}>
        {children}
    </div>
  )
}

export default Container