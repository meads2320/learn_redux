//reducer takes in:

// 1. the action
// 2. a copy of the current state 

function comments(state =[], action) { 
 console.log(state,action);
 return state;   
};
export default comments;