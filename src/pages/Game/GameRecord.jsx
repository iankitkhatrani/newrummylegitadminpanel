import "../../assets/scss/GameRecord.scss";
import AdminHeader from "../../components/AdminHeader";
const GameRecord = () => {
  return (
    <div className="container">
      <AdminHeader />

      <div id="game-record">
        <div className="bredcremp">
          <h4>Game Record</h4>

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

            <i title="Reset" className="bx bx-reset"></i>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>Serial Number</th>
                  <th>GameId</th>
                  <th>Game Play Type</th>
                  <th>Max Seat</th>
                  <th>Table Amount</th>
                  <th>Date Time</th>
                  <th>Entry Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="td-name">2830</td>
                  <td>pointrummy</td>
                  <td>2</td>
                  <td>0.68</td>
                  <td>
                    <p>04/20/2024</p> <p>12:21:58 PM</p>
                  </td>
                  <td>₹2000</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td className="td-name">2830</td>
                  <td>pointrummy</td>
                  <td>2</td>
                  <td>0.68</td>
                  <td>
                    <p>04/20/2024</p> <p>12:21:58 PM</p>
                  </td>
                  <td>₹2000</td>
                </tr>

                <tr>
                  <td>3</td>
                  <td className="td-name">2830</td>
                  <td>pointrummy</td>
                  <td>2</td>
                  <td>0.68</td>
                  <td>
                    <p>04/20/2024</p> <p>12:21:58 PM</p>
                  </td>
                  <td>₹2000</td>
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

export default GameRecord;
