import AdminHeader from "../components/AdminHeader";
import "../assets/scss/UserManagement.scss";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BotManagement = () => {
  const [bot, setBot] = useState(false);

  const notify = () => {
    toast("Action Accepted");
    setBot(false);
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

      {bot == true && (
        <div className="addbot">
          <div className="addbot-box">
            <h4>Add New Bot</h4>

            <div className="input">
              <label htmlFor="">Robot Name</label>
              <input type="text" placeholder="Please Insert Name" />
            </div>

            <div className="input">
              <label htmlFor="">profile Image</label>
              <input type="file" placeholder="Please Insert Name" />
            </div>

            <div className="input">
              <div className="status">
                <input type="radio" name="active" id="active" />
                <label htmlFor="active">Active</label>
              </div>

              <div className="status">
                <input type="radio" name="active" id="inactive" />
                <label htmlFor="inactive">Inactive</label>
              </div>
            </div>

            <div className="btn">
              <button
                onClick={() => setBot(false)}
                className="cancel"
                type="button"
              >
                Cancel
              </button>
              <button onClick={notify} className="add" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      )}

      <div id="userMangement">
        <div className="bredcremp">
          <h4>Bot Management</h4>

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

            <button type="button">Reset</button>
            <button onClick={() => setBot(true)} type="button">
              Add Robot
            </button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>Robot Image</th>
                  <th>Robot Name</th>
                  <th>Game Played</th>
                  <th>Main Wallet</th>
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

                  <td>Priya Sharma</td>
                  <td>0</td>

                  <td>
                    <i className="bx bx-rupee"></i>531.13
                  </td>

                  <td>Active</td>

                  <td>
                    <button className="edit" type="button">
                      <i title="Edit" className="bx bx-edit-alt"></i>
                    </button>
                    <button className="deleate" type="button">
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

                  <td>Priya Sharma</td>
                  <td>0</td>

                  <td>
                    <i className="bx bx-rupee"></i>531.13
                  </td>

                  <td>Active</td>

                  <td>
                    <button className="edit" type="button">
                      <i title="Edit" className="bx bx-edit-alt"></i>
                    </button>
                    <button className="deleate" type="button">
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

                  <td>Priya Sharma</td>
                  <td>0</td>

                  <td>
                    <i className="bx bx-rupee"></i>531.13
                  </td>

                  <td>Active</td>

                  <td>
                    <button className="edit" type="button">
                      <i title="Edit" className="bx bx-edit-alt"></i>
                    </button>
                    <button className="deleate" type="button">
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

export default BotManagement;
