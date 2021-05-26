import NpcComponent from './components/NpcComponent'
import { StateContextProvider } from "./context/StateContext";

export default function App() {  
  return (
    <StateContextProvider>
        <NpcComponent />
    </StateContextProvider> 
  )
}