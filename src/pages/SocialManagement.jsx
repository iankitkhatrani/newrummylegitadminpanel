import AdminHeader from "../components/AdminHeader";

const SocialManagement = () => {
  return (
    <div className="container">
      <AdminHeader />

      <div id="game">
        <div className="bredcremp">
          <h4>Social URL Informations</h4>

          <div className="page-title">
            <p className="active">Dashboard</p>
            <p className="not">/ Default</p>
          </div>
        </div>

        <div className="pending-content">
          <div className="search-filter">
            <input type="text" placeholder="Search Platform" />
            <input type="text" placeholder="URL" />

            <button>Add Social URL</button>
          </div>

          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>URL</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Android</td>
                  <td>http://127.0.0.1:5173/socialurl</td>
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
                  <td>Twitter</td>
                  <td>http://127.0.0.1:5173/socialurl</td>
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
                  <td>Instagram</td>
                  <td>http://127.0.0.1:5173/socialurl</td>
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

export default SocialManagement;
