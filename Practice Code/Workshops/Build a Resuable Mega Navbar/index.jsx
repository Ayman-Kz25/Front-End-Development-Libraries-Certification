export const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navbar">
      {/* Main Menu */}
      <ul>
        <li className="nav-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="#">Widgets</a>
        </li>
        <li className="nav-item">
          <button
            aria-expanded={menuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            Apps
          </button>

          {/* Sub-Menu */}
          <ul className={`sub-menu ${menuOpen ? "sub-menu--open" : ""}`} aria-label="Apps">
            <li>
              <a href="#">Calendar</a>
            </li>
            <li>
              <a href="#">Chat</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
