import React from "react"

export default function topheader() {
    return(
<div className="bg-dark-blue">
    
       <div className="flex justify-start">
       Follow us:
       {/* font awesome icons here
       facebook
       twitter
       linkedin
       */}
       </div>
       <div className="flex justify-end ">
        <div className="flex-nowrap">
{/* call icon */}
<p>Call: 1234 567 890</p>
<p>Email: info@eac-yap.com</p>

        </div>

       </div>
   


</div>

    )
}