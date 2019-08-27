import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { required, email } from 'features/Home/modules';
import { updateUser, hideEditUser } from 'features/core/actions';
import "features/Home/styles/EditUser";

const renderField = ({
  input,
    label,
    type,
    meta: { touched, error, active }
}) => (
        <div className="form-group">
            <label>{label}</label>
            <div>
                <input className="form-control" {...input} placeholder={label} type={type} />
                {touched && !active && (error && <span className="text-danger">{error}</span>)}
            </div>
        </div>
    )

class EditUserForm extends React.PureComponent {
    updateUser = values => {
        this.props.updateUser(values);
    }
    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        const { avatar, first_name } = this.props.selectedUser;
        return (
            <form onSubmit={handleSubmit(this.updateUser)} className="mt-2 col-6 offset-3">
                <img src={avatar} className="profile offset-4" alt={first_name} />
                <Field
                    name="first_name"
                    type="text"
                    component={renderField}
                    validate={[required]}
                    label="First Name"
                />
                <Field
                    name="last_name"
                    type="text"
                    component={renderField}
                    validate={[required]}
                    label="Last Name"
                />
                <Field
                    name="email"
                    type="email"
                    component={renderField}
                    label="Email"
                    validate={[required, email]} />

                <div>
                    <button type="submit" className="btn btn-sm btn-primary mr-4" disabled={pristine || submitting}>
                        Update Data
                    </button>
                    <button 
                        onClick={this.props.hideEditUser}
                        className="btn btn-sm btn-secondary">
                        Cancel
                    </button>
                </div>
            </form>
        );
    }
}
export const EditUser = connect(
    state => ({
        initialValues: state.user.editUser.selectedUser,
        selectedUser: state.user.editUser.selectedUser
    }),
    {
        updateUser,
        hideEditUser
    }
)(reduxForm({
    form: 'editForm'
})(EditUserForm));
