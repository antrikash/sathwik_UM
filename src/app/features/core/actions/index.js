import { action } from 'root/actions';
import { actionTypes } from '../actionTypes';

export const getUserList = page => {
  const request = fetch(`https://reqres.in/api/users?page=${page}`)
    .then(res => res.json());
  return action(actionTypes.GET_USER_LIST, request);
};

export const setPage = page => action(actionTypes.SET_PAGE, page);

export const createUser = details => {
  const { firstName, lastName, } = details;
  const name = `${firstName} ${lastName}`;
  const request = fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify({ name, job: 'leader', }),
  })
    .then(response => response.json());

  return action(actionTypes.CREATE_USER, request);
};

export const deleteUser = id => {
  const request = fetch(`https://reqres.in/api/users/${id}`, {
    method: 'DELETE',
  }).then(resp => id);
  return action(actionTypes.DELETE_USER, request);
};

export const hideMessage = () => action(actionTypes.HIDE_MESSAGE);

export const editUser = details => action(actionTypes.EDIT_USER, details);
export const hideEditUser = details => action(actionTypes.HIDE_EDIT_USER);

export const updateUser = details => {
  const request = fetch(`https://reqres.in/api/users/${details.id}`, {
    method: 'PUT',
  })
    .then(data => ({ updatedData: data.json(), details, }));
  return action(actionTypes.UPDATE_USER, request);
};
