import "../../assets/scss/Game.scss";
import AdminHeader from "../../components/AdminHeader";

const GameHistory = () => {
  return (
    <div className="container">
      <AdminHeader />

      <div id="game">
        <div className="bredcremp">
          <h4>Game History</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="pending-content">
          <div className="search-filter">
            <input type="text" placeholder="Search by Game Id, Game Type, or others..." />

            <div className="date">
              <input type="date" name="" id="" />
            </div>

            <div className="date">
              <input type="date" name="" id="" />
            </div>

            <button type="button">Reset</button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>Serial Number</th>
                  <th>Game Id</th>
                  <th>Game Play Type</th>
                  <th>Max Seat</th>
                  <th>Table Amount</th>
                  <th>Date Time</th>
                  <th>Entry Fee</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>0902</td>
                  <td>Pool Rummy</td>
                  <td>2</td>
                  <td>0.00</td>
                  <td>
                    <p>04/22/2024</p> <p>02:19:34 PM</p>{" "}
                  </td>
                  <td>
                    <i className="bx bx-rupee"></i>531.13
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
                  <td>2</td>
                  <td>0902</td>
                  <td>Pool Rummy</td>
                  <td>2</td>
                  <td>0.00</td>
                  <td>
                    <p>04/22/2024</p> <p>02:19:34 PM</p>{" "}
                  </td>
                  <td>
                    <i className="bx bx-rupee"></i>531.13
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
                  <td>3</td>
                  <td>0902</td>
                  <td>Pool Rummy</td>
                  <td>2</td>
                  <td>0.00</td>
                  <td>
                    <p>04/22/2024</p> <p>02:19:34 PM</p>{" "}
                  </td>
                  <td>
                    <i className="bx bx-rupee"></i>531.13
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

export default GameHistory;
