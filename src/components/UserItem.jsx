import React, { PureComponent } from "react";

export class UserItem extends PureComponent {
  render() {
    const { user, id, name, actionRemove, actionComplete } = this.props;
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
  }
}
