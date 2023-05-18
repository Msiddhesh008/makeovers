import React from 'react'

import DotLoader from "react-spinners/DotLoader";


const Loader = () => {
  return (
    <div id="loader" className="container-fluid">
      <DotLoader
        color={"#cb9b51"}
        loading="loading"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader