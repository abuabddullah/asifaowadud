
import { HashLink } from "react-router-hash-link";

const NavMenues = () => {
  return (
    <>
      <li>
        <HashLink smooth to="home#banner">
          Home
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="home#about">
          About
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="home#skills">
          Skills
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="home#services">
          Services
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="home#projects">
          Projects
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="home#blog">
          Blogs
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="home#complements">
          Complements
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="home#contact">
          Contact
        </HashLink>
      </li>
    </>
  );
};

export default NavMenues;
