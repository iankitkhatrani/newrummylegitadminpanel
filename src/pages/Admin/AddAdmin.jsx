import "../../assets/scss/Admin.scss";
import AdminHeader from "../../components/AdminHeader";
import userImage from "../../assets/images/icon.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";

const AddAdmin = () => {
  const [add, setAdd] = useState(false);
  const [del, setDel] = useState(false);
  const [edit, setEdit] = useState(false);

  const notify = () => {
    toast("Action Accepted");
    setAdd(false);
    setDel(false);
    setEdit(false);
  };

  return (
    <div className="container">
      <ToastContainer
        autoClose={2000}
        className="toast-container"
        toastClassName="dark-toast"
      />

      <AdminHeader />

      {del == true && (
        <div className="delete-item">
          <div className="box">
            <i onClick={() => setDel(false)} className="bx bx-x cross-icon"></i>

            <div className="delete">
              <i className="bx bx-trash"></i>
            </div>

            <p>Are you sure you want to permanently erase the list. ?</p>

            <div className="btn">
              <button onClick={notify} className="cancel" type="button">
                Delete Now
              </button>

              <button onClick={() => setDel(false)} type="button">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {add == true && (
        <div className="addmin-view">
          <div className="item">
            <div className="input">
              <label htmlFor="">Admin Name</label>
              <input type="text" />
            </div>

            <div className="input">
              <label htmlFor="">Admin Email</label>
              <input type="email" />
            </div>

            <div className="input">
              <label htmlFor="">Admin Image</label>
              <input type="file" />
            </div>

            <div className="input">
              <label htmlFor="">Admin Country</label>
              <select name="" id="">
                <option value="">Select Country</option>
                <option value="">Select Country</option>
                <option value="">Select Country</option>
                <option value="">Select Country</option>
              </select>
            </div>

            <div className="btns">
              <button
                onClick={() => setAdd(false)}
                className="cancel"
                type="button"
              >
                Close
              </button>
              <button onClick={notify} className="add" type="button">
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {edit == true && (
        <div className="edit-admin">
          <div className="admin-item">
            <h4>Edit Rights</h4>

            <div className="eedit-box">
              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Settings</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Plugins</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Pages</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Video Schedules</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Blog</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Proposals</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Accounting</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Payouts</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Inbox Conversations</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Restricted Words</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Reports</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Reviews</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Buyer Requests</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Proposals</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Accounting</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Payouts</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Inbox Conversations</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Restricted Words</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Reports</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Reviews</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Buyer Requests</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Proposals</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Accounting</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Payouts</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Inbox Conversations</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Restricted Words</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Reports</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Reviews</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Buyer Requests</label>
              </div>

              <div className="edit">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Buyer Requests</label>
              </div>
            </div>

            <div className="btn">
              <button
                onClick={() => setEdit(false)}
                className="cancel"
                type="button"
              >
                Cancel
              </button>
              <button onClick={notify} className="add" type="button">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div id="admin">
        <div className="bredcremp">
          <h4>Admin</h4>

          <div className="page-title">
            <p className="active">Admin</p>
            <p className="not">/ Add Admin</p>
          </div>
        </div>

        <div className="content">
          <div className="add-btn">
            <button onClick={() => setAdd(true)}>
              <i className="bx bx-plus"></i> Add Admin
            </button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>Admin Name</th>
                  <th>Admin Email</th>
                  <th>Admin Image</th>
                  <th>Admin Country</th>
                  <th>Admin Job</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jhon Doe</td>
                  <td>email.@gmail.com</td>
                  <td>
                    <img src={userImage} alt="img" />
                  </td>

                  <td>India</td>
                  <td>Admin</td>
                  <td>
                    <button
                      onClick={() => setEdit(true)}
                      className="edit"
                      type="button"
                    >
                      <i title="Edit" className="bx bx-edit-alt"></i>
                    </button>
                    <button
                      onClick={() => setDel(true)}
                      className="deleate"
                      type="button"
                    >
                      <i title="Delete" className="bx bx-trash"></i>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>Jhon Doe</td>
                  <td>email.@gmail.com</td>
                  <td>
                    <img src={userImage} alt="img" />
                  </td>

                  <td>India</td>
                  <td>Admin</td>
                  <td>
                    <button
                      onClick={() => setEdit(true)}
                      className="edit"
                      type="button"
                    >
                      <i title="Edit" className="bx bx-edit-alt"></i>
                    </button>
                    <button
                      onClick={() => setDel(true)}
                      className="deleate"
                      type="button"
                    >
                      <i title="Delete" className="bx bx-trash"></i>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>Jhon Doe</td>
                  <td>email.@gmail.com</td>
                  <td>
                    <img src={userImage} alt="img" />
                  </td>

                  <td>India</td>
                  <td>Admin</td>
                  <td>
                    <button
                      onClick={() => setEdit(true)}
                      className="edit"
                      type="button"
                    >
                      <i title="Edit" className="bx bx-edit-alt"></i>
                    </button>
                    <button
                      onClick={() => setDel(true)}
                      className="deleate"
                      type="button"
                    >
                      <i title="Delete" className="bx bx-trash"></i>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>Jhon Doe</td>
                  <td>email.@gmail.com</td>
                  <td>
                    <img src={userImage} alt="img" />
                  </td>

                  <td>India</td>
                  <td>Admin</td>
                  <td>
                    <button
                      onClick={() => setEdit(true)}
                      className="edit"
                      type="button"
                    >
                      <i title="Edit" className="bx bx-edit-alt"></i>
                    </button>
                    <button
                      onClick={() => setDel(true)}
                      className="deleate"
                      type="button"
                    >
                      <i title="Delete" className="bx bx-trash"></i>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>Jhon Doe</td>
                  <td>email.@gmail.com</td>
                  <td>
                    <img src={userImage} alt="img" />
                  </td>

                  <td>India</td>
                  <td>Admin</td>
                  <td>
                    <button
                      onClick={() => setEdit(true)}
                      className="edit"
                      type="button"
                    >
                      <i title="Edit" className="bx bx-edit-alt"></i>
                    </button>
                    <button
                      onClick={() => setDel(true)}
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

export default AddAdmin;
