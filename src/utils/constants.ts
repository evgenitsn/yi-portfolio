export const SITE_TITLE = 'Yordan Ivanov Portfolio';
export const META_DESCRIPTION = 'Yordan Ivanov Portfolio';

export const FORMSPARK_ACTION_URL = `https://submit-form.com/${process.env.NEXT_PUBLIC_FORMSPARK_ACTION_URL}`;

// TODO: Check the network traffic difference
export const DEFAULT_PHOTO_QUALITY = 85;
export const HOME_SECTION_NAMES = ['Drone', 'People', 'Events', 'Other'];

export const LINKS = [
  { path: '/', name: 'Home' },
  { path: '/photography', name: 'Photography' },
  { path: '/videos', name: 'Videos' },
  { path: '/contact', name: 'Contact' },
];

export const INSTAGRAM_URL = 'https://www.instagram.com/ivanovv12/';
export const YOUTUBE_URL = 'https://www.youtube.com/user/yordanpablo';

export const MOBILE_BREAKPOINT = '700px';

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
export const THANKS_MESSAGE_1 = 'Thank you for reaching out to me. ';
export const THANKS_MESSAGE_2 = 'I will contact you as soon as possible!';
