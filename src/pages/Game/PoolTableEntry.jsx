import { useState } from "react";
import "../../assets/scss/Game.scss";
import AdminHeader from "../../components/AdminHeader";

const PoolTableEntry = () => {
  const [view, setView] = useState(false);
  return (
    <div className="container">
      <AdminHeader />

      {view == true && (
        <div className="add-game">
          <div className="item">
            <h3>Edit Deal Table Informations :</h3>
            <form>
              <div className="input">
                <label htmlFor="name">Table Name</label>
                <input type="text" id="name" placeholder="Table Name" />
              </div>

              <div className="input">
                <label htmlFor="commission">Commission</label>
                <input id="commission" type="text" placeholder="Table Name" />
              </div>

              <div className="input">
                <label htmlFor="fee">Entry Fee</label>
                <input type="text" placeholder="Table Name" id="fee" />
              </div>

              <div className="input">
                <label htmlFor="seat">Max Seat</label>
                <input type="text" id="seat" placeholder="Table Name" />
              </div>

              <div className="status">
                <div className="active">
                  <input type="radio" name="active" id="active" />
                  <p>Active</p>
                </div>
                <div className="active">
                  <input type="radio" name="active" id="active" />
                  <p>Inactive </p>
                </div>
              </div>

              <div className="btns">
                <button
                  onClick={() => setView(false)}
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

      <div id="game">
        <div className="bredcremp">
          <h4>Pool Table Entry</h4>

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

            <button onClick={() => setView(true)}>
              <i className="bx bx-folder-plus"></i> Add Pool Table Entry
            </button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>Game Id</th>
                  <th>Game Play Type</th>
                  <th>Table Name</th>
                  <th>Entry Fee</th>
                  <th>Max Seat</th>
                  <th>Commission</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6622af2b99d69c46a449f42b</td>
                  <td>pointrummy</td>
                  <td>Point</td>
                  <td>0.01</td>
                  <td>2</td>
                  <td>15</td>
                  <td>Active</td>

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
                  <td>6622af2b99d69c46a449f42b</td>
                  <td>pointrummy</td>
                  <td>Point</td>
                  <td>0.01</td>
                  <td>2</td>
                  <td>15</td>
                  <td>Active</td>

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
                  <td>6622af2b99d69c46a449f42b</td>
                  <td>pointrummy</td>
                  <td>Point</td>
                  <td>0.01</td>
                  <td>2</td>
                  <td>15</td>
                  <td>Active</td>

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

export default PoolTableEntry;
