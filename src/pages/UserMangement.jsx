import AdminHeader from "../components/AdminHeader";
import "../assets/scss/UserManagement.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserMangement = () => {
  const [item, setDelete] = useState(false);
  const notify = () => {
    toast("Item was deleted");
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
      <AdminHeader />
      <div id="userMangement">
        <div className="bredcremp">
          <h4>Dashboard</h4>

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

            <i title="Add" className="bx bx-message-alt-add"></i>

            <i title="Reset" className="bx bx-reset"></i>

            <button>Download XLS</button>
            <button>Download PDF</button>
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
                  <th>Profile</th>
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>Mobile Number</th>
                  <th>Email</th>
                  <th>Rummy Game</th>
                  <th>Main Wallet</th>
                  <th>Registration Date</th>
                  <th>Last Login</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </td>
                  <td className="td-name">#SK93453</td>

                  <td className="user-name">
                    <NavLink to="/userdetails">Jacob Hunter</NavLink>
                  </td>
                  <td>+91 60090 60060</td>
                  <td>dev.username@gmail.com</td>
                  <td>0.00</td>
                  <td>
                    <i className="bx bx-rupee"></i>531.13
                  </td>
                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>
                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>

                  <td>
                    <span className="active">Active</span>
                  </td>
                  <td>
                    <NavLink to="/userdetails">
                      <button className="edit" type="button">
                        <i title="Edit" className="bx bx-edit-alt"></i>
                      </button>
                    </NavLink>
                    <button
                      onClick={() => {
                        setDelete(true);
                        notify;
                      }}
                      className="deleate"
                      type="button"
                    >
                      <i title="Delete" className="bx bx-trash"></i>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </td>
                  <td className="td-name">#SK93453</td>

                  <td className="user-name">
                    <NavLink to="/userdetails">Jacob Hunter</NavLink>
                  </td>
                  <td>+91 60090 60060</td>
                  <td>dev.username@gmail.com</td>
                  <td>0.00</td>
                  <td>
                    <i className="bx bx-rupee"></i>531.13
                  </td>
                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>
                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>

                  <td>
                    <span className="active">Active</span>
                  </td>
                  <td>
                    <NavLink to="/userdetails">
                      <button className="edit" type="button">
                        <i title="Edit" className="bx bx-edit-alt"></i>
                      </button>
                    </NavLink>
                    <button
                      onClick={() => {
                        setDelete(true);
                        notify;
                      }}
                      className="deleate"
                      type="button"
                    >
                      <i title="Delete" className="bx bx-trash"></i>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </td>
                  <td className="td-name">#SK93453</td>

                  <td className="user-name">
                    <NavLink to="/userdetails">Jacob Hunter</NavLink>
                  </td>
                  <td>+91 60090 60060</td>
                  <td>dev.username@gmail.com</td>
                  <td>0.00</td>
                  <td>
                    <i className="bx bx-rupee"></i>531.13
                  </td>
                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>
                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>

                  <td>
                    <span className="active">Active</span>
                  </td>
                  <td>
                    <NavLink to="/userdetails">
                      <button className="edit" type="button">
                        <i title="Edit" className="bx bx-edit-alt"></i>
                      </button>
                    </NavLink>
                    <button
                      onClick={() => {
                        setDelete(true);
                        notify;
                      }}
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

export default UserMangement;
