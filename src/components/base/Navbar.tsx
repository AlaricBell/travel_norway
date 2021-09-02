import TextTitle from '../text/TextTitle';

const Navbar: React.FC = props => {
  return (
    <nav className="navbar">
      <div className="navbar-initial">
      <a href="/">
        <div className="brand">
          <TextTitle color="blue">Cities of Norway</TextTitle>
        </div>
        </a>

        <div id="nav-right" className="">
          <ul className="nav-items">
            <li className="nav-item">
              <a rel="noreferrer" href="https://molnardavid-portfolio.vercel.app/" target="_blank">My work</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;