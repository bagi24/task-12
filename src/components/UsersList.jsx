import { Component } from "react";
import { UserItem } from "./UserItem";

class UsersList extends Component {
  state = {
    inputValue: "",
    users: [],
    completed: [],
  };

  onChange = (event) => {
    const value = event.target.value;

    this.setState({
      inputValue: value,
    });
  };

  addUser = (e) => {
    e.preventDefault();
    const user = {
      id: this.state.users.length + 1,
      name: this.state.inputValue,
    };

    this.setState({
      users: [...this.state.users, user],
      inputValue: "",
    });
  };

  removeUser = (id) => {
    const newUsers = this.state.users.filter((user) => user.id !== id);

    this.setState({
      users: newUsers,
    });
  };

  actionComplete = (user) => {
    const updatedUsers = this.state.users.filter((u) => u.id !== user.id);

    console.log(updatedUsers);

    this.setState({
      users: updatedUsers,
      completed: [...this.state.completed, user],
    });

    console.log(this.state.completed);
  };

  handleunCompleted = (user) => {
    const updatedUsers2 = this.state.completed.filter((u) => u.id !== user.id);

    console.log(updatedUsers2);

    this.setState({
      completed: updatedUsers2,
      users: [...this.state.users, user],
    });
  };

  render() {
    return (
      <div className="users">
        <form onSubmit={this.addUser} className="user-form">
          <input
            className="input"
            type="text"
            onChange={this.onChange}
            value={this.state.inputValue}
          />
          <button className="btn-addUser" type="submit">
            დავალების დამატება
          </button>
        </form>

        <div className="conteiner">
          <div className="toBeperformed">
            <p> შესასრულებელი დავალება </p>
            {this.state.users.map((user, index) => (
              <UserItem
                key={user.id}
                name={user.name}
                id={user.id}
                actionRemove={this.removeUser}
                actionComplete={this.actionComplete}
                completed={this.completed}
                user={user}
              />
            ))}
          </div>

          <div className="done ">
            <p> შესრულებული დავალება</p>
            {this.state.completed.map((user) => {
              return (
                <div key={user.id} className="copmleted-element">
                  {user.name}
                  <button
                    className="btn-delete"
                    onClick={() => {
                      const updateDelete = this.state.completed.filter(
                        (u) => u.id !== user.id
                      );

                      this.setState({
                        completed: updateDelete,
                      });
                    }}
                  >
                    delete
                  </button>
                  <button
                    className="btn-uncompleted"
                    onClick={() => this.handleunCompleted(user)}
                  >
                    unCompleted
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default UsersList;
