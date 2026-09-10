import React from 'react';

function Brokeage() {
  return (
    <div className="container my-4">
      <div className="row">
         <h2 className="mb-4">Charges for account opening</h2>

        <div className="col-12 col-lg-8">
          <table className="table table-bordered align-middle p-5">
            <thead className="table-light">
              <tr>
                <th scope="col">Type of account</th>
                <th scope="col">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Individual account</td>
                <td>
                  <span className="free-tag">FREE</span>
                </td>
              </tr>
              <tr>
                <td>Minor account</td>
                <td>
                  <span className="free-tag">FREE</span>
                </td>
              </tr>
              <tr>
                <td>NRI account</td>
                <td>₹ 500</td>
              </tr>
              <tr>
                <td>HUF account</td>
                <td>
                  <span className="free-tag">FREE</span> (online) / ₹ 500 (offline)
                </td>
              </tr>
              <tr>
                <td>Partnership, LLP, and Corporate accounts (offline only)</td>
                <td>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
         <h2 className=" mt-5 mb-4">Demat AMC (Annual Maintenance Charge)</h2>
           <table className="table table-bordered align-middle p-5">
            <thead className="table-light">
              <tr>
                <th scope="col">Value of holdings</th>
                <th scope="col">AMC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to ₹4 lakh</td>
                <td>
                  <span className="free-tag">FREE</span>
                </td>
              </tr>
              <tr>
                <td>₹4 lakh – ₹10 lakh</td>
                <td>
                  <span >₹100 per year + 18% GST, charged quarterly</span>
                </td>
              </tr>
              <tr>
                <td>Above ₹10 lakh</td>
                <td>₹300 per year + 18% GST, charged quarterly</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default Brokeage;