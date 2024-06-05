import { useState } from "react";
import "../assets/scss/UserDetails.scss";
import AdminHeader from "./AdminHeader";
import userImage from "../assets/images/user.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { NavLink } from "react-router-dom";

const UserDetails = () => {
  const [view, setView] = useState(1);
  const [money, setMoney] = useState(false);
  const [deductmoney, setdeductmoney] = useState(false);
  const [editKyc, setEditKyc] = useState(false);

  const notify = () => {
    toast("Action Accepted");
    setMoney(false);
    setdeductmoney(false);
    setEditKyc(false);
  };

  return (
    <>
      <div className="container">
        <ToastContainer
          autoClose={2000}
          className="toast-container"
          toastClassName="dark-toast"
        />

        <AdminHeader />

        {money == true && (
          <div className="money-pop">
            <div className="item">
              <h4>Add Money</h4>

              <form action="">
                <div className="input">
                  <label htmlFor="">Amount</label>
                  <input type="number" name="" id="" />
                </div>

                <div className="input">
                  <label htmlFor="">Txn Mode</label>
                  <select name="" id="">
                    <option value="">Select Options</option>
                    <option value="">Main Wallet</option>
                    <option value="">Bonus Wallet</option>
                    <option value="">Win Wallet</option>
                  </select>
                </div>

                <div className="input">
                  <label htmlFor="">Remarks</label>
                  <textarea name="" id="" cols="30" rows="4"></textarea>
                </div>

                <div className="input">
                  <label htmlFor="">Amount</label>
                  <select name="" id="">
                    <option value="">Select Options</option>
                    <option value="">Main Wallet</option>
                    <option value="">Bonus Wallet</option>
                    <option value="">Win Wallet</option>
                  </select>
                </div>

                <div className="btns">
                  <button
                    onClick={() => setMoney(false)}
                    type="button"
                    className="cancel"
                  >
                    Close
                  </button>
                  <button onClick={notify} type="button" className="add">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {deductmoney == true && (
          <div className="money-pop">
            <div className="item">
              <h4>Deduct Money</h4>

              <form action="">
                <div className="input">
                  <label htmlFor="">Amount</label>
                  <input type="number" name="" id="" />
                </div>

                <div className="input">
                  <label htmlFor="">Remarks</label>
                  <textarea name="" id="" cols="30" rows="4"></textarea>
                </div>

                <div className="input">
                  <label htmlFor="">Amount</label>
                  <select name="" id="">
                    <option value="">Select Options</option>
                    <option value="">Main Wallet</option>
                    <option value="">Bonus Wallet</option>
                    <option value="">Win Wallet</option>
                  </select>
                </div>

                <div className="btns">
                  <button
                    onClick={() => setdeductmoney(false)}
                    type="button"
                    className="cancel"
                  >
                    Close
                  </button>
                  <button onClick={notify} type="button" className="add">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {editKyc == true && (
          <div className="edit-kyc">
            <div className="kyc-box">
              <div className="box">
                <div className="input">
                  <label htmlFor="">Name</label>
                  <input type="text" />
                </div>

                <div className="input">
                  <label htmlFor="">Email</label>
                  <input type="text" />
                </div>

                <div className="input">
                  <label htmlFor="">Phone Number</label>
                  <input type="text" />
                </div>

                <div className="input">
                  <label htmlFor="">DOB</label>
                  <input type="date" />
                </div>

                <div className="input">
                  <label htmlFor="">Pin Code</label>
                  <input type="text" />
                </div>

                <div className="input">
                  <label htmlFor="">PAN Name</label>
                  <input type="text" />
                </div>

                <div className="input">
                  <label htmlFor="">PAN Card Image</label>
                  <input type="file" />
                </div>

                <div className="input">
                  <label htmlFor="">Aadhaar Name</label>
                  <input type="text" />
                </div>

                <div className="input">
                  <label htmlFor="">Aadhar Card Image</label>
                  <input type="file" />
                </div>
              </div>

              <div className="button-box">
                <button
                  onClick={() => setEditKyc(false)}
                  className="cancel"
                  type="button"
                >
                  Cancel
                </button>
                <button onClick={notify} className="add" type="button">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        <div id="user-details">
          <div className="bredcremp">
            <h4>User Details</h4>

            <div className="page-title">
              <p className="active">Dashboard</p>
              <p className="not">/ Default</p>
            </div>
          </div>

          <section>
            <ul className="bar">
              <li
                onClick={() => setView(1)}
                className={`${view == 1 && "active"}  userinfo`}
              >
                User Information
              </li>
              <li
                onClick={() => setView(2)}
                className={`${view == 2 && "active"}  userinfo`}
              >
                KYC Details
              </li>
              <li
                onClick={() => setView(3)}
                className={`${view == 3 && "active"}  userinfo`}
              >
                Bank Details
              </li>
              <li
                onClick={() => setView(4)}
                className={`${view == 4 && "active"}  userinfo`}
              >
                Payments
              </li>
              <li
                onClick={() => setView(5)}
                className={`${view == 5 && "active"}  userinfo`}
              >
                Device Info
              </li>
              <li
                onClick={() => setView(6)}
                className={`${view == 6 && "active"}  userinfo`}
              >
                Location Info
              </li>

              <li
                onClick={() => setView(7)}
                className={`${view == 7 && "active"}  userinfo`}
              >
                Game Details
              </li>
            </ul>

            {view == 1 && (
              <div className="info">
                <div className="profile">
                  <div className="profile-det">
                    <div className="item">
                      <div className="banner">
                        <img src={userImage} alt="" />
                      </div>
                      <div className="box">
                        <div className="list">
                          {" "}
                          <span>Name</span>
                          <p>User Name</p>
                        </div>

                        <div className="list">
                          {" "}
                          <span>User ID</span>
                          <p>USER_0000000226</p>
                        </div>

                         
                          <button type="button">Deactivate</button>
                       

                        
                        
                          <button type="button">Delete Device History</button>
                      
                      </div>
                    </div>
                  </div>

                  <div className="profile-right">
                    <h4>User Details</h4>

                    <div className="user-bnk">
                      <div className="items">
                        <span>Device Name</span>
                        <p>POCO X5 Pro 5G</p>
                      </div>

                      <div className="items">
                        <span>Device Model</span>
                        <p>Xiaomi 22101320I</p>
                      </div>

                      <div className="items">
                        <span>Device Type</span>
                        <p>Android</p>
                      </div>

                      <div className="items">
                        <span>Processer Type</span>
                        <p>ARM64 FP ASIMD AES</p>
                      </div>

                      <div className="items">
                        <span>Processer Count</span>
                        <p>8</p>
                      </div>

                      <div className="items">
                        <span>Battry Percentage</span>
                        <p>0.2</p>
                      </div>

                      <div className="items">
                        <span>Processer Count</span>
                        <p>8</p>
                      </div>

                      <div className="items">
                        <span>Battry Percentage</span>
                        <p>0.2</p>
                      </div>

                      <div className="items">
                        <span>Battry Percentage</span>
                        <p>0.2</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="top">
                  <div className="card">
                    <h4>Pan Card Details</h4>

                    <div className="grid">
                      <div className="name">
                        <span>PAN Card Number</span>
                        <p>90090 90090</p>
                      </div>

                      <div className="name">
                        <span>Full Name</span>
                        <p>User Name</p>
                      </div>

                      <div className="name">
                        <span>Date Of Birth</span>
                        <p>19/02/2002</p>
                      </div>

                      <div className="name">
                        <span>Status</span>
                        <p className="active">Verified</p>
                      </div>
                    </div>
                  </div>

                  <div className="aadhar card ">
                    <h4>Aadhar card Details</h4>

                    <div className="grid">
                      <div className="name">
                        <span>Aadhar Number</span>
                        <p>90090 90090</p>
                      </div>

                      <div className="name">
                        <span>Full Name</span>
                        <p>User Name</p>
                      </div>

                      <div className="name">
                        <span>Date Of Birth</span>
                        <p>19/02/2002</p>
                      </div>

                      <div className="name">
                        <span>Address</span>
                        <p>19/02/2002</p>
                      </div>

                      <div className="name">
                        <span>Status</span>
                        <p className="active">Verified</p>
                      </div>
                    </div>
                  </div>

                  <div className="action">
                    <h4>Add Money</h4>

                    <div className="grid">
                      <div className="select">
                        <span>Txn Mode</span>
                        <select name="" id="">
                          <option>Select Mode</option>
                          <option value="">Refund</option>
                          <option value="">Bonus</option>
                          <option value="">Admin</option>
                          <option value="">Others</option>
                        </select>
                      </div>

                      <div className="select">
                        <span>Add To</span>
                        <select name="" id="">
                          <option>Select Mode</option>
                          <option value="">Main Wallet</option>
                          <option value="">Bonus Wallet</option>
                          <option value="">Win Wallet</option>
                        </select>
                      </div>
                    </div>

                    <div className="add">
                      <div className="add-money">
                        <span>Enter Deposit Amount</span>
                        <input type="text" placeholder="Enter Amount" />
                      </div>

                      <div className="btn">
                        <button type="button" onClick={() => setMoney(true)}>
                          Add Money
                        </button>
                        <button
                          type="button"
                          onClick={() => setdeductmoney(true)}
                          className="inactive"
                        >
                          Deduct Money
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="action">
                    <h4>Deduct Money</h4>

                    <div className="grid">
                      <div className="select">
                        <span>Txn Mode</span>
                        <select name="" id="">
                          <option>Select Mode</option>
                          <option value="">Refund</option>
                          <option value="">Bonus</option>
                          <option value="">Admin</option>
                          <option value="">Others</option>
                        </select>
                      </div>

                      <div className="select">
                        <span>Add To</span>
                        <select name="" id="">
                          <option>Select Mode</option>
                          <option value="">Main Wallet</option>
                          <option value="">Bonus Wallet</option>
                          <option value="">Win Wallet</option>
                        </select>
                      </div>
                    </div>

                    <div className="add">
                      <div className="add-money">
                        <span>Enter Deposit Amount</span>
                        <input type="text" placeholder="Enter Amount" />
                      </div>

                      <div className="btn">
                        <button
                          className="inactive"
                          type="button"
                          onClick={() => setMoney(true)}
                        >
                          Deduct Money
                        </button>
                        <button
                          type="button"
                          onClick={() => setdeductmoney(true)}
                          className="inactive"
                        >
                          Block
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {view == 2 && (
              <div>
                <div className="kyc-action">
                  <button onClick={() => setEditKyc(true)} type="button">
                    Edit KYC
                  </button>
                </div>

                <div className="kycdetails">
                  <div className="left">
                    <div className="user-profile">
                      <img src={userImage} alt="" />
                    </div>

                    <div className="name">
                      <div className="item">
                        <p>User Name</p>
                      </div>
                      <div className="item">
                        <span>Verrified</span>
                      </div>
                    </div>

                    <ul>
                      <li>
                        <div className="small">Email :</div>
                        <div className="data">username@gmail.com</div>
                      </li>

                      <li>
                        <div className="small">Mobile :</div>
                        <div className="data">+91 00000000</div>
                      </li>

                      <li>
                        <div className="small">Gender :</div>
                        <div className="data">Male</div>
                      </li>

                      <li>
                        <div className="small">DOB :</div>
                        <div className="data">20/07/1998</div>
                      </li>

                      <li>
                        <div className="small">PAN :</div>
                        <div className="data">BHAMPLUS90</div>
                      </li>

                      <li>
                        <div className="small">AADHAAR :</div>
                        <div className="data">BHAMPLUS90</div>
                      </li>

                      <li>
                        <div className="small">Pincode :</div>
                        <div className="data">721441</div>
                      </li>
                    </ul>
                  </div>

                  <div className="right">
                    <div className="pan">
                      <h4>PAN Details</h4>

                      <div className="pan-card">
                        <div className="pan-img">
                          <img
                            src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/10/PANcard2-1.jpg"
                            alt=""
                          />
                        </div>

                        <ul>
                          <li>
                            <div className="small">Email :</div>
                            <div className="data">username@gmail.com</div>
                          </li>

                          <li>
                            <div className="small">Mobile :</div>
                            <div className="data">+91 00000000</div>
                          </li>

                          <li>
                            <div className="small">Gender :</div>
                            <div className="data">Male</div>
                          </li>

                          <li>
                            <div className="small">DOB :</div>
                            <div className="data">20/07/1998</div>
                          </li>

                          <li>
                            <div className="small">PAN :</div>
                            <div className="data">BHAMPLUS90</div>
                          </li>

                          <li>
                            <div className="small">Pincode :</div>
                            <div className="data">721441</div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="pan">
                      <h4>Aadhaar Details - Digilocker</h4>

                      <div className="pan-card">
                        <div className="pan-img">
                          <img
                            src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/10/PANcard2-1.jpg"
                            alt=""
                          />
                          <img
                            src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/10/PANcard2-1.jpg"
                            alt=""
                          />
                        </div>

                        <ul>
                          <li>
                            <div className="small">Email :</div>
                            <div className="data">username@gmail.com</div>
                          </li>

                          <li>
                            <div className="small">Mobile :</div>
                            <div className="data">+91 00000000</div>
                          </li>

                          <li>
                            <div className="small">Gender :</div>
                            <div className="data">Male</div>
                          </li>

                          <li>
                            <div className="small">DOB :</div>
                            <div className="data">20/07/1998</div>
                          </li>

                          <li>
                            <div className="small">PAN :</div>
                            <div className="data">BHAMPLUS90</div>
                          </li>

                          <li>
                            <div className="small">Pincode :</div>
                            <div className="data">721441</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {view == 3 && (
              <div className="bank-details">
                <h4>Bank Details</h4>

                <div className="user-bnk">
                  <div className="items">
                    <span>User ID</span>
                    <p>ACC02312</p>
                  </div>

                  <div className="items">
                    <span>Account Name</span>
                    <p>User Name</p>
                  </div>

                  <div className="items">
                    <span>Account No</span>
                    <p>9004560089550</p>
                  </div>

                  <div className="items">
                    <span>IFSC Code</span>
                    <p>SBIN0001234</p>
                  </div>

                  <div className="items">
                    <span>Bank Name</span>
                    <p>State Bank Of India</p>
                  </div>

                  <div className="items">
                    <span>Address</span>
                    <p>123 - Jodhpur Park, Kolkata</p>
                  </div>

                  <div className="items">
                    <span>Penny Drop Status</span>
                    <p>
                      <span className="active">Active</span>
                    </p>
                  </div>

                  <div className="items">
                    <span>Verified</span>
                    <p>
                      {" "}
                      <span className="inactive">Not Verified</span>{" "}
                    </p>
                  </div>

                  <div className="items">
                    <span>Verified</span>
                    <p>
                      {" "}
                      <span className="inactive">Not Verified</span>{" "}
                    </p>
                  </div>

                  <div className="items">
                    <span>Approved </span>
                    <p>
                      {" "}
                      <span className="inactive">Not Approved</span>{" "}
                    </p>
                  </div>

                  <div className="items">
                    <span>Added On</span>
                    <p>12/02/2023</p>
                  </div>

                  <div className="items">
                    <span>Message </span>
                    <p>None</p>
                  </div>
                </div>
              </div>
            )}

            {view == 4 && (
              <>
                <div className="game-details">
                  <h4>Complete Withdrawal</h4>

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
                    </div>

                    <div className="complete-withdraw">
                      <div className="user-list">
                        <table>
                          <thead>
                            <tr>
                              <th>Order Id</th>
                              <th>Txn Amount</th>
                              <th>Status</th>
                              <th>Payment Gateway</th>
                              <th>Processed On </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>6622952e352</td>
                              <td>
                                <i className="bx bx-rupee"></i> 900
                              </td>
                              <td>
                                <span className="active">Active</span>
                              </td>
                              <td>Online</td>
                              <td>
                                <p>04/22/2024</p> <p>02:19:34 PM</p>{" "}
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

                <div className="game-details">
                  <h4>Complete Deposit</h4>

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
                    </div>

                    <div className="complete-withdraw">
                      <div className="user-list">
                        <table>
                          <thead>
                            <tr>
                              <th>Order Id</th>
                              <th>Txn Amount</th>
                              <th>Status</th>
                              <th>Payment Gateway</th>
                              <th>Processed On </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>6622952e352</td>
                              <td>
                                <i className="bx bx-rupee"></i> 900
                              </td>
                              <td>
                                <span className="active">Active</span>
                              </td>
                              <td>Online</td>
                              <td>
                                <p>04/22/2024</p> <p>02:19:34 PM</p>{" "}
                              </td>
                            </tr>

                            <tr>
                              <td>6622952e352</td>
                              <td>
                                <i className="bx bx-rupee"></i> 900
                              </td>
                              <td>
                                <span className="incative">Inactive</span>
                              </td>
                              <td>Online</td>
                              <td>
                                <p>04/22/2024</p> <p>02:19:34 PM</p>{" "}
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
              </>
            )}

            {view == 5 && (
              <div className="bank-details">
                <h4>Device Information</h4>

                <div className="user-bnk">
                  <div className="items">
                    <span>Device Name</span>
                    <p>POCO X5 Pro 5G</p>
                  </div>

                  <div className="items">
                    <span>Device Model</span>
                    <p>Xiaomi 22101320I</p>
                  </div>

                  <div className="items">
                    <span>Device Type</span>
                    <p>Android</p>
                  </div>

                  <div className="items">
                    <span>OS</span>
                    <p>
                      Android OS 14 / API-34
                      (UKQ1.231003.002/V816.0.3.0.UMSINXM)
                    </p>
                  </div>

                  <div className="items">
                    <span>RAM</span>
                    <p>7190</p>
                  </div>

                  <div className="items">
                    <span>Processer Type</span>
                    <p>ARM64 FP ASIMD AES</p>
                  </div>

                  <div className="items">
                    <span>Processer Count</span>
                    <p>8</p>
                  </div>

                  <div className="items">
                    <span>Battry Percentage</span>
                    <p>0.2</p>
                  </div>

                  <div className="items">
                    <span>Mobile Platform</span>
                    <p>Android</p>
                  </div>

                  <div className="items">
                    <span>Genuinity Check </span>
                    <p>true</p>
                  </div>
                </div>
              </div>
            )}

            {view == 6 && (
              <div className="bank-details">
                <h4>Location Information</h4>

                <div className="user-bnk">
                  <div className="items">
                    <span>Device Name</span>
                    <p>POCO X5 Pro 5G</p>
                  </div>

                  <div className="items">
                    <span>Device Model</span>
                    <p>Xiaomi 22101320I</p>
                  </div>

                  <div className="items">
                    <span>Device Type</span>
                    <p>Android</p>
                  </div>

                  <div className="items">
                    <span>Processer Type</span>
                    <p>ARM64 FP ASIMD AES</p>
                  </div>

                  <div className="items">
                    <span>Processer Count</span>
                    <p>8</p>
                  </div>

                  <div className="items">
                    <span>Battry Percentage</span>
                    <p>0.2</p>
                  </div>

                  <div className="items">
                    <span>Mobile Platform</span>
                    <p>Android</p>
                  </div>

                  <div className="items">
                    <span>Genuinity Check </span>
                    <p>true</p>
                  </div>
                </div>
              </div>
            )}

            {view == 7 && (
              <div className="game-details">
                <h4>Game Details</h4>

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
                  </div>

                  <div className="user-list">
                    <table>
                      <thead>
                        <tr>
                          <th>Game ID</th>
                          <th>Table ID</th>
                          <th>Players</th>
                          <th>Game Type</th>
                          <th>Amount</th>
                          <th>Game Mode</th>
                          <th>Status</th>
                          <th>Date Time</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>3562</td>
                          <td>6622952e352c</td>
                          <td>2</td>
                          <td>dealrummy</td>
                          <td>
                            <i className="bx bx-rupee"></i> 900
                          </td>
                          <td>Cash</td>
                          <td>
                            <span className="active">Won</span>
                          </td>

                          <td>
                            <p>04/22/2024</p> <p>02:19:34 PM</p>{" "}
                          </td>

                          <td>
                            <NavLink to="/viewtranstion">
                              <button className="edit" type="button">
                                <i title="Edit" className="bx bx-edit-alt"></i>
                              </button>
                            </NavLink>

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
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
