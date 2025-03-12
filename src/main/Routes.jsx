import React from "react";
import { Routes, Route } from "react-router-dom";
import UserCrud from "../components/user/UserCrud";
import Home from "../components/home/Home";

const RoutesComponent = props => (
  <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/users' element={<UserCrud/>} />
    <Route path='*' element={<Home/>} />
  </Routes>
);

export default RoutesComponent