import { useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DepositTransactions = () => {
  const [item, setDelete] = useState(false);
  const notify = () => {
    toast("Item was deleted");
    setDelete(false);
  };
  return (
    <div className="container">
      <AdminHeader />
      <div>
        <ToastContainer
          autoClose={2000}
          className="toast-container"
          toastClassName="dark-toast"
        />
      </div>
      <div id="game">
        <div className="bredcremp">
          <h4>Deposit Transactions</h4>

          <div className="page-title">
            <p className="active">Players</p>
            <p className="not">/ Deposit Transactions</p>
          </div>
        </div>

        <div className="pending-content">
          <div className="search-filter">
            <input type="text" placeholder="Search State Wise User List ..." />

            <select name="" id="">
              <option value="">Select Status</option>
              <option value="">Status 1</option>
              <option value="">Status 2</option>
            </select>

            <button>Search</button>
            <button>Reset</button>
          </div>

          <div className="user-list">
            {item == true && (
              <div className="delete-item">
                <div className="box">
                  <i
                    onClick={() => setDelete(false)}
                    className="bx bx-x cross-icon"
                  ></i>

                  <div className="delete">
                    <i className="bx bx-trash"></i>
                  </div>

                  <p>Are you sure you want to permanently erase the list. ?</p>

                  <div className="btn">
                    <button onClick={notify} className="cancel" type="button">
                      Delete Now
                    </button>

                    <button onClick={() => setDelete(false)} type="button">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
            <table>
              <thead>
                <tr>
                  <th>Serial Number</th>
                  <th>Txn ID</th>
                  <th>Contact Info</th>
                  <th>Amount</th>
                  <th>Bonus Code Applied</th>
                  <th>Date Time</th>
                  <th>Payment Status</th>
                  <th>Payment ID</th>
                  <th>Remark</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>x35js4nf6945t</td>
                  <td>+91 0000 0000</td>
                  <td>800</td>
                  <td>Yes</td>
                  <td className="time">
                    <p>12/02/2023</p>
                    <p>12 : 00 AM</p>
                  </td>
                  <td>
                    <span className="active">Success</span>
                  </td>
                  <td>tdx23323</td>
                  <td>Remark Message</td>
                  <td>
                    <p>Transtion Initieated at 12/02/2021</p>
                    <p>Transtion Sucess at 12/02/2021</p>
                  </td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>x35js4nf6945t</td>
                  <td>+91 0000 0000</td>
                  <td>800</td>
                  <td>Yes</td>
                  <td className="time">
                    <p>12/02/2023</p>
                    <p>12 : 00 AM</p>
                  </td>
                  <td>
                    <span className="inactive">Not Success</span>
                  </td>
                  <td>tdx23323</td>
                  <td>Remark Message</td>
                  <td>
                    <p>Transtion Initieated at 12/02/2021</p>
                    <p>Transtion Sucess at 12/02/2021</p>
                  </td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>x35js4nf6945t</td>
                  <td>+91 0000 0000</td>
                  <td>800</td>
                  <td>Yes</td>
                  <td className="time">
                    <p>12/02/2023</p>
                    <p>12 : 00 AM</p>
                  </td>
                  <td>
                    <span className="active">Success</span>
                  </td>
                  <td>tdx23323</td>
                  <td>Remark Message</td>
                  <td>
                    <p>Transtion Initieated at 12/02/2021</p>
                    <p>Transtion Sucess at 12/02/2021</p>
                  </td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>x35js4nf6945t</td>
                  <td>+91 0000 0000</td>
                  <td>800</td>
                  <td>Yes</td>
                  <td className="time">
                    <p>12/02/2023</p>
                    <p>12 : 00 AM</p>
                  </td>
                  <td>
                    <span className="inactive">Not Success</span>
                  </td>
                  <td>tdx23323</td>
                  <td>Remark Message</td>
                  <td>
                    <p>Transtion Initieated at 12/02/2021</p>
                    <p>Transtion Sucess at 12/02/2021</p>
                  </td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>x35js4nf6945t</td>
                  <td>+91 0000 0000</td>
                  <td>800</td>
                  <td>Yes</td>
                  <td className="time">
                    <p>12/02/2023</p>
                    <p>12 : 00 AM</p>
                  </td>
                  <td>
                    <span className="active">Success</span>
                  </td>
                  <td>tdx23323</td>
                  <td>Remark Message</td>
                  <td>
                    <p>Transtion Initieated at 12/02/2021</p>
                    <p>Transtion Sucess at 12/02/2021</p>
                  </td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>x35js4nf6945t</td>
                  <td>+91 0000 0000</td>
                  <td>800</td>
                  <td>Yes</td>
                  <td className="time">
                    <p>12/02/2023</p>
                    <p>12 : 00 AM</p>
                  </td>
                  <td>
                    <span className="inactive">Not Success</span>
                  </td>
                  <td>tdx23323</td>
                  <td>Remark Message</td>
                  <td>
                    <p>Transtion Initieated at 12/02/2021</p>
                    <p>Transtion Sucess at 12/02/2021</p>
                  </td>
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
        </div>
      </div>
    </div>
  );
};

export default DepositTransactions;
