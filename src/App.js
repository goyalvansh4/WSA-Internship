import './App.css';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import Main from './Components/Home/Main';
import PropertyList from './Components/Home/PropertyList';
import PropertyDetails from './Components/PropertyDetails/PropertyDetails';
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />} id='main' exact >
         <Route id="home" index element={<PropertyList/>} exact/>
         <Route id="propertyDetails" path="/propertylist/:id" element={<PropertyDetails />} exact/>
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
