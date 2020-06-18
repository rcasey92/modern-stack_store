const selectUserState = state => state.user;

const selectUserDetails = state => selectUserState(state).userDetails;

export {
    selectUserDetails
};