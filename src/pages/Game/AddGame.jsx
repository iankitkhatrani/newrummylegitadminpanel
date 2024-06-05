import { useState } from "react";
import "../../assets/scss/Game.scss";
import AdminHeader from "../../components/AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddGame = () => {
  const [view, setView] = useState(false);

  const notify = () => {
    toast("Item was deleted");
    setView(false);
  };
  return (
    <div className="container">
      <AdminHeader />
      <ToastContainer
        autoClose={2000}
        className="toast-container"
        toastClassName="dark-toast"
      />

      {view == true && (
        <div className="Xadd-game">
          <div className="item">
            <h3>Add Game :</h3>
            <form>
              <div className="input">
                <label htmlFor="name">Table Name</label>

                <select name="" id="">
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                </select>
              </div>

              <div className="input">
                <label htmlFor="commission">Commission</label>
                <select name="" id="">
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                </select>
              </div>

              <div className="input">
                <label htmlFor="fee">Entry Fee</label>
                <select name="" id="">
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                </select>
              </div>

              <div className="input">
                <label htmlFor="seat">Entry Fee</label>
                <input type="text" placeholder="" />
              </div>

              <div className="input">
                <label htmlFor="seat">Prize</label>
                <input type="text" placeholder="" />
              </div>

              <div className="input">
                <label htmlFor="seat">Max Seat</label>
                <select name="" id="">
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                  <option value="">Choose Name</option>
                </select>
              </div>

              <div className="input">
                <label htmlFor="seat">Entry Fee</label>
                <input type="text" placeholder="" />
              </div>

              <div className="input">
                <label htmlFor="seat">Prize</label>
                <input type="text" placeholder="" />
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
          <h4>Add Game</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="pending-content">
          <div className="search-filter">
            <select name="" id="">
              <option value="">Choose Game Type</option>
              <option value="">Type 1</option>
              <option value="">Type 2</option>
              <option value="">Type 3</option>
            </select>

            <select name="" id="">
              <option value="">Choose Game Type</option>
              <option value="">Type 1</option>
              <option value="">Type 2</option>
              <option value="">Type 3</option>
            </select>

            <button>Search</button>

            <button onClick={() => setView(true)}>
              <i className="bx bx-folder-plus"></i> Add Games
            </button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>SL No</th>
                  <th>Ttile</th>
                  <th>Type</th>
                  <th>Decks</th>
                  <th>Seats</th>
                  <th>Point Value</th>
                  <th>Entry Value</th>
                  <th>Pool Type</th>
                  <th>Prize</th>
                  <th>Deals</th>
                  <th>Status</th>
                  <th>Created Date</th>
                  <th>Updated Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>66</td>
                  <td>Deals</td>
                  <td>Cash</td>
                  <td>2</td>
                  <td>2</td>
                  <td>1</td>
                  <td>10</td>
                  <td>0</td>
                  <td>14</td>
                  <td>2</td>
                  <td>
                    <span className="active">Active</span>
                  </td>
                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>
                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>

                  <td>
                    <button className="deleate" type="button">
                      <i title="Delete" className="bx bx-trash"></i>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>66</td>
                  <td>Deals</td>
                  <td>Cash</td>
                  <td>2</td>
                  <td>2</td>
                  <td>1</td>
                  <td>10</td>
                  <td>0</td>
                  <td>14</td>
                  <td>2</td>
                  <td>
                    <span className="declined">Inctive</span>
                  </td>
                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>
                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>

                  <td>
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

export default AddGame;
