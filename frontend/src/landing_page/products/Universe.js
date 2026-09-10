import React from 'react';

function Universe() {
    return ( 
      <div className="container mt-5 p-5">
        <div className="row text-center">
            <h2>The Zerodha Universe</h2>
            <p className='mt-2'>Extend your trading and investment experience even further with our partner platforms</p>
            <div className="col-4 p-5">
                <a href=""><img src="media/image/zerodhaFundhouse.png" style={{width:"45%"}} /></a>
                <p className='mt-2 text-center fs-6 mb-5'>Our asset management venture
                   that is creating simple and transparent index
                   funds to help you save for your goals.
                </p>
                 <a href="" ><img src="media/image/streakLogo.png" style={{width:"45%",marginTop:"10px"}} /></a>
                <p className='mt-2 text-center fs-6'>Systematic trading platform
                   that allows you to create and backtest
                   strategies without coding.
                </p>
            </div>
            <div className="col-4 p-5">
                <a href=""><img src="media/image/sensibullLogo.svg" style={{width:"45%"}} /></a>
                <p className='mt-3 text-center fs-6 mb-5'>Options trading platform that lets you
                  create strategies, analyze positions, and examine
                  data points like open interest, FII/DII, and more.

                </p>
                 <a href="" ><img src="media/image/smallcaseLogo.png" style={{width:"45%",marginTop:"10px"}} /></a>
                <p className='mt-2 text-center fs-6'>
                   Thematic investing platform
                   that helps you invest in diversified
                   baskets of stocks on ETFs.
                </p>
            </div>
            <div className="col-4 p-5">
                <a href=""><img src="media/image/tijori.svg" style={{width:"45%"}} /></a>
                <p className='mt-3 text-center fs-6 mb-5'>
                  Investment research platform
                  that offers detailed insights on stocks,
                  sectors, supply chains, and more.
                </p>
                 <a href="" ><img src="media/image/dittoLogo.png" style={{width:"45%",marginTop:"10px"}} /></a>
                <p className='mt-2 text-center fs-6'>
                   Personalized advice on life
                   and health insurance. No spam
                   and no mis-selling.
                </p>
            </div>
            <button className='btn btn-primary p-3  fs-4' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
        </div>
      </div>
     );   
}

export default Universe;