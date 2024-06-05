import "../../assets/scss/Setting.scss";
import "../../assets/scss/KYCmangement.scss";
import AdminHeader from "../../components/AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WithdrawalAdmin = () => {
  const notify = () => {
    toast("Action Accepted");
  };

  return (
    <div className="container">
      <div>
        <ToastContainer
          autoClose={2000}
          className="toast-container"
          toastClassName="dark-toast"
        />
      </div>
      <AdminHeader />
      <div id="kyc-management">
        <div className="bredcremp">
          <h4>Withdrawal Admin</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="pending-content">
          <div className="withdrawal-container">
            <h4>Instant Withdraw</h4>

            <div className="form">
              <div className="input">
                <label htmlFor="">Instant Withdraw Minimum Amount</label>
                <input type="number" />
              </div>

              <div className="input">
                <label htmlFor="">Instant Withdraw Maximum Amount</label>
                <input type="number" />
              </div>

              <div className="input">
                <label htmlFor="">Instant Withdraw Charges Service</label>
                <input type="number" />
              </div>

              <div className="input">
                <label htmlFor="">
                  Instant Withdraw Amount for Less Then Amount
                </label>
                <input type="number" />
              </div>

              <div className="input">
                <label htmlFor="">Instant Withdraw Minimum Amount</label>
                <input type="number" />
              </div>

              <div className="input">
                <label htmlFor="">Instant Withdraw Maximum Amount</label>
                <input type="number" />
              </div>

              <div className="input">
                <label htmlFor="">Instant Withdraw Charges Service</label>
                <input type="number" />
              </div>

              <div className="input">
                <label htmlFor="">
                  Instant Withdraw Amount for Less Then Amount
                </label>
                <input type="number" />
              </div>

              <div className="input">
                <label htmlFor="">Instant Withdraw Minimum Amount</label>
                <input type="number" />
              </div>

              <div className="input">
                <label htmlFor="">Instant Withdraw Maximum Amount</label>
                <input type="number" />
              </div>

              <div className="input">
                <label htmlFor="">Instant Withdraw Charges Service</label>
                <input type="number" />
              </div>

              <div className="input">
                <label htmlFor="">
                  Instant Withdraw Amount for Less Then Amount
                </label>
                <input type="number" />
              </div>
            </div>

            <div className="btn">
              <button onClick={notify} type="button">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default WithdrawalAdmin;
