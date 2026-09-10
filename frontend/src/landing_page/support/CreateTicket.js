import React from 'react';

function CreateTicket() {
    return ( 
        <div className="container">
            <div className="row p-3 m-3">
                <div className="col-4 p-3">
                  <h4 ><i class="fa-solid fa-circle-plus"></i>Account Opening</h4>
                  <ul>
                    <a href="" style={{textDecoration:"none", padding:"3px"}}><li>Resident individual</li></a>
                    <a href="" style={{textDecoration:"none", padding:"3px"}}><li>Minor</li></a>
                    <a href="" style={{textDecoration:"none", padding:"3px"}}><li>Non Resident Indian (NRI)</li></a>
                    <a href="" style={{textDecoration:"none", padding:"3px"}}><li>Company, Partnership, HUF and LLP</li></a>
                    <a href="" style={{textDecoration:"none", padding:"3px"}}><li>Glossary</li></a>
                  </ul>
                </div>
                 <div className="col-4 p-3">
                   <h4 ><i class="fa-sharp fa-regular fa-circle-user"></i>Your Zerodha account</h4>
                   <ul>
                    <a href="" style={{textDecoration:"none", padding:"3px"}}><li>Your Profile</li></a>
                    <a href="" style={{textDecoration:"none", padding:"3px"}}><li> Account modifications</li></a>
                    <a href="" style={{textDecoration:"none", padding:"3px"}}><li>Client Master Report (CMR) and Depository Participant (DP) </li></a>
                    <a href="" style={{textDecoration:"none", padding:"3px"}}><li>Nomination</li></a>
                    <a href="" style={{textDecoration:"none", padding:"3px"}}><li>Transfer and conversion of securities</li></a>
                  </ul>
                </div>
                <div className="col-4 p-3">
                  <h4 >Kite</h4>
                  <ul>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>IPO</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>Trading Q&A</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>Margin Trading Facility (MTF) and Margins</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>Charts and orders</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>Alerts and Nudges</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>General</li></a>
                  </ul>
                </div>
            </div>
            <div className="row p-3">
                <div className="col-4 p-3">
                  <h4><i class="fa-sharp fa-solid fa-circle-indian-rupee"></i>Funds</h4>
                  <ul>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>Add money</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>Withdraw money</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>Add bank account</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>eMandates</li></a>
                  </ul>
                </div>
                 <div className="col-4 p-3">
                   <h4 >Console</h4>
                   <ul>
                    <a href="" style={{textDecoration:"none" ,padding:"3px"}}><li>Portfolio</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li> Corporate actions</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>Fund statements </li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>Report</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>Profile</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>Segments</li></a>
                  </ul>
                </div>
                <div className="col-4 p-3">
                  <h4 ><i className="fa-sharp-duotone fa-solid fa-spinner-third"></i>Coins</h4>
                  <ul>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>Mutual funds</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>National Pension Scheme (NPS)</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>Fixed Deposit (FD)</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>Features on Coin</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>Payments and Orders</li></a>
                    <a href="" style={{textDecoration:"none",padding:"3px"}}><li>General</li></a>
                  </ul>
                </div>
            </div>    
        </div>
     );
}

export default CreateTicket;