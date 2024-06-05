import "../../assets/scss/Setting.scss";
import "../../assets/scss/KYCmangement.scss";
import AdminHeader from "../../components/AdminHeader";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Statemanagement = () => {
  const [virsion, setVirsion] = useState(false);

  const notify = () => {
    toast("Action Accepted");
    setVirsion(false);
  };

  return (
    <div className="container">
      <ToastContainer
        autoClose={2000}
        className="toast-container"
        toastClassName="dark-toast"
      />
      {virsion == true && (
        <div className="add-virsion">
          <div className="item">
            <form>
              <div className="input">
                <label htmlFor="force">Action</label>
                <select name="" id="force">
                  <option>Select Option</option>
                  <option value="">Block</option>
                  <option value="">Allowed</option>
                </select>
              </div>

              <div className="btns">
                <button
                  onClick={() => setVirsion(false)}
                  className="cancel"
                  type="button"
                >
                  Cancel
                </button>
                <button onClick={notify} className="add" type="button">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <AdminHeader />
      <div id="kyc-management">
        <div className="bredcremp">
          <h4>State Management</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="pending-content">
          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>State Name</th>
                  <th>Status</th>
                  <th>Last Update</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>West Bengal</td>
                  <td>
                    <span className="active">Allowed</span>
                  </td>
                  <td>
                    <p>12/20/2022</p> <p>12:10AM</p>
                  </td>

                  <td>
                    <button
                      onClick={() => setVirsion(true)}
                      className="edit"
                      type="button"
                    >
                      <i className="bx bx-edit-alt"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Delhi</td>
                  <td>
                    <span className="declined">Blocked</span>
                  </td>
                  <td>
                    <p>12/20/2022</p> <p>12:10AM</p>
                  </td>

                  <td>
                    <button
                      onClick={() => setVirsion(true)}
                      className="edit"
                      type="button"
                    >
                      <i className="bx bx-edit-alt"></i>
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
      ;
    </div>
  );
};

export default Statemanagement;
