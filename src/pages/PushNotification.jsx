import { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PushNotification = () => {
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

      <div id="game">
        <div className="bredcremp">
          <h4>Social URL Informations</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="pending-content">
          <div className="search-filter">
            <input type="text" placeholder="Notification title" />
            <input type="text" placeholder="Notification Description" />
            <button onClick={notify} type="button">
              Push Notificatioin
            </button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>Serial Number</th>
                  <th>Notification Title</th>
                  <th>Notification Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Game Patch Update</td>
                  <td>Lorem ipsum dolor ipsum dolor sit...</td>
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

export default PushNotification;
