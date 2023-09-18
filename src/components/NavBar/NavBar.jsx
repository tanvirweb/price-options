import NavLink from "./NavLink";

const NavBar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Contact', path: '/contact' },
      ];
      
    return (
        <nav>
            <ul className="md:flex gap-5">
                {
                    routes.map(route => <NavLink key={route.id} route={route}></NavLink>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;