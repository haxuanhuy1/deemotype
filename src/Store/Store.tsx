interface Reducer {
  number: number,
  name : string
}
const initState: Reducer = {
  number: 0,
  name : 'ha xuan huy',
}
const reduxStore = (state = initState , actions:{type : string})=>{
  switch(actions.type){
    case 'DECREMENT': 
    return {
      ...state , 
     number : state.number + 1
    }
    case 'INCREMENT':
      return{
        ...state , 
        number : state.number -1
      }
      default :
      return state
  }
}
export default reduxStore;
