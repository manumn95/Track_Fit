import { useState, useEffect } from "react";
import Authentication from "./components/Authentication";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Template from "./components/Template";
import Dashboard from "./components/Dashboard";
import Activities from "./components/Activities";
import Diet from "./components/Diet";
import Recipes from "./components/Recipes";
import Catagories from "./components/Catagories";
import MealsCard from "./components/MealsCard";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    if (token === true || token === null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {!isLoggedIn ? (
          <Route path="/" element={<Authentication />} />
        ) : (
          <>
            <Route path="/landing" element={<Landingpage />}>
              <Route index element={<Template />} />
              <Route path="home" element={<Dashboard />} />
              <Route path="activities" element={<Activities />} />
              <Route path="diet" element={<Diet />} />
            </Route>
            <Route path="/recipes" element={<Recipes />}>
              <Route index element={<Catagories />} />
              <Route path=":meals" element={<MealsCard />} />
            </Route>
            <Route path="*" element={<Navigate to="/landing" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
