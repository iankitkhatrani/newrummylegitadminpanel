import { useState } from "react";
import "../assets//scss/Game.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHeader from "../components/AdminHeader";

const Bonus = () => {
  const [view, setView] = useState(false);
  const [item, setDelete] = useState(false);
  const notify = () => {
    toast("Item was deleted");
    setView(false);
    setDelete(false)
  };
  return (
    <div className="container">
      <AdminHeader />
      <ToastContainer
        autoClose={2000}
        className="toast-container"
        toastClassName="dark-toast"
      />

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

      {view == true && (
        <div className="Xadd-game">
          <div className="item">
            <h3>Add Bonus :</h3>
            <form>
              <div className="input">
                <label htmlFor="">Bonus Title</label>
                <input type="text" placeholder="" />
              </div>

              <div className="input">
                <label htmlFor="">Bonus Code</label>
                <input type="text" placeholder="" />
              </div>

              <div className="input">
                <label htmlFor="name">Credited To</label>
                <select name="" id="">
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                </select>
              </div>

              <div className="input">
                <label htmlFor="">?</label>
                <input type="text" placeholder="" />
              </div>

              <div className="input">
                <label htmlFor="">Max Limit</label>
                <input type="text" placeholder="" />
              </div>

              <div className="input">
                <label htmlFor="">Usages Time</label>
                <input type="text" placeholder="" />
              </div>

              <div className="input">
                <label htmlFor="">From Date</label>
                <input type="date" placeholder="" />
              </div>

              <div className="input">
                <label htmlFor="">To Date</label>
                <input type="date" placeholder="" />
              </div>

              <div className="btns">
                <button onClick={notify} className="add" type="button">
                  Add
                </button>
                <button
                  onClick={() => setView(false)}
                  className="cancel"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div id="game">
        <div className="bredcremp">
          <h4>Bonus System</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="pending-content">
          <div className="search-filter">
            <input type="text" placeholder="Search by title or others..." />

            <button onClick={() => setView(true)}>
              <i className="bx bx-folder-plus"></i> Add Bonus
            </button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>SL No</th>
                  <th>Bonus Code</th>
                  <th>Bonus Type</th>
                  <th>Title</th>
                  <th>From Date</th>
                  <th>To Date</th>
                  <th>Points Percentage</th>
                  <th>Max Points</th>
                  <th>Usage Times</th>
                  <th>Credited To</th>
                  <th>Valid Days</th>
                  <th>Created Date</th>
                  <th>Updated Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>66</td>
                  <td>BONUS66</td>
                  <td>type</td>
                  <td>Bonus Title</td>
                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>
                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>
                  <td>55%</td>
                  <td>15%</td>
                  <td>
                    <div className="desc">Lorem ipsum dolor sit amet.</div>
                  </td>

                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>
                  <td>User Name</td>

                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>

                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>

                  <td>
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

export default Bonus;
