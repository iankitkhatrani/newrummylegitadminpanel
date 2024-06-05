import { useState } from "react";

const Delete = ({ action }) => {
  const [item, setDelete] = useState(false);

  return (
    <div className="delete-item">
      <div className="box">
        <i onClick={() => setDelete(false)} className="bx bx-x cross-icon"></i>

        <div className="delete">
          <i className="bx bx-trash"></i>
        </div>

        <p>Are you sure you want to permanently erase the list. ?</p>

        <div className="btn">
          <button className="cancel" type="button">
            Delete Now
          </button>

          <button onClick={() => setDelete(false)} type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
