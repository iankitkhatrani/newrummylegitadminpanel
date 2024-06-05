import { useState } from "react";
import "../assets/scss/Dashboard.scss";
import AdminHeader from "../components/AdminHeader";
import { NavLink } from "react-router-dom";

import userIcon from "../assets/images/user.png";
import banner from "../assets/images/profile-img.png";

const Dashboard = () => {
  const [user, setUser] = useState(1);

  return (
    <div className="container">
      <AdminHeader />

      <div id="dashboard">
        <div className="bredcremp">
          <h4>Dashboard</h4>
          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="home">
          <div className="home-left">
            <div className="profile">
              <div className="banner">
                <img src={banner} alt="img" className="banner-img" />
                <img src={userIcon} alt="profile-pic" className="profile-img" />
              </div>

              <div className="item">
                <div className="item-top">
                  <div className="blank"></div>

                  <div className="option">
                    <h4>125</h4>
                    <span>Projects</span>
                  </div>

                  <div className="option">
                    <h4>$1280,00</h4>
                    <span>Revenue</span>
                  </div>
                </div>

                <div className="item-bottom">
                  <div className="name">
                    <h4>Adam Kayen</h4>

                    <div className="button">
                      <span>Admin</span>
                      <button>
                        View profile <i className="bx bx-right-arrow-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="monthely-earning">
              <h4>Monthly Earning</h4>

              <div className="this-month">
                <div className="month-left">
                  <span>This month</span>
                  <h2>$34,252</h2>

                  <div className="top">
                    <span>
                      12% <i className="bx bx-up-arrow-alt"></i>{" "}
                      <span>From</span>
                    </span>
                    <p>previous period</p>
                  </div>

                  <button>
                    View More <i className="bx bx-right-arrow-alt"></i>
                  </button>
                </div>

                <div className="month-right">
                  <div className="progress-box">
                    <div
                      style={{ height: "80%" }}
                      className="progress-line ix"
                    ></div>
                    <div
                      style={{ height: "60%" }}
                      className="progress-line iix"
                    ></div>
                    <div
                      style={{ height: "30%" }}
                      className="progress-line ixx"
                    ></div>
                    <div
                      style={{ height: "90%" }}
                      className="progress-line iixx"
                    ></div>
                  </div>
                </div>
              </div>

              <p className="craft">
                We craft digital, graphic and dimensional thinking.
              </p>
            </div>

            <div className="social-source">
              <h4>Social Source</h4>

              <div className="facebook">
                <i className="bx bxl-facebook-circle"></i>

                <h5>
                  Facebook - <span>125 sales</span>
                </h5>
                <p>
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                  ut libero venenatis faucibus tincidunt.
                </p>
                <button type="button">
                  Learn more <i className="bx bx-chevron-right"></i>
                </button>
              </div>

              <div className="social-media">
                <div className="media-figure">
                  <i className="bx bxl-facebook-circle facebook-icon"></i>
                  <h5>Facebook</h5>
                  <span>232 Sales</span>
                </div>

                <div className="media-figure">
                  <i className="bx bxl-twitter twitter-icon"></i>
                  <h5>Twiteer</h5>
                  <span>344 Sales</span>
                </div>

                <div className="media-figure">
                  <i className="bx bxl-instagram instagram-icon"></i>
                  <h5>Instagram</h5>
                  <span>543 Sales</span>
                </div>
              </div>
            </div>
          </div>

          <div className="home-right">
            <div className="item-container">
              <div className="item-box">
                <span>Registerd Player</span>
                <div className="title">
                  <h4>11</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>Active</span>
                <div className="title">
                  <h4>345</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>Cash Games</span>
                <div className="title">
                  <h4>34</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>Practice Games</span>
                <div className="title">
                  <h4>35</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>Tournament</span>
                <div className="title">
                  <h4>345</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>Pending Withdraw Requests</span>
                <div className="title">
                  <h4>345</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>No Of Agents</span>
                <div className="title">
                  <h4>35</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>No Of Managers</span>
                <div className="title">
                  <h4>345</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>KYC Not Submitted</span>
                <div className="title">
                  <h4>345</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>KYC Pending Approval</span>
                <div className="title">
                  <h4>84</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>KYC Approved</span>
                <div className="title">
                  <h4>345</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>KYC Rejected</span>
                <div className="title">
                  <h4>345</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>Today Commission</span>
                <div className="title">
                  <h4>232</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>Manager Commission</span>
                <div className="title">
                  <h4>3543</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>Agent Commission</span>
                <div className="title">
                  <h4>3445</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>Live Players</span>
                <div className="title">
                  <h4>345</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>Available Withdraw Balance</span>
                <div className="title">
                  <h4>9905.00</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>

              <div className="item-box">
                <span>BCI</span>
                <div className="title">
                  <h4>8453</h4>
                  <i className="bx bx-copy-alt font-size-24"></i>
                </div>
              </div>
            </div>

            <div className="time-dashboard">
              <div className="header">
                <h4>User Visited</h4>

                <div className="button">
                  <div className="checked">
                    <button
                      onClick={() => setUser(1)}
                      className={`${user == 1 && "active"}`}
                    >
                      Week
                    </button>
                  </div>
                  <div className="checked">
                    <button
                      onClick={() => setUser(2)}
                      className={`${user == 2 && "active"}`}
                    >
                      Month
                    </button>
                  </div>
                  <div className="checked">
                    <button
                      onClick={() => setUser(3)}
                      className={`${user == 3 && "active"}`}
                    >
                      Year
                    </button>
                  </div>
                </div>
              </div>

              <div className="box-container">
                {user == 1 && (
                  <div className="progress-bar">
                    <ul>
                      <li style={{ height: "90%" }}></li>
                      <li style={{ height: "70%" }}></li>
                      <li style={{ height: "80%" }}></li>
                      <li style={{ height: "30%" }}></li>
                      <li style={{ height: "50%" }}></li>
                      <li style={{ height: "90%" }}></li>
                      <li style={{ height: "55%" }}></li>
                    </ul>

                    <div className="month-names">
                      <span>Sunday</span>
                      <span>Monday</span>
                      <span>Tuesday</span>
                      <span>Wednessday</span>
                      <span>Thursday</span>
                      <span>Friday</span>
                      <span>Saturday</span>
                    </div>

                    <div className="progress-number">
                      <ul className="user-rates">
                        <li>
                          123 <div className="line"></div>
                        </li>
                        <li>
                          109 <div className="line"></div>
                        </li>
                        <li>
                          85 <div className="line"></div>
                        </li>
                        <li>
                          65 <div className="line"></div>
                        </li>
                        <li>
                          45 <div className="line"></div>
                        </li>
                        <li>
                          35 <div className="line"></div>
                        </li>
                        <li>
                          0 <div className="line"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {user == 2 && (
                  <div className="progress-bar">
                    <ul>
                      <li style={{ height: "90%" }}></li>
                      <li style={{ height: "70%" }}></li>
                      <li style={{ height: "80%" }}></li>
                      <li style={{ height: "30%" }}></li>
                      <li style={{ height: "25%" }}></li>
                      <li style={{ height: "10%" }}></li>
                    </ul>

                    <div className="month-names">
                      <span>1 - 5</span>
                      <span>6 - 10</span>
                      <span>11 - 15</span>
                      <span>16 - 20</span>
                      <span>21 - 25</span>
                      <span>26 - 31</span>
                    </div>

                    <div className="progress-number">
                      <ul className="user-rates">
                        <li>
                          123 <div className="line"></div>
                        </li>
                        <li>
                          109 <div className="line"></div>
                        </li>
                        <li>
                          85 <div className="line"></div>
                        </li>
                        <li>
                          65 <div className="line"></div>
                        </li>
                        <li>
                          45 <div className="line"></div>
                        </li>
                        <li>
                          35 <div className="line"></div>
                        </li>
                        <li>
                          0 <div className="line"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {user == 3 && (
                  <div className="progress-bar">
                    <ul>
                      <li style={{ height: "90%" }}></li>
                      <li style={{ height: "70%" }}></li>
                      <li style={{ height: "80%" }}></li>
                      <li style={{ height: "30%" }}></li>
                      <li style={{ height: "50%" }}></li>
                      <li style={{ height: "90%" }}></li>
                      <li style={{ height: "55%" }}></li>
                      <li style={{ height: "64%" }}></li>
                      <li style={{ height: "78%" }}></li>
                      <li style={{ height: "30%" }}></li>
                      <li style={{ height: "55%" }}></li>
                      <li style={{ height: "89%" }}></li>
                    </ul>

                    <div className="month-names">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>April</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                      <span>Oct</span>
                      <span>Nov</span>
                      <span>Dec</span>
                    </div>

                    <div className="progress-number">
                      <ul className="user-rates">
                        <li>
                          123 <div className="line"></div>
                        </li>
                        <li>
                          109 <div className="line"></div>
                        </li>
                        <li>
                          85 <div className="line"></div>
                        </li>
                        <li>
                          65 <div className="line"></div>
                        </li>
                        <li>
                          45 <div className="line"></div>
                        </li>
                        <li>
                          35 <div className="line"></div>
                        </li>
                        <li>
                          0 <div className="line"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="game-history">
            <h4>Game Playing History</h4>

            <div className="box">
              <div className="game-left">
                <div className="top">
                  <div className="item">
                    <h4>Games</h4>

                    <div className="bottom">
                      <div className="options">201 Pool Rummy - 89%</div>
                      <div className="options">101 Pool Rummy - 40%</div>
                      <div className="options">Deals Rummy - 40%</div>
                      <div className="options">Points Rummy - 36%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="game-right">
                <div className="time-dashboard">
                  <div className="header">
                    <h4>Regesterd Players In Last 6 Months</h4>
                    <div className="button"></div>
                  </div>

                  <div className="box-container">
                    <div className="progress-bar">
                      <ul>
                        <li style={{ height: "90%" }}></li>
                        <li style={{ height: "70%" }}></li>
                        <li style={{ height: "80%" }}></li>
                        <li style={{ height: "30%" }}></li>
                        <li style={{ height: "50%" }}></li>
                        <li style={{ height: "90%" }}></li>
                      </ul>

                      <div className="month-names">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>April</span>
                        <span>May</span>
                        <span>Jun</span>
                      </div>

                      <div className="progress-number">
                        <ul className="user-rates">
                          <li>
                            123 <div className="line"></div>
                          </li>
                          <li>
                            109 <div className="line"></div>
                          </li>
                          <li>
                            85 <div className="line"></div>
                          </li>
                          <li>
                            65 <div className="line"></div>
                          </li>
                          <li>
                            45 <div className="line"></div>
                          </li>
                          <li>
                            35 <div className="line"></div>
                          </li>
                          <li>
                            0 <div className="line"></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="latest-transtions">
            <h4>Recent User List</h4>

            <div className="transtion-board">
              <table>
                <thead>
                  <tr>
                    <th>SL No.</th>
                    <th>User Name</th>
                    <th>Created Time</th>
                    <th>View Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td-name">#SK93453</td>
                    <td>Jacob Hunter</td>
                    <td>04 Oct, 2019</td>
                    
                    <td>
                      <NavLink to="/userdetails">
                        <button type="button">View Details</button>
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="latest-transtions">
            <h4>State Wise User List</h4>

            <div className="transtion-board">
              <table>
                <thead>
                  <tr>
                    <th>Serial Number</th>
                    <th>State Name</th>
                    <th>No Of Users</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td-name">#SK93453</td>
                    <td>West Bengal</td>
                    <td>23</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
