import React,{PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import '../../styles/styles.scss';

const Header = () => {
    return (
        <nav className="header-nav">
            <IndexLink activeClassName="active" to="/campaign-ui/">Home</IndexLink>
            {"|"}
            <Link to="/campaign-ui/promo" activeClassName="active">Promotion</Link>
            {"|"}
            <Link to="/campaign-ui/courses" activeClassName="active">Courses</Link>
            {"|"}
            <Link to="/campaign-ui/learn" activeClassName="active">Learn</Link>
        </nav>
    );
};

export default Header;
