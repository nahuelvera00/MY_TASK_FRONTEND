import { BrowserRouter, Routes, Route } from "react-router-dom";

//LAYOUT
import IndexLayout from "./layout/IndexLayout";
import AuthLayout from "./layout/AuthLayout";
import ClientLayout from "./layout/ClientLayout";

//IMPORT PROVIDER
import { AuthProvider } from "./context/AuthProvider";
import { AppProvider } from "./context/AppProvider";

//PAGES
//INDEX PAGE
import Index from "./pages/home/Index";

//AUTH PAGES
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ConfirmAccount from "./pages/auth/ConfirmAccount";

//APP PAGES
import Dashboard from "./pages/client/Dashboard";
import Profile from "./pages/client/Profile";
import Groups from "./pages/client/Groups";
import Tasks from "./pages/client/Tasks";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path='index' element={<IndexLayout />}>
              <Route index element={<Index />} />
            </Route>
            <Route path='auth' element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path='sign-up' element={<SignUp />} />
              <Route
                path='confirm-account/:token'
                element={<ConfirmAccount />}
              />
            </Route>
            //PRIVATE ROUTE
            <Route path='app' element={<ClientLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='profile' element={<Profile />} />
              <Route path='tasks' element={<Tasks />} />
              <Route path='groups' element={<Groups />} />
            </Route>
          </Routes>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
