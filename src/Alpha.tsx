import {  useDispatch, useSelector } from "react-redux"
import {decrement} from './Store/Dispatch'
export function Alpha(){
    console.log('hà xuân huy')
     interface RootState {
      number : number,
      name  : string
    }
    const training = useSelector((state:RootState) =>state.number)
    const dispatch = useDispatch()
    const handclick = ()=>{
      dispatch(decrement())
    }
    console.log(training)
  return (
    <div>
    <h1>ha xuan huy</h1>
    <h1>{training}</h1>
    <button onClick={handclick}>Alpha</button>
    </div>
  )
}