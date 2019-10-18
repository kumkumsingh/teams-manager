// const reducer =(state= null,action ={})=>{
//     switch(action.type){
//         case 'TEAMS_FETCHED':
//             return [...state ,...action.payload]
//         default :
//         return state
//     }
// }

const reducer = (state = null, action = {}) => {
    switch (action.type) {
      case "FETCH_TEAMS":
        // first we checked to see what the action.payload actually was with console.log, then we decided to only return this because this is the initial start. When we for example add something, then we have to return ...state.
        // console.log(action.payload);
        return [...action.payload] ;

      default:
        return state;
    }
  };
  
export default reducer;

