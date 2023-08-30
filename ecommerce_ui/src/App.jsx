import { CmsRoutes } from "./routes/CmsRoutes";
import viteLogo from "/vite.svg";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="cms" />} />
            </Routes>
            <CmsRoutes />
        </BrowserRouter>
    );
}

export default App;
