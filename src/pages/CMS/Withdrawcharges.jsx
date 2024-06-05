import AdminHeader from "../../components/AdminHeader";
import "../../assets/scss/Cms.scss";
import { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const Withdrawcharges = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    console.log("Title:", title);
    console.log("Editor Data:", content);
  };

  const editor = useRef(null);

  return (
    <div className="container">
      <AdminHeader />
      <div id="cms">
        <div className="bredcremp">
          <h4>Withdraw Charges</h4>
          <div className="page-title">
            <p className="active">CMS</p>
            <p className="not">/ About Us</p>
          </div>
        </div>
        <div className="content">
          <div className="title">
            <label htmlFor="title">Page Constant Title</label>
            <input
              type="text"
              id="title"
              value={title}
              placeholder="Page Constant Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form">
            <div className="CKEditorComponent">
              <JoditEditor
                ref={editor}
                value={content}
                tabIndex={4}
                onBlur={(newContent) => setContent(newContent)}
              />
            </div>
          </div>
          <div className="btn">
            <button type="button" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawcharges;
