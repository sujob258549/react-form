
import { createContext } from 'react'
import './App.css'
import From from './component/From/From'
import Reusabalefrom from './component/From/Reusabalefrom'
import UseRafe from './component/UseRafe/UseRafe'

{/* context api creat */}
export const Acontext = createContext('');

function App() {

  const handelSignUp = data => {
    // e.preventDefault();
    console.log('sign up data', data);
  }
  const handelLogine = data => {
    // e.preventDefault();
    console.log('login data', data)
  }

  return (
    <>

      {/* <From></From> */}
      {/* <UseRafe></UseRafe> */}

{/* context api creat */}
      <Acontext.Provider value='good'>
        <Reusabalefrom fromtitle={'Sign Up'} handelsubmit={handelSignUp} inputbutton={'Sign Up'}></Reusabalefrom>
        <Reusabalefrom fromtitle={'Login'} handelsubmit={handelLogine} ></Reusabalefrom>
      </Acontext.Provider>

    </>
  )
}

export default App
