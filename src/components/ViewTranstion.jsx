import { useState } from "react";
import "../assets/scss/KYCmangement.scss";
import AdminHeader from "../components/AdminHeader";

const ViewTranstion = () => {
  const [change, setChange] = useState(1);

  return (
    <div className="container">
      <AdminHeader />

      <div id="kyc-management">
        <div className="bredcremp">
          <h4>View Transactions</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="pending-content">
          <div className="search-filter state-change">
            <button onClick={() => setChange(1)} type="button">
              Bonus Transaction History
            </button>
            <button onClick={() => setChange(2)} type="button">
              Transactions
            </button>
            <button onClick={() => setChange(3)} type="button">
              Transactions Withdrawal
            </button>
            <button onClick={() => setChange(4)} type="button">
              Deposit History
            </button>
          </div>

          {change == 1 && (
            <>
              <div className="user-list">
                <table>
                  <thead>
                    <tr>
                      <th>SL No.</th>
                      <th>Bonus ID</th>
                      <th>Type</th>
                      <th>Date</th>
                      <th>Remark</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>65</td>
                      <td className="td-name">SOUTH799</td>
                      <td>Admin Type</td>
                      <td>
                        <p>14/02/2024</p> <p>23:19:34 PM</p>{" "}
                      </td>
                      <td>900</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pagination">
                <div className="show">Showing 10 of 18 Results</div>
                <div className="pagination-action">
                  <div className="arrow-left">
                    <i className="bx bx-chevron-left"></i>
                  </div>
                  <div className="middle">
                    <p className="active">1</p>
                    <p>2</p>
                    <p>3</p>
                  </div>
                  <div className="arrow-right">
                    <i className="bx bx-chevron-right"></i>
                  </div>
                </div>
              </div>
            </>
          )}

          {change == 2 && (
            <>
              <div className="user-list">
                <table>
                  <thead>
                    <tr>
                      <th>SL No.</th>
                      <th>Bonus ID</th>
                      <th>Type</th>
                      <th>Date</th>
                      <th>Remark</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>35</td>
                      <td className="td-name">BONUM799</td>
                      <td>Admin nType</td>
                      <td>
                        <p>04/22/2024</p> <p>02:19:34 PM</p>{" "}
                      </td>
                      <td>900</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pagination">
                <div className="show">Showing 10 of 18 Results</div>
                <div className="pagination-action">
                  <div className="arrow-left">
                    <i className="bx bx-chevron-left"></i>
                  </div>
                  <div className="middle">
                    <p className="active">1</p>
                    <p>2</p>
                    <p>3</p>
                  </div>
                  <div className="arrow-right">
                    <i className="bx bx-chevron-right"></i>
                  </div>
                </div>
              </div>
            </>
          )}

          {change == 3 && (
            <>
              <div className="user-list">
                <table>
                  <thead>
                    <tr>
                      <th>SL No.</th>
                      <th>Type</th>
                      <th>Ref. ID</th>
                      <th>On</th>
                      <th>Amount</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>6622952e35</td>
                      <td className="td-name">Admin Type</td>
                      <td>618328245071</td>
                      <td>
                        <p>04/22/2024</p> <p>02:19:34 PM</p>{" "}
                      </td>
                      <td>900</td>
                      <td>899</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pagination">
                <div className="show">Showing 10 of 18 Results</div>
                <div className="pagination-action">
                  <div className="arrow-left">
                    <i className="bx bx-chevron-left"></i>
                  </div>
                  <div className="middle">
                    <p className="active">1</p>
                    <p>2</p>
                    <p>3</p>
                  </div>
                  <div className="arrow-right">
                    <i className="bx bx-chevron-right"></i>
                  </div>
                </div>
              </div>
            </>
          )}

          {change == 4 && (
            <>
              <div className="user-list">
                <table>
                  <thead>
                    <tr>
                      <th>SL No.</th>
                      <th>Txn ID</th>
                      <th>Remark Date</th>
                      <th>Transaction Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>618328245071</td>
                      <td>
                        <p>04/22/2024</p> <p>02:19:34 PM</p>{" "}
                      </td>

                      <td>9000</td>
                      <td>Success</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pagination">
                <div className="show">Showing 10 of 18 Results</div>
                <div className="pagination-action">
                  <div className="arrow-left">
                    <i className="bx bx-chevron-left"></i>
                  </div>
                  <div className="middle">
                    <p className="active">1</p>
                    <p>2</p>
                    <p>3</p>
                  </div>
                  <div className="arrow-right">
                    <i className="bx bx-chevron-right"></i>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewTranstion;
