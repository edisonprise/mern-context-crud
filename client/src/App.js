import "./App.css";
import { HomePage, PostForm, NotFoundPage } from "./pages/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 m-auto container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<PostForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
