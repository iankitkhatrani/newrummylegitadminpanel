import "../../assets/scss/Setting.scss";
import "../../assets/scss/KYCmangement.scss";
import AdminHeader from "../../components/AdminHeader";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GlobalConfig = () => {
  const [virsion, setVirsion] = useState(false);
  const [item, setDelete] = useState(false);

  const notify = () => {
    toast("Action Accepted");
    setVirsion(false);
    setDelete(false);
  };

  return (
    <div className="container">
      <div>
        <ToastContainer
          autoClose={2000}
          className="toast-container"
          toastClassName="dark-toast"
        />
      </div>
      {virsion == true && (
        <div className="add-virsion">
          <div className="item">
            <form>
              <div className="input">
                <label htmlFor="android">Key Name</label>
                <input type="text" id="android" />
              </div>

              <div className="input">
                <label htmlFor="ios">Value</label>
                <input type="text" id="ios" />
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
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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
      <AdminHeader />
      <div id="kyc-management">
        <div className="bredcremp">
          <h4>Global Confirgation</h4>

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
                  <th>Key Name</th>
                  <th>Value</th>
                  <th>Updated Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Site Title</td>
                  <td>Test Keeps Rummy</td>
                  <td>
                    <p>04/24/2024</p> <p>04:26:14 PM</p>
                  </td>
                  <td>
                    <button
                      onClick={() => setVirsion(true)}
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

                <tr>
                  <td>1</td>
                  <td>Site Title</td>
                  <td>Test Keeps Rummy</td>
                  <td>
                    <p>04/24/2024</p> <p>04:26:14 PM</p>
                  </td>
                  <td>
                    <button
                      onClick={() => setVirsion(true)}
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

                <tr>
                  <td>1</td>
                  <td>Site Title</td>
                  <td>Test Keeps Rummy</td>
                  <td>
                    <p>04/24/2024</p> <p>04:26:14 PM</p>
                  </td>
                  <td>
                    <button
                      onClick={() => setVirsion(true)}
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

                <tr>
                  <td>1</td>
                  <td>Site Title</td>
                  <td>Test Keeps Rummy</td>
                  <td>
                    <p>04/24/2024</p> <p>04:26:14 PM</p>
                  </td>
                  <td>
                    <button
                      onClick={() => setVirsion(true)}
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

                <tr>
                  <td>1</td>
                  <td>Site Title</td>
                  <td>Test Keeps Rummy</td>
                  <td>
                    <p>04/24/2024</p> <p>04:26:14 PM</p>
                  </td>
                  <td>
                    <button
                      onClick={() => setVirsion(true)}
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

                <tr>
                  <td>1</td>
                  <td>Site Title</td>
                  <td>Test Keeps Rummy</td>
                  <td>
                    <p>04/24/2024</p> <p>04:26:14 PM</p>
                  </td>
                  <td>
                    <button
                      onClick={() => setVirsion(true)}
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
      ;
    </div>
  );
};

export default GlobalConfig;
