import React from 'react'
import "./Loading.css"

function Loading() {
  return (
    <div>
      <div id="loading" className="hidden">
            <div className="spinner"></div>
              <p className='text-loading'>Carregando...</p>
          </div>
    </div>
  )
}

export default Loading
