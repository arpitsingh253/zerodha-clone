import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className='col-6  'style={{paddingLeft:"20px", width:"50%"}} >
                  <img src={imageURL} /> 
                </div>
                <div className='col-6  mt-5' style={{padding:"20px", width:"50%"}}>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mb-3">
                         {tryDemo !== undefined && (
                             <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo<i class="fa-solid fa-arrow-right-long"></i></a>
                         )}
                         {learnMore !== undefined &&(
                             <a href={learnMore} style={{marginLeft:"50px ", textDecoration:"none"}}>Learn More<i class="fa-solid fa-arrow-right-long"></i></a>
                         )}
                    </div>
                    <div>
                        <a href={googlePlay}><img src="media/image/googlePlayBadge.svg"></img></a>
                        <a href={appStore} style={{marginLeft:"50px"}}><img src="media/image/appstoreBadge.svg"></img></a>
                    </div>
                    
                    
                </div>
            </div>  
        </div>
     );
}

export default LeftSection;