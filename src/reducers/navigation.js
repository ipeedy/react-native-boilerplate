import Navigator from '../Navigator';

const initialState = Navigator.router.getStateForAction(
  Navigator.router.getActionForPathAndParams("Main")
);
const navigation = (state = initialState, action) => {
  const newState = Navigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navigation;
