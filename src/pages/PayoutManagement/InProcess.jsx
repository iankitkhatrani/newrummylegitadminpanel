import AdminHeader from "../../components/AdminHeader";

const InProcess = () => {
  return (
    <div className="container">
      <AdminHeader />
      <div id="userMangement">
        <div className="bredcremp">
          <h4>Request Processing</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="management">
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
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>Amount</th>
                  <th>Account Number</th>
                  <th>IFSC Code</th>
                  <th>Payment Mode</th>
                  <th>Payment Status</th>
                  <th>Request Date</th>
                  <th>Auto Pay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1002411519570181505</td>
                  <td>6627679777973f92fe30b349</td>
                  <td>User Name</td>

                  <td>
                    <i className="bx bx-rupee"></i>200
                  </td>
                  <td>309016714746</td>

                  <td>RATN0000383</td>

                  <td>IMPS</td>

                  <td>
                    <span className="inactive">Pending</span>
                  </td>

                  <td>
                    <p>05/02/2024</p> <p>06:45:45 PM</p>
                  </td>

                  <td>Yes</td>
                </tr>

                <tr>
                  <td>1002411519570181505</td>
                  <td>6627679777973f92fe30b349</td>
                  <td>User Name</td>

                  <td>
                    <i className="bx bx-rupee"></i>200
                  </td>
                  <td>309016714746</td>

                  <td>RATN0000383</td>

                  <td>IMPS</td>

                  <td>
                    <span className="inactive">Pending</span>
                  </td>

                  <td>
                    <p>05/02/2024</p> <p>06:45:45 PM</p>
                  </td>

                  <td>Yes</td>
                </tr>


                <tr>
                  <td>1002411519570181505</td>
                  <td>6627679777973f92fe30b349</td>
                  <td>User Name</td>

                  <td>
                    <i className="bx bx-rupee"></i>200
                  </td>
                  <td>309016714746</td>

                  <td>RATN0000383</td>

                  <td>IMPS</td>

                  <td>
                    <span className="inactive">Pending</span>
                  </td>

                  <td>
                    <p>05/02/2024</p> <p>06:45:45 PM</p>
                  </td>

                  <td>Yes</td>
                </tr>


                <tr>
                  <td>1002411519570181505</td>
                  <td>6627679777973f92fe30b349</td>
                  <td>User Name</td>

                  <td>
                    <i className="bx bx-rupee"></i>200
                  </td>
                  <td>309016714746</td>

                  <td>RATN0000383</td>

                  <td>IMPS</td>

                  <td>
                    <span className="inactive">Pending</span>
                  </td>

                  <td>
                    <p>05/02/2024</p> <p>06:45:45 PM</p>
                  </td>

                  <td>Yes</td>
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

export default InProcess;
