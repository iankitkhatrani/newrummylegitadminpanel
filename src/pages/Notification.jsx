import AdminHeader from "../components/AdminHeader";
import "../assets/scss/Notification.scss";
import { NavLink } from "react-router-dom";

const Notification = () => {
  return (
    <div className="container">
      <AdminHeader />

      <div id="notification">
        <div className="bredcremp">
          <h4>Notifications</h4>
          <div className="page-title">
            <p className="active">Notifications</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <section>
          <ul className="notification-lists">

            <li>
              <h4>New Account Joined</h4>
              <h5>
                <span>11/08/2023</span> <span>10:00AM</span>
              </h5>

              <div className="user-list">
                <table>
                  <thead>
                    <tr>
                      <th>Profile</th>
                      <th>User ID</th>
                      <th>User Name</th>
                      <th>Mobile Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                          alt=""
                        />
                      </td>
                      <td className="td-name">#SK93453</td>

                      <td className="user-name">
                        <NavLink to="/userdetails">Jacob Hunter</NavLink>
                      </td>
                      <td>+91 60090 60060</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>

            <li>
              <h4>New Account Joined</h4>
              <h5>
                <span>11/08/2023</span> <span>10:00AM</span>
              </h5>

              <div className="user-list">
                <table>
                  <thead>
                    <tr>
                      <th>Profile</th>
                      <th>User ID</th>
                      <th>User Name</th>
                      <th>Mobile Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                          alt=""
                        />
                      </td>
                      <td className="td-name">#SK93453</td>

                      <td className="user-name">
                        <NavLink to="/userdetails">Jacob Hunter</NavLink>
                      </td>
                      <td>+91 60090 60060</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>

            <li>
              <h4>New Account Joined</h4>
              <h5>
                <span>11/08/2023</span> <span>10:00AM</span>
              </h5>

              <div className="user-list">
                <table>
                  <thead>
                    <tr>
                      <th>Profile</th>
                      <th>User ID</th>
                      <th>User Name</th>
                      <th>Mobile Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                          alt=""
                        />
                      </td>
                      <td className="td-name">#SK93453</td>

                      <td className="user-name">
                        <NavLink to="/userdetails">Jacob Hunter</NavLink>
                      </td>
                      <td>+91 60090 60060</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>

            <li>
              <h4>New Account Joined</h4>
              <h5>
                <span>11/08/2023</span> <span>10:00AM</span>
              </h5>

              <div className="user-list">
                <table>
                  <thead>
                    <tr>
                      <th>Profile</th>
                      <th>User ID</th>
                      <th>User Name</th>
                      <th>Mobile Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                          alt=""
                        />
                      </td>
                      <td className="td-name">#SK93453</td>

                      <td className="user-name">
                        <NavLink to="/userdetails">Jacob Hunter</NavLink>
                      </td>
                      <td>+91 60090 60060</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>


          </ul>
        </section>
      </div>
    </div>
  );
};

export default Notification;
