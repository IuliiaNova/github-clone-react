import React, { useState } from "react";
import BarLoader from "react-spinners/BarLoader";


const Spinner = () => {
  let [loading, setLoading] = useState(true);

  return (
    <>
      <BarLoader
        color="#FFE53B"
        loading={loading}
      />
    </>
  )
}

export default Spinner