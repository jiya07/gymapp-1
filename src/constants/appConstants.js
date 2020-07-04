// export const rootURL = 'https://te-gym-api.herokuapp.com';
export const rootURL = 'https://fitness-first-services.herokuapp.com';
// export const rootURL = 'http://192.168.0.105:3001';
export const userTypes = {
  USER: 'USER',
  TRAINER: 'TRAINER'
}

export const videoFeedConfig = {
  width: 360,
  height: 640,
  bitrate: 600,
  FPS: 30
}
export const appPackageId = 'com.thirdessential.fitnessfirst';

export const notificationActions = {
  Accept: 'Accept',
  Reject: 'Reject'
}

export const storageKeys = {
  PENDING_CALL: 'PENDING_CALL'
}
export const webClientId = '284208119571-nt9fitb9l2o4qulefvju8gqeo7aaug01.apps.googleusercontent.com';

export const videoTestMode = false;
export const callTimeout = 30000; //30 secs

export const WEEK_DAYS = {
  SUN: 'SUN',
  MON: 'MON',
  TUE: 'TUE',
  WED: 'WED',
  THU: 'THU',
  FRI: 'FRI',
  SAT: 'SAT',
};
export const allowedDurations = [30, 45, 60];

export const imageTypes = {
  AVATAR: {
    type: 'AVATAR',
    dimension: {
      width: 400,
      height: 400
    }
  },
  COVER: {
    type: 'COVER',
    dimension: {
      height: 1000,
      width: 1000
    }
  }
}


export const remoteMessageTypes = {
  CALL: 'call',
  APPOINTMENT: "appointmentNotification",
  SESSION: 'sessionNotification'
}