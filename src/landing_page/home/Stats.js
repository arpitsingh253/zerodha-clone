import React from 'react';

function Stats() {
    return ( 
       <div className="container  mb-5 p-5">
        <div className='row p-5'>
            <div className='col-6 p-5 '>
                <h3 className='mb-5'>Trust with confidence</h3>
                <h4>Customer-first always</h4>
                <p className='mb-5 text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                <h4>No spam or gimmicks</h4>
                <p className='mb-5 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href='' style={{textDecoration: 'none'}}>Our philosophies</a>.</p>
                <h4>The Zerodha universe</h4>
                <p className='mb-5 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <h4>Do better with money</h4>
                <p className=' text-muted'>With initiatives like <a href='' style={{textDecoration: 'none'}}>Nudge</a> and <a href=''style={{textDecoration: 'none'}}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>    
            <div className='col-6 p-5'>
                <img src='media/image/ecosystem.png' alt="ecosystem image" style={{width: '100%'}}></img>
                <div className='text-center '>
                    <a href=''style={{textDecoration: 'none'}} className='mx-5'>Explore our products<i class="fa-solid fa-arrow-right-long"></i></a>
                    
                     <a href=''style={{textDecoration: 'none'}}>Try Kite demo<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>    
        </div>       
       </div>
     );
}

export default Stats;