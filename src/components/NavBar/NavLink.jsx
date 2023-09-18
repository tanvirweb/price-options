import PropTypes from 'prop-types';

const NavLink = ({route}) => {
    const {name, path} = route;
    return (
        <li>
            <a href={path}>{name}</a>
        </li>
    );
};

NavLink.propTypes = {
    route: PropTypes.object.isRequired
}

export default NavLink;