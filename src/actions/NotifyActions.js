export const SET_ERROR_NOTIFY = 'SET_ERROR_NOTIFY';
export const CLEAR_ERROR_NOTIFY = 'CLEAR_ERROR_NOTIFY';

export function setErrorNotify(text) {
  return {
    type: SET_ERROR_NOTIFY,
    text: text
  }
}

export function clearErrorNotify() {
  return {
    type: CLEAR_ERROR_NOTIFY
  }
}
