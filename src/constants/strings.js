export const coachedPeople = (amount) => `Coached ${amount} people`;
export const durationBuilder = (duration) => `DURATION: ${duration} Weeks`;
export const priceBuilder = (price) => `PRICE: ${price} INR`;
export const subscribedSuccessBuilder = (trainerName, sessionCount) => `Successfully subscribed to ${trainerName} for ${sessionCount} sessions`;
export const appointmentSuccessBuilder = () => `Appointment Booked`;
export const appointmentErrorBuilder = () => `Booking error, try again`;
const strings = {
  SLOTS: 'Slots',
  AVAILABLE_SLOTS: 'Available Slots',
  PACKAGE_NAME: 'Package Name',
  MINS: 'Mins',
  ALLOTTED_TO:'Allotted to ',
  NO_SLOTS_AVAILABLE:'No slots available',
  RUPEE: '₹',
  FOLLOW: 'Follow',
  BOOK: 'Book',
  RINGING:'Ringing',
  BOOKED:'Booked',
  EDIT_COVER:'Edit Cover',
  ENROLL: 'Enroll',
  NO_OF_SESSIONS: 'Number of Sessions',
  MY_PACKAGES: 'My Packages',
  MY_SLOTS: 'My Slots',
  NEW_APPOINTMENT:'New Appointment',
  MY_CLIENTS: 'My Clients',
  PACKAGES: 'Packages',
  SESSIONS: 'Sessions',
  FOLLOWERS: 'Followers',
  PLAN_DESCRIPTION: 'Plan description',
  FOLLOWING: 'Following',
  TRANSFORMATIONS: 'Transformations',
  NO_DESC: "No description provided for this user",
  MAKEOVERS: 'Makeovers',
  RATING: 'Rating',
  SEE_MORE: 'See more',
  SEE_LESS: 'See less',
  SUBSCRIPTIONS: 'Subscriptions',
  SUBSCRIBE: 'Subscribe',
  SOCIAL: 'Social',
  POSTS: 'Posts',
  DURATION: 'Duration',
  PROGRAMS: 'Programs',
  WEEKS: 'Weeks',
  PRICE: 'PRICE',
  DESCRIPTION: 'Description',
  PLAN_PRICE: 'Plan price :',
  PROCEED: 'Proceed',
  CALL: 'Call',
  WAITING_FOR_USERS: 'Waiting for user to join',
  CALL_TIMEOUT: 'Call timeout, ending call.',
  APPOINTMENTS: 'Appointments',
  SIGNUP_FAILED: 'Signup Failed..Try Again',
  LOGIN_FAILED: 'Login Failed..Try Again',
  SLOT_BOOKING_SUCCESS: "Slot booked!",
  SLOT_BOOKING_ERROR: 'Unable to book slot, try again'
};

export default strings;