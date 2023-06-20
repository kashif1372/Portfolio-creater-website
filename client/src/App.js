// import React, { createContext, useState, useEffect } from 'react'
// import { BrowserRouter } from 'react-router-dom'
// import AllRoutes from './AllRoutes'


// export const MyContext = createContext();

// export const MyContextProvider = ({ children }) => {
//   const [myValue, setMyValue] = useState(null);

//   useEffect(() => {
//     const storedValue = localStorage.getItem('myValue'); // Check if value exists in local storage

//     if (storedValue) {
//       setMyValue(storedValue); // Initialize state with stored value
//     } else {
//       setMyValue(false); // Initialize state with default value
//     }
//   }, []);

//   // useEffect(() => {
//   //   localStorage.setItem('myValue', myValue); // Update local storage whenever the context state changes
//   // }, [myValue]);

//   return (
//     <MyContext.Provider value={{ myValue, setMyValue }}>
//       {children}
//     </MyContext.Provider>
//   );
// };


// const App = () => {

//   return (
//     <>
//     <BrowserRouter>
//     <MyContextProvider>

//     <AllRoutes/>

//     </MyContextProvider>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App




import React, { createContext, useReducer } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './AllRoutes'

const storedUser = localStorage.getItem("user");

export const userContext = createContext();

const initialState = storedUser ? JSON.parse(storedUser) : null;
const reducer = (state,action)=>{
  // if(action.type==="USER"){
  //   return action.payload;
  // }
  // return state;

  switch(action.type){
    case "USER":
      localStorage.setItem("user",JSON.stringify(action.payload));
      return action.payload;

    default :
      return state;
  }
  
};

const App = () => {

  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <>
    <BrowserRouter>
    <userContext.Provider value={{state,dispatch}}>
    
    <AllRoutes/>

    </userContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App