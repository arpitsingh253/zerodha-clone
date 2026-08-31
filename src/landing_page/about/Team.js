import React from 'react';

function Team() {
    return ( 
        <div className='container m-5'>
            <div className='row'>
                <h2 className='text-center m-5 border-top p-5'>People</h2>
                <div className='col-6 text-center'>
                  <img src='/media/image/nithinKamath.jpg' className='rounded-circle  ' style={{width:"50%"}} alt='Nithin Kamath'></img>
                  <h5 className='text-center mt-5'>Nithin Kamath</h5>
                  <p className='text-grey text-center'>Founder,CEO </p>
                </div>
                <div className='col-6'>
                 <p className='fs-6'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                </p>
                <p className='fs-6'>
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                </p>
                <p className='fs-6'>
                    Playing basketball is his zen.
                </p>
                </div>
            </div>
        </div>
     );
}

export default Team;