export const required = value => (value ? undefined : '!Required');
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
export const phoneLength = value =>
  value && value.length !== 10 ? `Length must be 10 characters` : undefined