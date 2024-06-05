import AdminHeader from "../components/AdminHeader";
import "../assets/scss/Game.scss";
import { NavLink } from "react-router-dom";

const RefferailDetails = () => {
  return (
    <div className="container">
      <AdminHeader />

      <div id="game">
        <div className="bredcremp">
          <h4>Refferail Details</h4>

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

            <button>Reset</button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>Serial Number</th>
                  <th>User Name</th>
                  <th>User ID</th>
                  <th>Earn Bonus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <NavLink to="/userdetails">User Name</NavLink>
                  </td>
                  <td>avcdas243242d</td>

                  <td>0.00</td>
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

export default RefferailDetails;
