import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import History from "./pages/History";
import Home from "./pages/Home";
import QR from "./pages/QR";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 pt-16">
          <Sidebar />
          <main className="flex-1 md:ml-64 overflow-y-auto p-4 h-[calc(100vh-64px)] bg-gray-50">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/qr" element={<QR />} />
              <Route
                path="/history"
                element={
                  <History/>
                }
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<h1 className="p-4">404 - Not Found</h1>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
