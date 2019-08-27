import React from "react";
import "features/Home/styles/UserList";

export const UserList = props => <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Avatar</th>
      <th scope="col">Id</th>
      <th scope="col">Email</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      props.userData.length > 0 &&
      props.userData.map(row => <tr key={row.id}>
        <td>
          <img src={row.avatar} className="icon" alt={row.first_name} />
        </td>
        <td>
          {row.id}
        </td>
        <td>
          {row.email}
        </td>
        <td>
          {row.first_name}
        </td>
        <td>
          {row.last_name}
        </td>
        <td>
          <button
            onClick={props.editUser(row)}
            className="btn btn-sm btn-secondary mr-2"
            >Edit</button>
          <button
            disabled={props.userData.length === 1}
            className="btn btn-sm btn-danger"
            onClick={props.deleteUser(row.id)}
          >Delete</button>
        </td>
      </tr>)
    }
  </tbody>
</table>;
