import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import Profile from "./Components/profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Components/Feed";

function App() {
  return (
    <>
        <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            {/* Body is a parent route & inside it childs, controlled by Outet */}
            <Route path="/" element={<Body/>}> 
               <Route path="/" element={<Feed/>} />
               <Route path="/profile" element={<Profile/>} />
               <Route path="/login" element={<Login/>} />
            </Route>
          </Routes>
        </BrowserRouter>
        </Provider>

      {/* <h1 className="bg-amber-800">Vite + React</h1> */}
    </>
  );
}

export default App;
