import { useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

const PromotionalMessages = () => {
  const [add, setAdd] = useState(false);

  const notify = () => {
    toast("Action Accepted");
    setAdd(false);
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

      {add == true && (
        <div className="add-banner">
          <div className="item">
            <form>
              <div className="input">
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="6"></textarea>
              </div>

              <div className="ckeck">
                <input type="checkbox" />
                <label htmlFor="">Select All Players</label>
              </div>

              <div className="ckeck">
                <input type="checkbox" />
                <label htmlFor="">Sent On Mobile</label>
              </div>

              <div className="ckeck">
                <input type="checkbox" />
                <label htmlFor="">Sent On Email</label>
              </div>

              <div className="btns">
                <button onClick={() => setAdd(false)} className="cancel">
                  Cancel
                </button>
                <button onClick={notify} className="add">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <AdminHeader />

      <div id="game">
        <div className="bredcremp">
          <h4>Promotional Messages</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="pending-content">
          <div className="search-filter right-item ">
            <button onClick={() => setAdd(true)}>Send SMS </button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Registration Time</th>
                  <th>Address Proof</th>
                  <th>PAN Card</th>
                  <th>KYC Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-name">#SK93453</td>
                  <td><NavLink to='/userdetails'>Jacob Hunter</NavLink></td>
                  <td>dev.username@gmail.com</td>
                  <td>+91 60090 60060</td>
                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>
                  <td>Not Submitted</td>
                  <td>Not Submitted</td>
                  <td>
                    <span className="inactive">Not Submitted</span>
                  </td>
                </tr>
                <tr>
                  <td className="td-name">#SK93453</td>
                  <td><NavLink to='/userdetails'>Jacob Hunter</NavLink></td>
                  <td>dev.username@gmail.com</td>
                  <td>+91 60090 60060</td>
                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>
                  <td>Not Submitted</td>
                  <td>Not Submitted</td>
                  <td>
                    <span className="active">Submitted</span>
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

export default PromotionalMessages;
