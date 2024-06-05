import { useState } from "react";
import "../../assets/scss/BankManagement.scss";
import AdminHeader from "../../components/AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

const BankApproved = () => {
  const [item, setDelete] = useState(false);
  const [edit, setEdti] = useState(false);

  const notify = () => {
    toast("Action Accepted");
    setDelete(false);
    setEdti(false);
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

      {edit == true && (
        <div className="edit-bankmanagement">
          <div className="item">
            <h4>Edit</h4>

            <div className="edit-form">
              <div className="input">
                <label htmlFor="">User Name</label>
                <input type="text" placeholder="User Name" />
              </div>

              <div className="input">
                <label htmlFor="">User Number</label>
                <input type="text" placeholder="User Number" />
              </div>

              <div className="input">
                <label htmlFor="">Beneficiary Name</label>
                <input type="text" placeholder="Beneficiary Name" />
              </div>

              <div className="input">
                <label htmlFor="">Amount Number</label>
                <input type="text" placeholder="Amount Number" />
              </div>

              <div className="input">
                <label htmlFor="">IFSC</label>
                <input type="text" placeholder="IFSC Code" />
              </div>

              <div className="input">
                <label htmlFor="">Created At</label>
                <input type="date" placeholder="IFSC Code" />
              </div>

              <div className="input">
                <label htmlFor="">Penny Drop</label>
                <select name="" id="">
                  <option value="">Select Option</option>
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                  <option value="">Option 3</option>
                </select>
              </div>

              <div className="input">
                <label htmlFor="">Admin Remark</label>
                <select name="" id="">
                  <option value="">Select Renark</option>
                  <option value="">Remark 1</option>
                  <option value="">Remark 2</option>
                  <option value="">Remark 3</option>
                  <option value="">Remark 4</option>
                </select>
              </div>
            </div>

            <div className="action-btn">
              <button
                onClick={() => setEdti(false)}
                className="cancel"
                type="button"
              >
                Cancel
              </button>
              <button onClick={notify} className="add" type="button">
                Save Details
              </button>
            </div>
          </div>
        </div>
      )}

      <div id="bank-management">
        <div className="bredcremp">
          <h4>Bank Approved</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="content">
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

            <i title="Reset" className="bx bx-reset"></i>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>Mobile Number</th>
                  <th>Beneficiary Name</th>
                  <th>Amount Number</th>
                  <th>IFSC</th>
                  <th>Created At </th>
                  <th>Penny Drop</th>
                  <th>Status</th>
                  <th>Admin Remark</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>662289f7352c1a3b6f0fbee4</td>
                  <td className="td-name">
                    <NavLink to="/userdetails">User Name</NavLink>
                  </td>
                  <td>+91 00000000</td>
                  <td>User Name </td>

                  <td>90353324243</td>

                  <td>KKBK0008070</td>
                  <td>
                    <p>04/20/2024</p>
                    <p>11:33:17 AM</p>
                  </td>

                  <td>
                    <span className="active">Auto Approved</span>
                  </td>
                  <td>Approved</td>
                  <td>Admin</td>

                  <td>
                    <button
                      onClick={() => setEdti(true)}
                      className="edit"
                      type="button"
                    >
                      <i title="Edit" className="bx bx-edit-alt"></i>
                    </button>
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

export default BankApproved;
