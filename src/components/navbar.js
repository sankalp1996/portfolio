// import navData from "../data/navData";


const Navbar = (props) => {
  // console.log("This is my data", navData);
  const {navData} = props
console.log({props});

  return (
    <div>
      <header>
        <nav className="navbar">
          <ul>
            {
              navData.map((item)=>(
              <li>
              <a key={item} href={item.link}>{item.title}</a>
              </li>)
                )
            }

            {/* <li>
              <a href="#">Home</a>
            </li> */}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
