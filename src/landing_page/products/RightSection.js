import React from 'react';

function RightSection({imageURL,productName,productDescription,learnMore}) {
    return ( 
       <div className="container mt-5 p-5">
          <div className="row">
            <div className="col-6 p-5 mt-5" style={{padding:"20px", width:"50%"}}>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                {learnMore !== undefined && (
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn More<i class="fa-solid fa-arrow-right-long"></i></a>
                )}
            </div>
            <div className="col-6"style={{paddingLeft:"20px", width:"50%"}}>
                <img src={imageURL} />
            </div>
          </div>
       </div>
     );
}

export default RightSection;