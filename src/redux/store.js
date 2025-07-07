import { createStore } from 'redux';
import rootReducer from './reducer';


const loadState = () => {
  try {
    const serializedState = localStorage.getItem('usersData');
    if (serializedState === null) {
      return undefined; 
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading from localStorage', err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('usersData', serializedState);
  } catch (err) {
    console.error('Error saving to localStorage', err);
  }
};

const persistedState = loadState(); 

const store = createStore(
  rootReducer,
  persistedState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.subscribe(() => {
  saveState(store.getState());
});

export default store;
