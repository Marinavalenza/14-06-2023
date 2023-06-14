import "./index.css";

const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Past To Do",
      url: "/",
    },
    {
      id: 3,
      name: "Add a To Do",
      url: "/",
    },
  ];

  return (
    <div className="Navbar">
      <ul className="Navbar__list">
        {links.map((link) => (
          <li className="Navbar__list-item" key={link.id}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
