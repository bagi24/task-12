import React from "react";

export const UserItem = ({ user, id, name, actionRemove, actionComplete }) => {
  return (
    <div className="user-item">
      <p> name: {name}</p>
      <p>id: {id}</p>
      <button className="btn-delete" onClick={() => actionRemove(id)}>
        Delete
      </button>
      <button className="btn-complete" onClick={() => actionComplete(user)}>
        Complete
      </button>
    </div>
  );
};
