import debugLog from './Logger';
import constants from './SessionConstants';

const TAG = 'StorageUtils';

const setString = (key: string, value: string) => {
  // console.log(key,value);
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    debugLog(TAG, e);
  }
};

const getString = (key: string, defaultValue = '') => {
  try {
    const value = localStorage.getItem(key);
    if (!value) {
      return defaultValue;
    }
    return value;
  } catch (e) {
    debugLog(TAG, e);
  }
  return defaultValue;
};

const flush = () => {
  try {
    const rememberMe = getString(constants.REMEMBER_ME);
    localStorage.clear();
    setString(constants.REMEMBER_ME, rememberMe);
  } catch (e) {
    debugLog((e as Error).message);
  }
};

const removeString = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    debugLog((e as Error).message);
  }
};

// Function to store a value in session storage
const storeInSessionStorage = <T>(key: string, value: T) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    debugLog((error as Error).message);
  }
};

// Function to get a value from session storage by key
const getFromSessionStorage = (key: string) => {
  try {
    const value = sessionStorage.getItem(key);
    if (value === null) {
      return null;
    }
    return JSON.parse(value);
  } catch (error) {
    debugLog((error as Error).message);
    return null;
  }
};

export default {
  setString,
  getString,
  flush,
  removeString,
  storeInSessionStorage,
  getFromSessionStorage,
};
