import React, { Fragment } from "react";
import { connect } from "react-redux";
import { UserList } from "features/Home/views/UserList";
import { EditUser } from "features/Home/views/EditUser";
import { Pagination } from "features/core/views/Pagination";
import { getUserList, setPage, deleteUser, editUser } from "features/core/actions";

class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.getUserList(this.props.user.page);
  }
  componentDidUpdate(prevProps) {
    if (this.props.user.page !== prevProps.user.page) {
      this.props.getUserList(this.props.user.page);
    }
  }
  setPage = page => () => {
    this.props.setPage(page);
  }
  deleteUser = id => () => {
    this.props.deleteUser(id);
  }
  editUser = details => () => {
    this.props.editUser(details);
  }
  render() {
    const { userData, page, total_pages } = this.props.user;
    return (
      <div className="container-fluid mt-4">
        {
          this.props.user.editUser.showEditPage ?
            <EditUser />
            :
            <Fragment>
              <UserList
                userData={userData}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
              />
              {userData.length > 0 && <Pagination
                page={page}
                totalPages={total_pages}
                setPage={this.setPage} />}
            </Fragment>
        }
      </div>
    );
  }
}
export const Home = connect(
  state => ({
    user: state.user
  }), {
    getUserList,
    setPage,
    deleteUser,
    editUser
  }
)(HomePage);
