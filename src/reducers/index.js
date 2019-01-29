import { UPDATE } from '../actions';

const initialState = {
  data: {}
}

export default (state = initialState, action) => {
  console.log('Reducer Type: ', action.type);

  switch(action.type) {
    case UPDATE:
      return { data: action.payload }

    default:
      return state;
  }
};
