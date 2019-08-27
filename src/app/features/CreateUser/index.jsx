import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { createUser, hideMessage } from 'features/core/actions';
import { required, email, phoneLength } from 'features/CreateUser/modules';
import "features/CreateUser/styles";

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

class CreateUserForm extends React.PureComponent {
  createUser = values => {
    this.props.createUser(values);
  }
  hideMessage = () => {
    setTimeout(() => {
      this.props.hideMessage();
      this.props.reset();
    }, 1500);
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const { createUser: { message, response } } = this.props.user;
    return (
      <form onSubmit={handleSubmit(this.createUser)} className="mt-2 col-6 offset-3">
        <Field
          name="firstName"
          type="text"
          component={renderField}
          validate={[required]}
          label="First Name"
        />
        <Field
          name="lastName"
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
        <Field
          name="phone"
          type="number"
          component={renderField}
          label="Phone"
          validate={[required, phoneLength]} />
        <Field
          name="address"
          type="textarea"
          component={renderField}
          validate={[required]}
          label="Address" />
        <div>
          <button
            className="btn btn-sm btn-primary mr-4"
            type="submit" disabled={submitting}>
            Submit
        </button>
          <button
            className="btn btn-sm btn-secondary"
            disabled={pristine || submitting} onClick={reset}>
            Clear Values
        </button>
          {
            message && (message === 'success' ?
              <h6 className="text-success">User created successfully with {response.id}</h6>
              : <h6 className="text-danger">User creation failed</h6>)
          }
          {
            message && this.hideMessage()
          }
        </div>
      </form>
    );
  }
}
export const CreateUser = connect(
  state => ({
    user: state.user
  }),
  {
    createUser,
    hideMessage
  }
)(reduxForm({
  form: 'createUserForm'
})(CreateUserForm));
