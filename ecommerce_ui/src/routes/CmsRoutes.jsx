import { Route, Routes } from "react-router-dom";
import { CmsLayout } from "../layouts/CmsLayout.jsx";
import DashboardIndex from "../pages/cms/dashboard/Index.jsx";
import LoginIndex from "../pages/cms/login/index.jsx";

export const CmsRoutes = () => (
    <Routes>
        <Route path="/cms" element={<CmsLayout />}>
            <Route index element={<DashboardIndex />} />
            <Route path="login" element={<LoginIndex />} />
        </Route>
    </Routes>
);

{
    /* <Route path="/cms" element={<DashboardIndex/>} /> */
}

//export default CmsRoutes
