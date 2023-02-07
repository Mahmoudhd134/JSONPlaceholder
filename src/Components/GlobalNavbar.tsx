import {Link} from "react-router-dom";

const GlobalNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/counter'}>The Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/posts'}>Posts</Link>
                        </li>
                        {/*<li className="nav-item dropdown">*/}
                        {/*    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"*/}
                        {/*       aria-expanded="false">*/}
                        {/*        Dropdown*/}
                        {/*    </a>*/}
                        {/*    <ul className="dropdown-menu">*/}
                        {/*        <li><Link className="dropdown-item" to={'#'}>Action</Link></li>*/}
                        {/*        <li><Link className="dropdown-item" to={'#'}>Another action</Link></li>*/}
                        {/*        <li>*/}
                        {/*            <hr className="dropdown-divider"/>*/}
                        {/*        </li>*/}
                        {/*        <li><Link className="dropdown-item" to={'#'}>Something else here</Link></li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default GlobalNavbar;