import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center p-5'>
                <h1 className='fs-3'>Charges</h1>
                <p className='text-muted fs-4 mt-3 mb-5'>Lists of all charges and taxes</p>
                <div className='col-4 mt-5'>
                    <img src='media/image/pricing-eq1.svg' alt="pricing image" style={{width: '70%'}}>
                    </img>
                    <h2>Free equity delivery</h2>
                    <p className='text-muted mt-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 mt-5'>
                    <img src='media/image/other-trades.svg' alt="pricing image" style={{width: '70%'}}></img>
                    <h2>Intraday and F&O trades</h2>
                    <p className='text-muted mt-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 mt-5'>
                    <img src='media/image/pricing-eq1.svg' alt="pricing image" style={{width: '70%'}}>
                    </img>
                    <h2>Free direct MF</h2>
                     <p className='text-muted mt-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.

                    </p>
                </div>
            </div>
        </div>
     );
}

export default Hero;