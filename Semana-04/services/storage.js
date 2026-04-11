import { APP_CONFIG } from '../config.js';

export const saveData = (data) => {
  localStorage.setItem(APP_CONFIG.STORAGE_KEY, JSON.stringify(data));
};

export const loadData = () => {
  return JSON.parse(localStorage.getItem(APP_CONFIG.STORAGE_KEY)) || [];
};