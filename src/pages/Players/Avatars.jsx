import { useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Avatars = () => {
  const [add, setAdd] = useState(false);
  const [item, setDelete] = useState(false);

  const notify = () => {
    toast("Action Accepted");
    setAdd(false);
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

      {add == true && (
        <div className="add-banner">
          <div className="item">
            <h4>Avatars</h4>

            <form>
              <div className="input">
                <label htmlFor="">Title</label>
                <input type="text" />
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
                <label htmlFor="">Image</label>
                <input type="file" />
              </div>

              <div className="btns">
                <button onClick={() => setAdd(false)} className="cancel">
                  Cancel
                </button>
                <button onClick={notify} className="add">
                  Add
                </button>
              </div>
            </form>
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

      <div id="game">
        <div className="bredcremp">
          <h4>Avatars</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="pending-content">
          <div className="search-filter right-item ">
            <button onClick={() => setAdd(true)}>Add Avtar</button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>Title</th>
                  <th>Gender</th>
                  <th>Image</th>
                  <th>Created Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Avtar Title</td>
                  <td>Male</td>
                  <td>
                    <img
                      className="banner-img"
                      src="https://www.sbsfin.com/wp-content/uploads/2015/12/banner-img-1.jpg"
                      alt="banner"
                    />
                  </td>
                  <td>
                    <p>12/02/2024</p> <p>08:01 AM</p>
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

export default Avatars;
