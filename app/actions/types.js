export const appActions = {
  SET_DRAWER_TAB: 'SET_DRAWER_TAB',
  CONFIGURE_PUSH_NOTIFICATIONS: 'CONFIGURE_PUSH_NOTIFICATIONS',
  CONNECT_TO_SOCKET_IO_SERVER: 'CONNECT_TO_SOCKET_IO_SERVER',
  DISCONNECT_FROM_SOCKET_IO_SERVER: 'DISCONNECT_FROM_SOCKET_IO_SERVER',
  OPEN_DRAWER: 'Navigation/OPEN_DRAWER',
  CLOSE_DRAWER: 'Navigation/CLOSE_DRAWER',
  HANDLE_KEYCHAIN_ERRORS: 'HANDLE_KEYCHAIN_ERRORS',
};

export const userActions = {
  USER_SIGN_IN: 'USER_SIGN_IN',
  USER_SIGN_UP: 'USER_SIGN_UP',
  USER_SIGN_OUT: 'USER_SIGN_OUT',
  AUTHENTICATE_USER_SUCCESS: 'AUTHENTICATE_USER_SUCCESS',
  AUTHENTICATE_USER_FAIL: 'AUTHENTICATE_USER_FAIL',
  SIGN_UP_USER_SUCCESS: 'SIGN_UP_USER_SUCCESS',
  SIGN_UP_USER_FAIL: 'SIGN_UP_USER_FAIL',
};

export const tokenActions = {
  SET_TOKEN_TO_HEADER: 'SET_TOKEN_TO_HEADER',
};
