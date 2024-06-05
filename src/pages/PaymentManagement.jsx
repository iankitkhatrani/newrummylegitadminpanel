import AdminHeader from "../components/AdminHeader";
import "../assets/scss/UserManagement.scss";
const PaymentManagement = () => {
  return (
    <div className="container">
      <AdminHeader />
      <div id="userMangement">
        <div className="bredcremp">
          <h4>Payment Management</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="management">
          <div className="search-filter">
            <input type="text" placeholder="Search by Game Id, Game Type, or others..." />

            <div className="date">
              <input type="date" name="" id="" />
            </div>

            <div className="date">
              <input type="date" name="" id="" />
            </div>

            <button>Reset</button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>Amount</th>
                  <th>Payment Status</th>
                  <th>Payment Gateway</th>
                  <th>Request Date</th>
                  <th>Auto Pay</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1002411519570181505</td>
                  <td>6627679777973f92fe30b349</td>
                  <td>username Patr</td>

                  <td>
                    <i className="bx bx-rupee"></i>200
                  </td>

                  <td>
                    <span className="active">Approved</span>
                  </td>
                  <td>paylotus</td>

                  <td>
                    <p>05/02/2024</p> <p>06:45:45 PM</p>
                  </td>

                  <td>Yes</td>

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
                  <td>1002411519570181505</td>
                  <td>6627679777973f92fe30b349</td>
                  <td>username Patr</td>

                  <td>
                    <i className="bx bx-rupee"></i>200
                  </td>

                  <td>
                    <span className="inactive">Not Approved</span>
                  </td>
                  <td>paylotus</td>

                  <td>
                    <p>05/02/2024</p> <p>06:45:45 PM</p>
                  </td>

                  <td>Yes</td>

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
                  <td>1002411519570181505</td>
                  <td>6627679777973f92fe30b349</td>
                  <td>username Patr</td>

                  <td>
                    <i className="bx bx-rupee"></i>200
                  </td>

                  <td>
                    <span className="active">Approved</span>
                  </td>
                  <td>paylotus</td>

                  <td>
                    <p>05/02/2024</p> <p>06:45:45 PM</p>
                  </td>

                  <td>Yes</td>

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
                  <td>1002411519570181505</td>
                  <td>6627679777973f92fe30b349</td>
                  <td>username Patr</td>

                  <td>
                    <i className="bx bx-rupee"></i>200
                  </td>

                  <td>
                    <span className="inactive">Not Approved</span>
                  </td>
                  <td>paylotus</td>

                  <td>
                    <p>05/02/2024</p> <p>06:45:45 PM</p>
                  </td>

                  <td>Yes</td>

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

export default PaymentManagement;
