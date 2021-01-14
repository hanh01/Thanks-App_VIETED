import React from "react";
import { Redirect } from "react-router-dom";

// Profile
import UserProfile from "../pages/Authentication/user-profile";
import EditProfile from "../pages/Users/Profiles/EditProfile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

//Home
import Home from "../pages/Thanks/Home/index";
import ThanksDetail from "../pages/Thanks/ThanksDetail/ThanksDetail";
import PersonalDetail from "../pages/Thanks/PersonalDetail";
import NewProfile from "../pages/Users/Profiles/NewProfile";
import Loading from "../pages/Authentication/Loading";

const userRoutes = [
  { path: "/profile", component: UserProfile },
  { path: "/home", component: Home },
  { path: "/edit-profile", component: EditProfile },
  { path: "/thanks-detail", component: ThanksDetail },
  { path: "/personal-detail", component: PersonalDetail },
  { path: "/", exact: true, component: () => <Redirect to="/home" /> },
];

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
  { path: "/new-profile", component: NewProfile },
  { path: '/loading', component: Loading },
];

export { userRoutes, authRoutes };
