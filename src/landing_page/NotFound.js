import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
           <div className="container p-5 mb-5">
         <div className="row text-center">
            
            <h1 className="">404</h1>
            <p>Kiaan couldn’t find that page<br/>
We couldn’t find the page you were looking for.<br/>
  Visit <Link  style={{textDecoration:"none"}}to={"/"}>Zerodha Home page</Link></p>
            
         </div>
        </div> 
     );
}

export default NotFound;