import { NavLink } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const RegesterdPlayers = () => {
  const [item, setDelete] = useState(false);
  const [addplayer, setAddplayer] = useState(false);

  const notify = () => {
    toast("Action Accepted");
    setDelete(false);
    setAddplayer(false);
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

      {addplayer == true && (
        <div className="edit-box">
          <div className="box">
            <div className="add-players">
              <div className="items">
                <div className="input">
                  <label htmlFor="">First Name</label>
                  <input type="text" />
                </div>

                <div className="input">
                  <label htmlFor="">Middle Name</label>
                  <input type="text" />
                </div>

                <div className="input">
                  <label htmlFor="">Last Name</label>
                  <input type="text" />
                </div>

                <div className="input">
                  <label htmlFor="">Manager</label>
                  <select name="" id="">
                    <option value="">Select Manager</option>
                    <option value="">Option 1</option>
                  </select>
                </div>

                <div className="input">
                  <label htmlFor="">Agent</label>
                  <select name="" id="">
                    <option value="">Select Agent</option>
                    <option value="">Option 1</option>
                  </select>
                </div>

                <div className="input">
                  <label htmlFor="">Password</label>
                  <input type="password" />
                </div>

                <div className="input">
                  <label htmlFor="">Confirm Password</label>
                  <input type="password" />
                </div>

                <div className="input">
                  <label htmlFor="">Mobile</label>
                  <input type="number" />
                </div>

                <div className="input">
                  <label htmlFor="">Email</label>
                  <input type="email" />
                </div>

                <div className="input">
                  <label htmlFor="">Gender</label>
                  <select name="" id="">
                    <option value="">Choose Gender</option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                  </select>
                </div>

                <div className="input">
                  <label htmlFor="">Date Of Birth</label>
                  <input type="date" />
                </div>

                <div className="input">
                  <label htmlFor="">Address Line 1</label>
                  <input type="date" />
                </div>

                <div className="input">
                  <label htmlFor="">Address Line 2</label>
                  <input type="date" />
                </div>

                <div className="input">
                  <label htmlFor="">City</label>
                  <input type="text" />
                </div>

                <div className="input">
                  <label htmlFor="">State</label>
                  <input type="text" />
                </div>

                <div className="input">
                  <label htmlFor="">Pin Code</label>
                  <input type="text" />
                </div>
              </div>
            </div>

            <div className="save-btn">
              <button
                onClick={() => setAddplayer(false)}
                className="cancel"
                type="button"
              >
                Cancel
              </button>
              <button onClick={notify} className="add" type="button">
                Add
              </button>
            </div>
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

      <div id="userMangement">
        <div className="bredcremp">
          <h4>Regesterd Players</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="management">
          <div className="search-item">
            <button className="btn doenload" type="button">
              Download CVS
            </button>
            <button
              onClick={() => setAddplayer(true)}
              className="btn add"
              type="button"
            >
              Add Player
            </button>
          </div>
          <br />

          <div className="search-filter">
            <input
              type="text"
              placeholder="Search by Game Id, Game Type, or others..."
            />

            <select name="" id="">
              <option value="">KYC Status</option>
              <option value="">Pending</option>
            </select>

            <select name="" id="">
              <option value="">User Status</option>
              <option value="">Pending</option>
            </select>

            <select name="" id="">
              <option value="">Refferd By</option>
              <option value="">Pending</option>
            </select>

            <button>Search</button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>Full Name</th>
                  <th>User Name</th>
                  <th>Manager Usernanme</th>
                  <th>Agent Usernanme</th>
                  <th>Emali</th>
                  <th>Mobile</th>
                  <th>Current Wallet</th>
                  <th>Current Withdrawal</th>
                  <th>Regesterd Time</th>
                  <th>Adress Proof</th>
                  <th>PAN Card</th>
                  <th>KYC Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <NavLink to="/userdetails">Jacob Hunter</NavLink>
                  </td>
                  <td>user8998</td>
                  <td>Manager Username</td>
                  <td>Agent Username</td>
                  <td>text@gmail.com</td>
                  <td>+91 00000 00000</td>
                  <td>
                    <i className="bx bx-rupee"></i>200
                  </td>
                  <td>
                    <i className="bx bx-rupee"></i>200
                  </td>

                  <td className="time">
                    <p>12/02/2002</p>
                    <p>12:00AM</p>
                  </td>

                  <td>Not Submitted</td>
                  <td>Not Submitted</td>
                  <td>
                    <span className="inactive">Pending</span>
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

                <tr>
                  <td>1</td>
                  <td>
                    <NavLink to="/userdetails">Jacob Hunter</NavLink>
                  </td>
                  <td>user8998</td>
                  <td>Manager Username</td>
                  <td>Agent Username</td>
                  <td>text@gmail.com</td>
                  <td>+91 00000 00000</td>
                  <td>
                    <i className="bx bx-rupee"></i>200
                  </td>
                  <td>
                    <i className="bx bx-rupee"></i>200
                  </td>

                  <td className="time">
                    <p>12/02/2002</p>
                    <p>12:00AM</p>
                  </td>

                  <td>Not Submitted</td>
                  <td>Not Submitted</td>
                  <td>
                    <span className="active">Submitted</span>
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

export default RegesterdPlayers;
