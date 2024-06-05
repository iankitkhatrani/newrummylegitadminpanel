import { NavLink } from "react-router-dom";
import "../../assets/scss/KYCmangement.scss";
import AdminHeader from "../../components/AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Rejected = () => {
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

      <div id="kyc-management">
        <div className="bredcremp">
          <h4>Kyc Rejected</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="pending-content">
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
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>Aadhaar Card</th>
                  <th>DOB</th>
                  <th>Created Date</th>
                  <th>Zoopone Adharcard Response</th>
                  <th>Adharcard Admin Response</th>
                  <th>Pan Card</th>
                  <th>Zoopone Pancard Response</th>
                  <th>Pancard Admin Response</th>
                  <th>Admin Remark</th>
                  <th>Admin Name</th>
                  <th>Remark Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6622952e352c1a3b6f0fc463</td>
                  <td className="td-name">
                    <NavLink to="/userdetails">User Name</NavLink>
                  </td>
                  <td>618328245071</td>
                  <td>27/02/2024</td>
                  <td>
                    <p>04/22/2024</p> <p>02:19:34 PM</p>{" "}
                  </td>
                  <td>
                    <span>Auto Approved</span>
                  </td>
                  <td>-</td>
                  <td>AWCPN5530E</td>
                  <td>
                    <span>Auto Approved</span>
                  </td>
                  <td>-</td>
                  <td>Fello Demo</td>
                  <td>Admin</td>
                  <td>
                    <p>04/24/2024</p> <p>04:26:14 PM</p>
                  </td>

                  <td>
                    <NavLink to="/userdetails">
                      <button className="edit" type="button">
                        <i title="Edit" className="bx bx-edit-alt"></i>
                      </button>
                    </NavLink>
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
                  <td>6622952e352c1a3b6f0fc463</td>
                  <td className="td-name">
                    <NavLink to="/userdetails">User Name</NavLink>
                  </td>
                  <td>618328245071</td>
                  <td>27/02/2024</td>
                  <td>
                    <p>04/22/2024</p> <p>02:19:34 PM</p>{" "}
                  </td>
                  <td>
                    <span>Auto Approved</span>
                  </td>
                  <td>-</td>
                  <td>AWCPN5530E</td>
                  <td>
                    <span>Auto Approved</span>
                  </td>
                  <td>-</td>
                  <td>Fello Demo</td>
                  <td>Admin</td>
                  <td>
                    <p>04/24/2024</p> <p>04:26:14 PM</p>
                  </td>

                  <td>
                    <NavLink to="/userdetails">
                      <button className="edit" type="button">
                        <i title="Edit" className="bx bx-edit-alt"></i>
                      </button>
                    </NavLink>
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
                  <td>6622952e352c1a3b6f0fc463</td>
                  <td className="td-name">
                    <NavLink to="/userdetails">User Name</NavLink>
                  </td>
                  <td>618328245071</td>
                  <td>27/02/2024</td>
                  <td>
                    <p>04/22/2024</p> <p>02:19:34 PM</p>{" "}
                  </td>
                  <td>
                    <span>Auto Approved</span>
                  </td>
                  <td>-</td>
                  <td>AWCPN5530E</td>
                  <td>
                    <span>Auto Approved</span>
                  </td>
                  <td>-</td>
                  <td>Fello Demo</td>
                  <td>Admin</td>
                  <td>
                    <p>04/24/2024</p> <p>04:26:14 PM</p>
                  </td>

                  <td>
                    <NavLink to="/userdetails">
                      <button className="edit" type="button">
                        <i title="Edit" className="bx bx-edit-alt"></i>
                      </button>
                    </NavLink>
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

export default Rejected;
