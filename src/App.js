import './App.css';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import Main from './Components/Home/Main';
import PropertyList from './Components/Home/PropertyList';
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />} exact >
         <Route path="/" element={<PropertyList/>} exact/>
      </Route>
     
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
