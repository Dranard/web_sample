import { Container } from "react-bootstrap";
import "../styles/cms/style.scss";
import { Link, Outlet } from "react-router-dom";
import { Navmenu } from "../components/Navmenu";

export const CmsLayout = () => {
    //Traditional Way
    //return <div className="container-fluid"> </div>

    //react-bootstrap
    return (
        <Container fluid>
            <Navmenu />
            <Outlet />
        </Container>
    );
};
