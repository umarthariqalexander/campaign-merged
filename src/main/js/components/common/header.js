import React,{PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav className="header-nav">
            <IndexLink activeClassName="active" to="/">Home</IndexLink>
            {"|"}
            <Link to="/promo" activeClassName="active">Promotion</Link>
            {"|"}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {"|"}
            <Link to="/learn" activeClassName="active">Learn</Link>
        </nav>
    );
};

export default Header;
