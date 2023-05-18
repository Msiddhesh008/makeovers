import React from 'react'
import { Link } from 'react-router-dom'

const ScialBelt = () => {
  return (
    <div>
        <div className='instagram p-2 col-12 text-center text-white'>
        <Link 
        style={{
          textDecoration:"none",
          color:"#ffffff"
        }}
        to="https://www.instagram.com/pooja___makeupartist/" >
          <span><i className="bi bi-instagram"></i> Instagram</span>
        </Link> 
        </div>

        {/* <div className='facebook text-center p-2 col-12 text-white'>
        <span><i className="bi bi-facebook"></i> Facebook</span>
        </div>

        <div className='snapchat text-center p-2 col-12 text-dark'>
        <span><i className="bi bi-snapchat"></i> Snapchat</span>
        </div>

        <div className='youtube text-center p-2 col-12 text-white'>
        <span><i className="bi bi-youtube"></i> Youtube</span>
        </div> */}
    </div>
  )
}

export default ScialBelt