import React from "react";
import { Dna } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
      <Dna
        visible={true}
        height="500px"
        width="40%"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        color="purple"
      />
    </div>
  );
};

export default Loader;
