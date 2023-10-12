import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Dashboard.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'

import Login from './views/login'
import Home from './views/home'
import Profile from './views/profile'
import OrganizationalChart from './views/organizationalChart'
import Request from './views/request'

import { ProtectedRoute } from './components/protectedRoute'
import CreateRequest from './views/request/createRequest'
import ListRequests from './views/request/listRequest'
import PayrollFlyers from './views/payrollFlyers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      {/* Notifications */}
      <Toaster richColors position="top-center" />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="organizational-chart"
            element={<OrganizationalChart />}
          />
          <Route path="request" element={<Request />}>
            <Route path="" element={<CreateRequest />} />
            <Route path="list" element={<ListRequests />} />
          </Route>
          <Route
            path="payroll-flyers"
          >
            <Route index element={<PayrollFlyers />}/>
            <Route path=':id/:payrollType' element={<PayrollFlyers showDetail={true} />}/>
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
