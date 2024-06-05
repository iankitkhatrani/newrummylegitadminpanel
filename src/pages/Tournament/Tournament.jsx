import { useState } from "react";
import "../../assets/scss/Game.scss";
import AdminHeader from "../../components/AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tournament = () => {
  const [item, setDelete] = useState(false);
  const [add, setAdd] = useState(false);

  const notify = () => {
    toast("Item was deleted");
    setDelete(false);
  };

  return (
    <>
      {add == true && (
        <div className="add-bn">
          <div className="item">
            <h4>Add Tournament</h4>

            <div className="form-1">
              <div className="all-items">
                <label htmlFor="cat">Category</label>
                <select name="" id="cat">
                  <option value="">Select Category</option>
                  <option value="">dasds</option>
                  <option value="">dasds</option>
                  <option value="">dasds</option>
                </select>
              </div>

              <div className="all-items">
                <label htmlFor="title">Tournament Title</label>
                <select name="" id="title">
                  <option value="">Select Category</option>
                  <option value="">dasds</option>
                  <option value="">dasds</option>
                  <option value="">dasds</option>
                </select>
              </div>

              <div className="all-items">
                <label htmlFor="allow">Allowed</label>
                <select name="" id="allow">
                  <option value="">Select Category</option>
                  <option value="">dasds</option>
                  <option value="">dasds</option>
                  <option value="">dasds</option>
                </select>
              </div>

              <div className="all-items">
                <label htmlFor="bot">Number of Bot</label>
                <input type="text" id="bot" />
              </div>

              <div className="all-items">
                <label htmlFor="Freuency">Freuency</label>
                <select name="" id="Freuency">
                  <option value="">Select Freuency</option>
                  <option value="">dasds</option>
                  <option value="">dasds</option>
                  <option value="">dasds</option>
                </select>
              </div>

              <div className="all-items">
                <label htmlFor="bot">Regestration Start Date</label>
                <input type="date" id="bot" />
              </div>

              <div className="all-items">
                <label htmlFor="bot">Regestration Closes Date</label>
                <input type="date" id="bot" />
              </div>

              <div className="all-items">
                <label htmlFor="bot">Tournament Start Date</label>
                <input type="date" id="bot" />
              </div>
            </div>

            <h3>Bot Setting</h3>

            <div className="form-2">
              <div className="items">
                <label htmlFor="">Bot Allowed</label>

                <select name="" id="">
                  <option value="">Select Category</option>
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </div>

              <div className="items">
                <label htmlFor="">Min Jokers</label>
                <input type="text" />
              </div>

              <div className="items">
                <label htmlFor="">Max Jokers</label>
                <input type="text" />
              </div>

              <div className="items">
                <label htmlFor="">Min Score to middle drop</label>
                <input type="text" />
              </div>

              <div className="items">
                <label htmlFor="">Max Score to middle drop</label>
                <input type="text" />
              </div>

              <div className="items">
                <label htmlFor="">Min cards to search in deck</label>
                <input type="text" />
              </div>

              <div className="items">
                <label htmlFor="">Max cards to search in deck</label>
                <input type="text" />
              </div>

              <div className="items">
                <label htmlFor="">Min score of dealing cards</label>
                <input type="text" />
              </div>

              <div className="items">
                <label htmlFor="">Max score of dealing cards</label>
                <input type="text" />
              </div>

              <div className="items">
                <label htmlFor="">Min deal cards fetch count</label>
                <input type="text" />
              </div>

              <div className="items">
                <label htmlFor="">Max deal cards fetch count</label>
                <input type="text" />
              </div>

              <div className="items">
                <label htmlFor="">Min score to drop</label>
                <input type="text" />
              </div>

              <div className="items">
                <label htmlFor="">Max score to drop</label>
                <input type="text" />
              </div>
            </div>

            <h3>Entry fee and tournament conducting admin charge </h3>

            <div className="form-3">
              <div className="items">
                <label htmlFor="">Entry Fee Type</label>

                <select name="" id="">
                  <option value="">Choose</option>
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </div>

              <div className="items">
                <label htmlFor="">Max Players in Tournament </label>
                <input type="text" />
              </div>

              <div className="items">
                <label htmlFor="">(%) Charge for conducting Tournament</label>
                <input type="text" />
              </div>
            </div>

            <h3>Prize Info</h3>

            <div className="form-3">
              <div className="items">
                <label htmlFor="">Expected Prize Amount</label>
                <input type="text" />
              </div>

              <div className="items">
                <label htmlFor="">(%) Charge for conducting Tournament</label>
                <input type="text" />
              </div>

              <div className="items">
                <div className="btns">
                  <button
                    onClick={() => setAdd(false)}
                    type="button"
                    className="cancel"
                  >
                    Cancel
                  </button>
                  <button type="button" className="add-btn">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <AdminHeader />

        <div>
          <ToastContainer
            autoClose={2000}
            className="toast-container"
            toastClassName="dark-toast"
          />
        </div>

        <div id="game">
          <div className="bredcremp">
            <h4>Tournament</h4>

            <div className="page-title">
              <p className="active">Dashboard</p>
              <p className="not">/ Default</p>
            </div>
          </div>

          <div className="pending-content">
            <div className="search-filter">
              <select name="" id="">
                <option value="">Choose By Category</option>
                <option value="">Category 1</option>
                <option value="">Category 2</option>
                <option value="">Category 3</option>
              </select>

              <select name="" id="">
                <option value="">Choose By Category</option>
                <option value="">Category 1</option>
                <option value="">Category 2</option>
                <option value="">Category 3</option>
              </select>

              <input type="date" name="" id="" />
              <input type="date" name="" id="" />

              <button type="button" onClick={() => setAdd(true)}>
                Add
              </button>
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

                    <p>
                      Are you sure you want to permanently erase the list. ?
                    </p>

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
                    <th>Serial Number</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Frequency</th>
                    <th>Entry Type</th>
                    <th>Entry Value</th>
                    <th>Max Players</th>
                    <th>Date Info</th>
                    <th>Status</th>
                    <th>Created Date</th>
                    <th>Updated Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Friday Special</td>
                    <td>Testing Tuesday</td>
                    <td>One Time</td>
                    <td>Free</td>
                    <td>1</td>
                    <td>600</td>
                    <td>
                      <p>04/30/2024</p> <p>12:54:38 PM</p>
                    </td>
                    <td>
                      <span className="active">Active</span>
                    </td>
                    <td>
                      <p>04/30/2024</p> <p>12:54:38 PM</p>
                    </td>
                    <td>NA</td>

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
    </>
  );
};

export default Tournament;
