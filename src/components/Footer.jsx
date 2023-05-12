import React from "react";

function Footer(){

const da = new Date();

const year = da.getFullYear();

return(

   <p className="id3">
    Copyright @ {year}
   </p>


)



}

export default Footer;