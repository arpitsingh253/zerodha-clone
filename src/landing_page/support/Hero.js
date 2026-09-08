import React from 'react';

function Hero() {
    return ( 
        <div className="container p-4 m-3"style={{backgroundColor:"#f5f5f5"}} >
            <div className="row " >
                <div className="col">
                    <h1>Support Portal</h1>
                    
                </div>
                <div className="col text-end">
                   <button className="btn btn-primary text-end">My Tickets</button>
                </div>
                <div className="position-relative mt-3">
                    <input type="text" className="form-control mt-3 p-3"  placeholder="Eg: How do I open my account,How do I activate F&O..." />
                </div>
               
            </div>
        </div>
     );
}

export default Hero;