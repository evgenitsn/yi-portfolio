// TODO: Review contants
export const SITE_TITLE = 'Yordan Ivanov Portfolio';
export const META_DESCRIPTION = 'Yordan Ivanov Portfolio';

export const FORMSPARK_ACTION_URL = `https://submit-form.com/${process.env.NEXT_PUBLIC_FORMSPARK_ACTION_URL}`;

// eslint-disable-next-line no-useless-escape
export const EMAIL_VALIDATION_PATTERN = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const REQUIRED_ERROR_MESSAGE = 'Required field';
export const INVALID_EMAIL_ERROR_MESSAGE = 'Invalid email address';
export const MIN_LENGTH_ERROR_MESSAGE = (amount: number) =>
  `Minimum ${amount} characters`;
export const MAX_LENGTH_ERROR_MESSAGE = (amount: number) =>
  `Maximum ${amount} characters`;
export const FORM_SUBMIT_ERROR_MESSAGE =
  'There was an Error. Please try again.';
export const THANKS_MESSAGE =
  'Thanks for reaching out. I will get back to you soon.';
