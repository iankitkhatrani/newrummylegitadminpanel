import { useState } from "react";
import "../assets/scss/TranstionManagement.scss";
import AdminHeader from "../components/AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

const TranstionMangement = () => {
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

      <div id="transtion-management">
        <div className="bredcremp">
          <h4>Transcation Management</h4>

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

            <button type="button">Search</button>
            <button type="button">Download XLS</button>
            <button type="button">Download PDF</button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>User Name</th>
                  <th>Txn Amount</th>
                  <th>Win Wallet</th>
                  <th>Main Wallet</th>
                  <th>Date</th>
                  <th>Type </th>
                  <th>Payment Gateway</th>
                  <th>Remark </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6627ab8212cb119314de7b59</td>
                  <td className="td-name">
                    <NavLink to="/userdetails">Sush Khan</NavLink>
                  </td>
                  <td>
                    <span className="inactive">
                      <i className="bx bx-rupee"></i> 600
                    </span>
                  </td>
                  <td>
                    <span className="active">
                      <i className="bx bx-rupee"></i> 600
                    </span>
                  </td>
                  <td>
                    <span className="active">
                      <i className="bx bx-rupee"></i> 600
                    </span>
                  </td>
                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>
                  <td>Admin</td>
                  <td>Null</td>

                  <td>
                    <span>Test</span>
                  </td>
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

export default TranstionMangement;
