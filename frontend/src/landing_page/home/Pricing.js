import React from 'react';

function Pricing() {
    return ( 
        <div className='container  p-5'>
            <div className='row'>
                <div className='col-6'>
                    <h3>Unbeatable pricing</h3>
                    <p className='text-muted'>We pioneered the concept of discount broking and price <br></br>transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration: 'none'}}>See pricing<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-4 '>
                             <img src='media/image/pricing-eq1.svg' alt="pricing image" style={{width: '70%'}}>
                        </img>
                        <p className='text-muted'>
                             Free account
opening
                        </p>
                        </div>
                        <div className='col-4'>
                             <img src='media/image/pricing-eq2.svg' alt="pricing image" style={{width: '70%'}}></img>
                             <p className='text-muted'>
                                Free equity delivery
and direct mutual funds
                             </p>
                        </div>
                        <div className='col-4'>
                            <img src='media/image/other-trades.svg' alt="pricing image" style={{width: '70%'}}></img>
                            <p className='text-muted'>
                                Intraday and
F&O

                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;