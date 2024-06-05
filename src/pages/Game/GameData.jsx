import "../../assets/scss/Game.scss";
import AdminHeader from "../../components/AdminHeader";
import userImage from "../../assets/images/icon.jpg";
import cardimg from "../../assets/images/card.jpg";
import { useState } from "react";

const GameData = () => {
  const [viewProfile, setViewprofile] = useState(false);
  return (
    <div className="container">
      <AdminHeader />

      {viewProfile == true && (
        <div className="gamee-details">
          <div className="box">
            <i
              onClick={() => setViewprofile(false)}
              className="bx bx-x cross-icon"
            ></i>
            <div className="id">
              <h4>Gameplay Details</h4> <p>0999093DJDB323</p>
            </div>

            <div className="data">
              <div className="g-details">
                <h4>Game Details</h4>

                <ul>
                  <li>
                    <p>Game ID :</p>
                    <span>BXS9000as943034 foiksdjof coikdjfoikfj ciojdcfo</span>
                  </li>

                  <li>
                    <p>Game Type :</p>
                    <span>Practice</span>
                  </li>

                  <li>
                    <p>Game Sub Type :</p>
                    <span>Point(13)</span>
                  </li>

                  <li>
                    <p>Number Of Cards :</p>
                    <span>12</span>
                  </li>

                  <li>
                    <p>Number Of Decks :</p>
                    <span>20</span>
                  </li>

                  <li>
                    <p>Number Of Seats :</p>
                    <span>12</span>
                  </li>

                  <li>
                    <p>Point Value :</p>
                    <span>2</span>
                  </li>

                  <li>
                    <p>Min Entry :</p>
                    <span>12</span>
                  </li>

                  <li>
                    <p>Joint Entry :</p>
                    <span>160</span>
                  </li>

                  <li>
                    <p>Joined Players :</p>
                    <span>2</span>
                  </li>
                </ul>
              </div>

              <div className="g-details">
                <h4>Cut Joker</h4>

                <ul>
                  <li className="card-imgs">
                    <img className="card-img" src={cardimg} alt="" />
                    <img className="card-img" src={cardimg} alt="" />
                    <img className="card-img" src={cardimg} alt="" />
                    <img className="card-img" src={cardimg} alt="" />
                    <img className="card-img" src={cardimg} alt="" />
                    <img className="card-img" src={cardimg} alt="" />
                    <img className="card-img" src={cardimg} alt="" />
                    <img className="card-img" src={cardimg} alt="" />
                    <img className="card-img" src={cardimg} alt="" />
                    <img className="card-img" src={cardimg} alt="" />
                    <img className="card-img" src={cardimg} alt="" />
                    <img className="card-img" src={cardimg} alt="" />
                  </li>
                </ul>
              </div>

              <div className="g-details">
                <h4>Prize And Commission</h4>

                <ul>
                  <li className="w-60">
                    <p>Prize Amount Without Deduct Commission :</p>
                    <span>Rs 60</span>
                  </li>

                  <li className="w-60">
                    <p>Service Commission Amount (10%) :</p>
                    <span>Rs 60</span>
                  </li>

                  <li className="w-60">
                    <p>GST Amount (18%) :</p>
                    <span>0</span>
                  </li>

                  <li className="w-60">
                    <p>TDS Amount (30%) :</p>
                    <span>0</span>
                  </li>

                  <li className="w-60">
                    <p>Prize Amount After Deduct Commission :</p>
                    <span>80</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="players-box">
              <h4>Players</h4>

              <div className="player-box">
                <ul className="head">
                  <li className="name">
                    <img className="user-image" src={userImage} alt="" />{" "}
                    <span>
                      Jhon Doe <small>(Winner)</small>
                    </span>
                  </li>

                  <li>
                    <img className="card-img" src={cardimg} alt="" />
                    <img className="card-img" src={cardimg} alt="" />
                    <img className="card-img" src={cardimg} alt="" />
                    <img className="card-img" src={cardimg} alt="" />
                  </li>

                  <li>
                    <span>0</span>
                  </li>

                  <li>
                    <span>60</span>
                  </li>

                  <li>
                    <span>Winner</span>
                  </li>
                </ul>

                <ul className="otheres-content">
                  <li>
                    <p>Discarded Cards</p>

                    <div className="cards">
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                    </div>
                  </li>

                  <li>
                    <p>In Hand Cards Cards</p>

                    <div className="cards">
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                    </div>
                  </li>

                  <li>
                    <p>Initial Cards</p>

                    <div className="cards">
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                    </div>
                  </li>

                  <li>
                    <p>Pick Cards</p>

                    <div className="cards">
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                    </div>
                  </li>
                </ul>
              </div>

              <div className="player-box">
                <ul className="head">
                  <li className="name">
                    <img className="user-image" src={userImage} alt="" />{" "}
                    <span>
                      Player 1 <small>(ID)</small>
                    </span>
                  </li>

                  <li>
                    <img className="card-img" src={cardimg} alt="" />
                  </li>

                  <li>
                    <span>0</span>
                  </li>

                  <li>
                    <span>60</span>
                  </li>

                  <li>
                    <span>Winner</span>
                  </li>
                </ul>

                <ul className="otheres-content">
                  <li>
                    <p>Discarded Cards</p>

                    <div className="cards">
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                    </div>
                  </li>

                  <li>
                    <p>In Hand Cards Cards</p>

                    <div className="cards">
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                    </div>
                  </li>

                  <li>
                    <p>Initial Cards</p>

                    <div className="cards">
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                    </div>
                  </li>

                  <li>
                    <p>Pick Cards</p>

                    <div className="cards">
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                      <img className="card-images" src={cardimg} alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

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
            <input type="text" placeholder="Enter Username" />

            <input type="text" placeholder="Enter Room ID" />

            <div className="date">
              <input type="date" name="" id="" />
            </div>

            <div className="date">
              <input type="date" name="" id="" />
            </div>

            <button type="button">Search</button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>Serial Number</th>
                  <th>Room Id</th>
                  <th>Game Referance ID Type</th>
                  <th>Users</th>
                  <th>Game Type</th>
                  <th>Game SubType</th>
                  <th>Started On</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>0902</td>
                  <td onClick={() => setViewprofile(true)} className="cursor">
                    564634254
                  </td>
                  <td>
                    <p>User 1</p>
                    <p>User 2</p>
                  </td>
                  <td>
                    <span className="active">Practice</span>
                  </td>
                  <td>
                    <span className="active">Practice</span>
                  </td>
                  <td>
                    <p>04/22/2024</p> <p>02:19:34 PM</p>{" "}
                  </td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>0902</td>
                  <td onClick={() => setViewprofile(true)} className="cursor">
                    564634254
                  </td>
                  <td>
                    <p>User 1</p>
                    <p>User 2</p>
                  </td>
                  <td>
                    <span className="active">Practice</span>
                  </td>
                  <td>
                    <span className="active">Practice</span>
                  </td>
                  <td>
                    <p>04/22/2024</p> <p>02:19:34 PM</p>{" "}
                  </td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>0902</td>
                  <td onClick={() => setViewprofile(true)} className="cursor">
                    564634254
                  </td>
                  <td>
                    <p>User 1</p>
                    <p>User 2</p>
                  </td>
                  <td>
                    <span className="active">Practice</span>
                  </td>
                  <td>
                    <span className="active">Practice</span>
                  </td>
                  <td>
                    <p>04/22/2024</p> <p>02:19:34 PM</p>{" "}
                  </td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>0902</td>
                  <td onClick={() => setViewprofile(true)} className="cursor">
                    564634254
                  </td>
                  <td>
                    <p>User 1</p>
                    <p>User 2</p>
                  </td>
                  <td>
                    <span className="active">Practice</span>
                  </td>
                  <td>
                    <span className="active">Practice</span>
                  </td>
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
  );
};

export default GameData;
