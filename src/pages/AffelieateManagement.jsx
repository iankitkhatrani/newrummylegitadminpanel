import AdminHeader from "../components/AdminHeader";
import "../assets/scss/Game.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AffelieateManagement = () => {
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

      <div id="game">
        <div className="bredcremp">
          <h4>Affelieate Management</h4>

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

            <button>Reset</button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>Serial Number</th>
                  <th>User Name</th>
                  <th>User ID</th>
                  <th>Total Referral</th>
                  <th>Earn Bonus</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <NavLink to="/userdetails">User Name</NavLink>
                  </td>
                  <td>avcdas243242d</td>
                  <td>2</td>
                  <td>0.00</td>
                  <td>
                    <NavLink to="/refferaildetails">
                      <button className="edit" type="button">
                        <i title="Show" className="bx bx-show"></i>
                      </button>
                    </NavLink>
                    <button onClick={()=> setDelete(true)} className="deleate" type="button">
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

export default AffelieateManagement;
