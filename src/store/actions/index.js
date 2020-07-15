export {
  setAuthenticated,
  resetAuth,
  syncFirebaseAuth,
  setNewUser
} from "./auth.actions";

export {
  setAuthToken,
  setUserType,
  setInitialLoginOff,
  updateUserData,
  subscribePackage,
  getActivities,
  getAppointments
} from "./user.actions";

export {
  setIncomingCall,
  endCallAction as endCall,
  setCallActive,
  resetInAppCall
} from './call.actions';

export {
  setUserList,
  updateUsersList,
  setUser,
  updateGlobalSlots
} from "./app.actions";

export {
  createPackage,
  deletePackage,
  createSlots,
  syncSubscriptions
} from './trainer.actions';

export {
  updatePosts,
  updatePost
} from './social.actions'