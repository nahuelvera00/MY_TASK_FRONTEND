import { BrowserRouter, Routes, Route } from "react-router-dom";

//LAYOUT
import IndexLayout from "./layout/IndexLayout";
import AuthLayout from "./layout/AuthLayout";

//IMPORT PROVIDER
import { AuthProvider } from "./context/AuthProvider";

//PAGES
import Index from "./pages/home/Index";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='index' element={<IndexLayout />}>
            <Route index element={<Index />} />
          </Route>
          <Route path='auth' element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path='sign-up' element={<SignUp />} />
          </Route>
          <Route path='*'></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
