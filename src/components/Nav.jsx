import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { facebook } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header
      className="padding-x py-8 absolute z-10 w-full 
    border-solid border-black rounded-xl"
    >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        {/* `max-lg:hidden` means will only be visible on desktop devices 
        IOW on min-width: 1024px, we want it hidden. */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* hamburger should only appear mobile devices 
        "Usually, keep hidden, but on max-lg, we will return it to block (visible)"*/}
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
