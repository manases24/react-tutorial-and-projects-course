import logo from "../assets/images/logo.svg";
import { SocialLink } from "./SocialLink";
import { socialLinks } from "../api";
import { PageLinks } from "./PageLinks";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img className="nav-logo" src={logo} alt="backroads" />
          <button className="nav-toggle" id="nav-toggle" type="button">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks parentClass="nav-links" itemClass="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map((item) => {
            return (
              <SocialLink key={item.id} item={item} itemClass="nav-icon" />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
