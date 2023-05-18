import React from 'react'

const Photos = () => {
  return (
    <div id='photos' className="container-fluid photos">
        <div className="container">
            <div className="row photosRow pt-5 pb-5">
                <div className="col-lg-3 col1">
                    <p>BRIDAL</p>
                    <img src="https://www.ericacolonmakeup.com/wp-content/uploads/2023/01/Kaitlyn-Banner-Cropper-400x230.jpg" alt="" />
                </div>
                <div className="col-lg-3 col2">
                    <p>PHOTO SHOOTS</p>
                    <img src="https://www.ericacolonmakeup.com/wp-content/uploads/2023/01/ITS_AUG_ALIANA-103final-1-400x230.jpg" alt="" />
                </div>
                <div className="col-lg-3 col3">
                    <p>SPECIAL OCCASION</p>
                    <img src="https://www.ericacolonmakeup.com/wp-content/uploads/2023/01/Liz-Banner-Cropped-400x230.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Photos