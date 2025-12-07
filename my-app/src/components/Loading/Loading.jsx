import React from 'react'
import "./Loading.css"

function Loading() {
  return (
    <div>
      <div className="loading">
            <div className="spinner"></div>
            <div className="bottom-box"></div>
              <p className='text-loading'>Carregando...</p>
          </div>
    </div>
  )
}

export default Loading
