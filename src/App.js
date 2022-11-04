import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nested from "./pages/Nested";
import NotFound from "./pages/NotFound";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={
      <ErrorBoundary msg="Something went wrong with the login component">
          <Login />
      </ErrorBoundary>
      } />

      <Route path="/dashboard">
        <Route index element={
          <ErrorBoundary msg="Something went wrong with the dashboard component">
               <Home />
          </ErrorBoundary>
        } />
        <Route path="nested" element={
          <ErrorBoundary msg="Something went wrong with the check result portal" >
              <Nested />
          </ErrorBoundary>

        } />
      </Route>

      <Route path="*" element={
        <ErrorBoundary msg="Something went wrong with the root component" >
            <NotFound />
        </ErrorBoundary>

      } />

    </Routes>

  );
}

export default App;
