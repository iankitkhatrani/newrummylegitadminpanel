import { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Withdrawrequests = () => {
  const [item, setDelete] = useState(false);

  const notify = () => {
    toast("Action Accepted");
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

      <div id="userMangement">
        <div className="bredcremp">
          <h4>Withdraw Request</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="management">
          <div className="search-filter">
            <input
              type="text"
              placeholder="Search by Game Id, Game Type, or others..."
            />

            <div className="date">
              <input type="date" name="" id="" />
            </div>

            <div className="date">
              <input type="date" name="" id="" />
            </div>

            <button>Reset</button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>Amount</th>
                  <th>Account Number</th>
                  <th>IFSC Code</th>
                  <th>Payment Mode</th>
                  <th>Payment Status</th>
                  <th>Request Date</th>
                  <th>Auto Pay</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1002411519570181505</td>
                  <td>6627679777973f92fe30b349</td>
                  <td>
                    <NavLink to="/userdetails">Jacob Hunter</NavLink>
                  </td>

                  <td>
                    <i className="bx bx-rupee"></i>200
                  </td>
                  <td>309016714746</td>

                  <td>RATN0000383</td>

                  <td>IMPS</td>

                  <td>
                    <span className="inactive">Pending</span>
                  </td>

                  <td>
                    <p>05/02/2024</p> <p>06:45:45 PM</p>
                  </td>

                  <td>Yes</td>

                  <td>
                    <button
                      onClick={() => setDelete(true)}
                      className="deleate"
                      type="button"
                    >
                      <i title="Delete" className="bx bx-trash"></i>
                    </button>
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

export default Withdrawrequests;
