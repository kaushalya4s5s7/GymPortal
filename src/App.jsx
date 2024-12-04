import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import DashboardOverview from "./components/dashboard/DashboardOverview";
import MemberList from "./components/members/MemberList";
import AttendanceTracker from "./components/attendance/AttendanceTracker";
import NotificationCenter from "./components/notifications/NotificationCenter";
import Navigation from "./components/layout/Navigation";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route
            path="/dashboard"
            element={
              <>
                <Navigation />
                <div className="ml-64 p-4">
                  <DashboardOverview />
                </div>
              </>
            }
          />
          <Route
            path="/members"
            element={
              <>
                <Navigation />
                <div className="ml-64 p-4">
                  <MemberList />
                </div>
              </>
            }
          />
          <Route
            path="/attendance"
            element={
              <>
                <Navigation />
                <div className="ml-64 p-4">
                  <AttendanceTracker />
                </div>
              </>
            }
          />
          <Route
            path="/notifications"
            element={
              <>
                <Navigation />
                <div className="ml-64 p-4">
                  <NotificationCenter />
                </div>
              </>
            }
          />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
