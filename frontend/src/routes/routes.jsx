import React from 'react'
import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";
import DashbordContent from "../components/dashbordContent";
import Register from '../views/register';
import AdminDashbord from '../views/dashbord/adminDashbord';
import PatientComponent from '../components/patientRecord';
import PatientDashbord from '../components/patientComponent';
import DoctorDashbord from '../views/dashbord/doctorDashbord';
 export default function RouteComponent(props){
 return (
  <h1>route displayed</h1>
 );

 }