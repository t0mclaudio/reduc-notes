import CONSTANTS from '../constants';


const users = (state=[], action) => {
  switch(action.type) {
    case CONSTANTS.ADD:
      return [...state, action.payload]
    case CONSTANTS.DELETE:
      return state.filter(user => user.name !== action.payload)
    case CONSTANTS.LIST:
      return state 
    default:
      state
  }
}

export { users };