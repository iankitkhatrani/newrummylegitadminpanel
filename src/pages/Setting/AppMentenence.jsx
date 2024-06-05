import "../../assets/scss/Setting.scss";
import "../../assets/scss/KYCmangement.scss";
import AdminHeader from "../../components/AdminHeader";
import { useState } from "react";

const AppMentenence = () => {
  const [virsion, setVirsion] = useState(false);

  return (
    <div className="container">
      {virsion == true && (
        <div className="add-virsion">
          <div className="item">
            {/* <i className="bx bx-x cross-icon"></i> */}

            <form>
              <div className="input">
                <label htmlFor="android">Virsion Android</label>
                <input type="text" id="android" />
              </div>

              <div className="input">
                <label htmlFor="ios">Virsion IOS</label>
                <input type="text" id="ios" />
              </div>

              <div className="input">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description"></textarea>
              </div>

              <div className="input">
                <label htmlFor="force">Is Force</label>
                <select name="" id="force">
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                  <option value="">Option 3</option>
                </select>
              </div>

              <div className="btns">
                <button
                  onClick={() => setVirsion(false)}
                  className="cancel"
                  type="button"
                >
                  Cancel
                </button>
                <button className="add" type="button">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <AdminHeader />
      <div id="kyc-management">
        <div className="bredcremp">
          <h4>App Maintanence</h4>

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

            <div className="date">
              <input type="date" name="" id="" />
            </div>

            <div className="date">
              <input type="date" name="" id="" />
            </div>

            <button>Reset</button>
            <button onClick={() => setVirsion(true)}>Add</button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Version Android</th>
                  <th>Version IOS</th>
                  <th>Is Force</th>
                  <th>Created Date</th>
                  <th>Uploaded Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>4.4.0</td>
                  <td>4.2.0</td>

                  <td>True</td>
                  <td>
                    <p>04/24/2024</p> <p>04:26:14 PM</p>
                  </td>

                  <td>
                    <p>04/24/2024</p> <p>04:26:14 PM</p>
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
      ;
    </div>
  );
};

export default AppMentenence;
