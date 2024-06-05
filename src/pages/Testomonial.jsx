import { useState } from "react";
import "../assets//scss/Game.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHeader from "../components/AdminHeader";

const Testomonial = () => {
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
        <div className="Xadd-testomonial">
          <div className="item">
            <h3>Add Game :</h3>
            <form>
              <div className="input">
                <label htmlFor="seat">Name and Address</label>
                <input type="text" placeholder="" />
              </div>

              <div className="input">
                <label htmlFor="seat">Prize Title</label>
                <input type="text" placeholder="" />
              </div>

              <div className="input">
                <label htmlFor="seat">Prize</label>
                <textarea name="" id="" cols="30" rows="6"></textarea>
              </div>

              <div className="input">
                <label htmlFor="seat">Prize</label>
                <input type="file" name="" id="" />
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
          <h4>Add Testomonial</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="pending-content">
          <div className="search-filter">
            <input type="text" placeholder="Search by title or others..." />

            <button onClick={() => setView(true)}>
              <i className="bx bx-folder-plus"></i> Add Testomonial
            </button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>SL No</th>
                  <th>Name</th>
                  <th>Prize Title</th>
                  <th>Message</th>
                  <th>Image</th>
                  <th>Created Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>66</td>
                  <td>Testomonial Name</td>
                  <td>Prize Title</td>
                  <td>
                    <div className="desc">Lorem ipsum dolor sit amet.</div>
                  </td>
                  <td>
                    {" "}
                    <img
                      className="banner-img"
                      src="https://www.sbsfin.com/wp-content/uploads/2015/12/banner-img-1.jpg"
                      alt="banner"
                    />
                  </td>

                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>

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
                  <td>66</td>
                  <td>Testomonial Name</td>
                  <td>Prize Title</td>
                  <td>
                    <div className="desc">Lorem ipsum dolor sit amet.</div>
                  </td>
                  <td>
                    {" "}
                    <img
                      className="banner-img"
                      src="https://www.sbsfin.com/wp-content/uploads/2015/12/banner-img-1.jpg"
                      alt="banner"
                    />
                  </td>

                  <td className="time">
                    <p>04/30/2024</p> <p>12:54:38 PM</p>
                  </td>

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

export default Testomonial;
