import { NavLink } from "react-router-dom";
import "../assets/scss/AdminNavigation.scss";
import { useState } from "react";

const AdminNavigation = () => {
  const [navItem, setNavItem] = useState();

  const handelMenu = (item) => {
    setNavItem(item);
  };

  console.log(navItem);

  return (
    <div>
      <div className="none-fullview" id="side-barview">
        <div className="logo">
          <h2>Logo</h2>
          {/* <i className="bx bx-menu"></i> */}
        </div>

        <ul id="nav-list">
          <li className="listss">
            <NavLink to="/">
              <i title="Home" className="bx bx-home-alt"></i>
            </NavLink>
          </li>

          <li className="listss">
            <NavLink to="/">
              <i title="User Management" className="bx bx-user"></i>
            </NavLink>
          </li>

          <li className="listss">
            <NavLink to="/">
              <i title="KYC Management" className="bx bx-notepad"></i>
            </NavLink>

            <div className="sub-lists">
              <div className="item">
                <div className="links">
                  <NavLink>Pending</NavLink>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div id="admin-navigation">
        <div className="Logo">
          <NavLink to="/">
            <h2>Logo</h2>
          </NavLink>

          {/* <i className="bx bx-menu"></i> */}
        </div>

        <div className="menu">
          <small>MENU</small>

          <NavLink to="/">
            <div className="options">
              <div className="links">
                <div className="title">
                  <i className="bx bx-home-circle"></i>
                  <span>Dashboard</span>
                </div>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="menu">
          <small>MENU</small>

          <NavLink to="/usermanagement">
            <div className="options">
              <div className="links">
                <div className="title">
                  <i className="bx bxs-user-detail"></i>
                  <span>User Management</span>
                </div>
              </div>
            </div>
          </NavLink>

          <div className="options">
            <div className="item">
              <div onClick={() => handelMenu(1)} className="links">
                <div className="title">
                  <i className="bx bx-notepad"></i>
                  <span>Kyc Management</span>
                </div>
                <i className="bx bx-chevron-down"></i>
              </div>
            </div>

            {navItem == 1 && (
              <div className="sublinks">
                <ul>
                  <NavLink to="/pending">
                    <li className="link">
                      <span>Pending</span>
                    </li>
                  </NavLink>

                  <NavLink to="/approved">
                    <li className="link">
                      <span>Approved</span>
                    </li>
                  </NavLink>

                  <NavLink to="/rejected">
                    <li className="link">
                      <span>Rejected</span>
                    </li>
                  </NavLink>
                </ul>
              </div>
            )}
          </div>

          <div className="options">
            <div className="item">
              <div onClick={() => handelMenu(2)} className="links">
                <div className="title">
                  <i className="bx bxs-user"></i>
                  <span>Players</span>
                </div>

                <i className="bx bx-chevron-down"></i>
              </div>
            </div>

            {navItem == 2 && (
              <div className="sublinks">
                <ul>
                  <NavLink to="/regesterdplayers">
                    <li className="link">
                      <span>Regesterd Players</span>
                    </li>
                  </NavLink>

                  <NavLink to="/avatars">
                    <li className="link">
                      <span>Avatars</span>
                    </li>
                  </NavLink>

                  <NavLink to="/promotionalmessage">
                    <li className="link">
                      <span>Promotional Messages</span>
                    </li>
                  </NavLink>

                  <NavLink to="/deposittransition">
                    <li className="link">
                      <span>Deposit Transactions</span>
                    </li>
                  </NavLink>

                  <NavLink to="/withdrawalrequests">
                    <li className="link">
                      <span>Withdrawal Request</span>
                    </li>
                  </NavLink>
                </ul>
              </div>
            )}
          </div>

          <div className="options">
            <div className="item">
              <div onClick={() => setNavItem(3)} className="links">
                <div className="title">
                  <i className="bx bx-credit-card"></i>
                  <span>Bank Management</span>
                </div>
                <i className="bx bx-chevron-down"></i>
              </div>
            </div>
            {navItem == 3 && (
              <div className="sublinks">
                <ul>
                  <NavLink to="/newaccount">
                    <li className="link">
                      <span>New Account</span>
                    </li>
                  </NavLink>

                  <NavLink to="/bankapproved">
                    <li className="link">
                      <span>Approved</span>
                    </li>
                  </NavLink>

                  <NavLink to="/bankrejected">
                    <li className="link">
                      <span>Rejected</span>
                    </li>
                  </NavLink>
                </ul>
              </div>
            )}
          </div>

          <div className="options">
            <div className="item">
              <div onClick={() => setNavItem(4)} className="links">
                <div className="title">
                  <i className="bx bx-dice-6"></i>
                  <span>Game</span>
                </div>
                <i className="bx bx-chevron-down"></i>
              </div>
            </div>

            {navItem == 4 && (
              <div className="sublinks">
                <ul>
                  <NavLink to="/addgame">
                    <li className="link">
                      <span>Add Game</span>
                    </li>
                  </NavLink>

                  <NavLink to="/gameplaydata">
                    <li className="link">
                      <span>Gameplay Data</span>
                    </li>
                  </NavLink>

                  <NavLink to="/gamehistory">
                    <li className="link">
                      <span>Game History</span>
                    </li>
                  </NavLink>

                  <NavLink to="/gamerecord">
                    <li className="link">
                      <span>Game Record</span>
                    </li>
                  </NavLink>

                  <NavLink to="/pointtable">
                    <li className="link">
                      <span>Point Table Entry</span>
                    </li>
                  </NavLink>

                  <NavLink to="/dealtable">
                    <li className="link">
                      <span>Deal Table Entry</span>
                    </li>
                  </NavLink>

                  <NavLink to="/pooltableentry">
                    <li className="link">
                      <span>Pool Table Entry</span>
                    </li>
                  </NavLink>
                </ul>
              </div>
            )}
          </div>

          <div className="options">
            <div className="item">
              <div onClick={() => setNavItem(5)} className="links">
                <div className="title">
                  <i className="bx bxs-notepad"></i>
                  <span>CMS Pages</span>
                </div>

                <i className="bx bx-chevron-down"></i>
              </div>
            </div>

            {navItem == 5 && (
              <div className="sublinks">
                <ul>
                  <NavLink to="/responsibleplay">
                    <li className="link">
                      <span>Responsible Play</span>
                    </li>
                  </NavLink>

                  <NavLink to="/aboutus">
                    <li className="link">
                      <span>About Us</span>
                    </li>
                  </NavLink>
                  <NavLink to="/refferail">
                    <li className="link">
                      <span>Referral</span>
                    </li>
                  </NavLink>
                  <NavLink to="/privicypolicy">
                    <li className="link">
                      <span>Privicy Policy</span>
                    </li>
                  </NavLink>
                  <NavLink to="/refundypolicy">
                    <li className="link">
                      <span>Refund Policy</span>
                    </li>
                  </NavLink>

                  <NavLink to="/termsservice">
                    <li className="link">
                      <span>Terms Of Service</span>
                    </li>
                  </NavLink>

                  <NavLink to="/leagality">
                    <li className="link">
                      <span>Legality</span>
                    </li>
                  </NavLink>

                  <NavLink to="/faqcategory">
                    <li className="link">
                      <span>FAQ Categories</span>
                    </li>
                  </NavLink>

                  <NavLink to="/faqs">
                    <li className="link">
                      <span>FAQs</span>
                    </li>
                  </NavLink>

                  <NavLink to="/withdrawcharges">
                    <li className="link">
                      <span>Withdraw Charges</span>
                    </li>
                  </NavLink>

                  <NavLink to="/info">
                    <li className="link">
                      <span>Info</span>
                    </li>
                  </NavLink>

                  <NavLink to="/addcms">
                    <li className="link">
                      <span>Add CMS</span>
                    </li>
                  </NavLink>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="menu">
          {/* <small>Pages</small> */}

          <div className="options">
            <div className="item">
              <div onClick={() => setNavItem(6)} className="links">
                <div className="title">
                  <i className="bx bx-wallet"></i>
                  <span>Payout Management</span>
                </div>

                <i className="bx bx-chevron-down"></i>
              </div>
            </div>
            {navItem == 6 && (
              <div className="sublinks">
                <ul>
                  <NavLink to="/withdrawrequest">
                    <li className="link">
                      <span>Withdraw Request</span>
                    </li>
                  </NavLink>
                  <NavLink to="/inprocess">
                    <li className="link">
                      <span>In Process</span>
                    </li>
                  </NavLink>
                  <NavLink to="/processrequest">
                    <li className="link">
                      <span>Processed Request</span>
                    </li>
                  </NavLink>
                </ul>
              </div>
            )}
          </div>

          <div className="options">
            <div className="item">
              <div onClick={() => setNavItem(7)} className="links">
                <div className="title">
                  <i className="bx bx-money-withdraw"></i>
                  <span>Referral</span>
                </div>

                <i className="bx bx-chevron-down"></i>
              </div>
            </div>
            {navItem == 7 && (
              <div className="sublinks">
                <ul>
                  <NavLink to="/referralmanagement">
                    <li className="link">
                      <span>Referral Management</span>
                    </li>
                  </NavLink>
                  <NavLink to="/affalitemanagement">
                    <li className="link">
                      <span>Affilate Management</span>
                    </li>
                  </NavLink>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="menu">
          {/* <small>components</small> */}

          <div className="options">
            <div className="item">
              <div onClick={() => setNavItem(8)} className="links">
                <div className="title">
                  <i className="bx bx-user-circle"></i>
                  <span>Admin / Staff</span>
                </div>
                <i className="bx bx-chevron-down"></i>
              </div>
            </div>

            {navItem == 8 && (
              <div className="sublinks">
                <ul>
                  <NavLink to="/addadmin">
                    <li className="link">
                      <span>Admin</span>
                    </li>
                  </NavLink>

                  <NavLink to="/paymentmanagement">
                    <li className="link">
                      <span>Paymet Management</span>
                    </li>
                  </NavLink>

                  <NavLink to="/transtionmanagement">
                    <li className="link">
                      <span>Transaction Management</span>
                    </li>
                  </NavLink>

                  <NavLink to="/socialmanagement">
                    <li className="link">
                      <span>Socail Management</span>
                    </li>
                  </NavLink>

                  <NavLink to="/bannerpageslider">
                    <li className="link">
                      <span>Banner/ Page Slider</span>
                    </li>
                  </NavLink>

                  <NavLink to="/bonus">
                    <li className="link">
                      <span>Bonus System</span>
                    </li>
                  </NavLink>

                  <NavLink to="/chat">
                    <li className="link">
                      <span>Chat</span>
                    </li>
                  </NavLink>

                  <NavLink to="/clubtype">
                    <li className="link">
                      <span>Club Type</span>
                    </li>
                  </NavLink>

                  <NavLink to="/testomonial">
                    <li className="link">
                      <span>Testomonial</span>
                    </li>
                  </NavLink>

                  <NavLink to="/withdrawaladmin">
                    <li className="link">
                      <span>Withdrawal Admin</span>
                    </li>
                  </NavLink>
                </ul>
              </div>
            )}
          </div>

          <div className="options">
            <div className="item">
              <div onClick={() => setNavItem(9)} className="links">
                <div className="title">
                  <i className="bx bx-cricket-ball"></i>
                  <span>Tournament</span>
                </div>

                <i className="bx bx-chevron-down"></i>
              </div>
            </div>
            {navItem == 9 && (
              <div className="sublinks">
                <ul>
                  <NavLink to="/tournamentcategory">
                    <li className="link">
                      <span>Tournament Category</span>
                    </li>
                  </NavLink>

                  <NavLink to="/tournament">
                    <li className="link">
                      <span>Tournaments</span>
                    </li>
                  </NavLink>
                </ul>
              </div>
            )}
          </div>

          <div className="options">
            <div className="item">
              <div onClick={() => setNavItem(10)} className="links">
                <div className="title">
                  <i className="bx bx-bell"></i>
                  <span>Notification </span>
                </div>

                <i className="bx bx-chevron-down"></i>
              </div>
            </div>
            {navItem == 10 && (
              <div className="sublinks">
                <ul>
                  <NavLink to="/pushnotification">
                    <li className="link">
                      <span>Push Notification</span>
                    </li>
                  </NavLink>

                  <NavLink to="/sliderNotification">
                    <li className="link">
                      <span>Slider Notification</span>
                    </li>
                  </NavLink>
                </ul>
              </div>
            )}
          </div>

          <div className="options">
            <div className="item">
              <div onClick={() => setNavItem(11)} className="links">
                <div className="title">
                  <i className="bx bx-cog"></i>
                  <span>Setting</span>
                </div>

                <i className="bx bx-chevron-down"></i>
              </div>
            </div>
            {navItem == 11 && (
              <div className="sublinks">
                <ul>
                  <NavLink to="/appmaintenance">
                    <li className="link">
                      <span>App Maintenance</span>
                    </li>
                  </NavLink>
                  <NavLink to="/botconfig">
                    <li className="link">
                      <span>Bot Configuration</span>
                    </li>
                  </NavLink>
                  <NavLink to="/botmanagement">
                    <li className="link">
                      <span>Bot Management</span>
                    </li>
                  </NavLink>

                  <NavLink to="/globalconfig">
                    <li className="link">
                      <span>Global Configuration</span>
                    </li>
                  </NavLink>

                  <NavLink to="/statemangement">
                    <li className="link">
                      <span>State Management</span>
                    </li>
                  </NavLink>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavigation;
