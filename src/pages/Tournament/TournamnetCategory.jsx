import { useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TournamnetCategory = () => {
  const [add, setAdd] = useState(false);
  const [item, setDelete] = useState(false);

  const notify = () => {
    toast("Item Added");
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
            <h4>Add Tournament Category</h4>

            <form>
              <div className="input">
                <label htmlFor="">Tournament Category Nanme</label>
                <input type="text" />
              </div>

              <div className="input">
                <label htmlFor="">
                  Image (Please Select Images Size 100px x 100px)
                </label>
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
          <h4>Tournament Category</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="pending-content">
          <div className="search-filter">
            <input type="text" placeholder="Banner title" />
            <button>Search</button>
            <button onClick={() => setAdd(true)}>Add</button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>Tournament Category</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>002</td>
                  <td>Tournament Category</td>
                  <td>
                    <img
                      className="banner-img"
                      src="https://www.sbsfin.com/wp-content/uploads/2015/12/banner-img-1.jpg"
                      alt="banner"
                    />
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

                <tr>
                  <td>002</td>
                  <td>Tournament Category</td>
                  <td>
                    <img
                      className="banner-img"
                      src="https://www.sbsfin.com/wp-content/uploads/2015/12/banner-img-1.jpg"
                      alt="banner"
                    />
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

                <tr>
                  <td>002</td>
                  <td>Tournament Category</td>
                  <td>
                    <img
                      className="banner-img"
                      src="https://www.sbsfin.com/wp-content/uploads/2015/12/banner-img-1.jpg"
                      alt="banner"
                    />
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

export default TournamnetCategory;
