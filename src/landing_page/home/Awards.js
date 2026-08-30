import React from 'react';

function Awards() {
    return ( 
        <div className="container mt-5 ">
            <div className='row'>
                <div className='col-6 p-5'>
                   <img src='media/image/largestBroker.svg' alt="largest broker image"></img>
                </div>
                <div className='col-6 p-5'>
                    <h2>Largest stock broker in India</h2>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of the retail order volumes in India daily by trading and investing in :</p>
                    <div className='row'>
                        <div className='col-6'>
                         <ul>
                           <li>Futures and Options</li>
                           <li>Commodity derivatives</li>
                           <li>Currency derivatives</li>
                         </ul>
                        </div>
                        <div className='col-6 mb-3'>
                         <ul>
                           <li>Stocks & IPOs</li>
                           <li>Direct mutual funds</li>
                           <li>Bond and Govt. Securities</li>
                         </ul>
                        </div> 
                    </div>
                    <img src='media/image/pressLogos.png' style={{width: '90%'}}></img>
                </div>
            </div>
        </div>
     );
}

export default Awards;