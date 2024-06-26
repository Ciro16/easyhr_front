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
import Directory from './views/directory'
import Birthday from './views/birthday'
import Dependents from './views/dependents'
import CreateDependent from './views/dependents/createDependent'
import ListDependents from './views/dependents/listDependent/index.jsx'
import Expenses from './views/expenses/index.jsx'
import CreateExpense from './views/expenses/createExpense/index.jsx'
import ListExpenses from './views/expenses/listExpenses/index.jsx'

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

          <Route path='directory' element={<Directory />} />

          <Route path='birthday' element={<Birthday />} />

          <Route path="dependents" element={<Dependents />}>
            <Route path="" element={<CreateDependent />} />
            <Route path="list" element={<ListDependents />} />
          </Route>

          <Route path="expenses" element={<Expenses />}>
            <Route path="" element={<CreateExpense />} />
            <Route path="list" element={<ListExpenses />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
