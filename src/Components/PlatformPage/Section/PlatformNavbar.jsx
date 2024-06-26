import { useEffect, useState } from "react";
import logo from "../../../Assets/Components/Navbar/Shodat-color-logo.png";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
const CustomAnchor = styled.a`
  background-color: #016c7b;
  padding: 0.75rem 1.25rem; /* px-5 py-1 */
  color: #ffffff; /* text-white */
  display: none; /* hidden */
  justify-content: center; /* hidden */
  align-items: center; /* hidden */
  /* Medium screen and above */
  @media (min-width: 768px) {
    display: flex; /* md:flex */
  }
  &:hover {
    background: linear-gradient(
      110.53deg,
      rgb(0, 196, 204) -8.24%,
      rgb(62, 68, 153) 32.83%,
      rgb(94, 2, 127) 82.38%,
      rgb(244, 190, 0) 106.38%
    );
  }
`;
const CustomAnchor1 = styled.a`
  background-color: #016c7b;
  padding: 0.75rem 1.25rem; /* px-5 py-1 */
  color: #ffffff; /* text-white */
  justify-content: center; /* hidden */
  align-items: center; /* hidden */
  /* Medium screen and above */
  @media (min-width: 768px) {
    display: flex; /* md:flex */
  }
  &:hover {
    background: linear-gradient(
      110.53deg,
      rgb(0, 196, 204) -8.24%,
      rgb(62, 68, 153) 32.83%,
      rgb(94, 2, 127) 82.38%,
      rgb(244, 190, 0) 106.38%
    );
  }
`;
function PlatformNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionHovered, setIsSolutionHovered] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isIndustriesHovered, setIsIndustriesHovered] = useState(false); // New state variable
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSolutionHover = () => {
    setIsSolutionHovered(true);
  };

  const handleSolutionHoverOut = () => {
    setIsSolutionHovered(false);
  };

  const handleServicesHover = () => {
    setIsServicesHovered(true);
  };

  const handleServicesHoverOut = () => {
    setIsServicesHovered(false);
  };

  const handleIndustriesHover = () => {
    setIsIndustriesHovered(true);
  };

  const handleIndustriesHoverOut = () => {
    setIsIndustriesHovered(false);
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1100) {
      setIsMobileMenuOpen(true);
    } else {
      setIsMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className="fixed container flex py-8  top-0 left-0 right-0 z-10 font-sans text-black bg-white max-w-full h-28 "
        style={{
          background: scrollPosition > 100 ? "white" : "white",
          justifyContent: "flex-start",
        }}
      >
        <div className="container flex justify-evenly items-center lg:-ml-12 mt-6">
          <a href="/">
            <img
              style={{}}
              className="w-[180px] h-11 lg:ml-0  "
              src={logo}
              alt="Tailwindcss Navigation"
            />
          </a>
          <ul className="hidden md:flex space-x-3 justify-center  lg:ml-20 ">
            <li>
              <Link
                to="/platform"
                className="text-black hover:text-black hover:bg-[#f3d157] rounded active:bg-yellow-500 inline-block px-1 lg:px-2 py-2 font-Open-Sans font-normal text-base leading-6"
              >
                Platform
              </Link>
            </li>
            <li
              className="flex relative group "
              onMouseEnter={handleSolutionHover}
              onMouseLeave={handleSolutionHoverOut}
            >
              <Link
                to="/solutionAI"
                className={`inline-flex w-full justify-center white hover:text-black ${
                  isSolutionHovered
                    ? "bg-[#f3d157] text-black "
                    : "hover:bg-[#f3d157]"
                } active:bg-[#f3d157] rounded px-2 lg:px-4 py-2 font-sans font-normal text-base leading-6`}
              >
                Solutions
                <svg
                  className={`h-6 ml-1.5 ${
                    isSolutionHovered ? "text-black rotate-180" : "text-black"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  />
                </svg>
              </Link>

              <ul
                style={{ background: "#340D73" }}
                className="absolute border-t-4 border-yellow-300 p-3 w-52 top-9 left-0 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg text-left"
              >
                <li className="text-sm leading-8">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-500 font-Sans"
                  >
                    Data Engineering
                  </a>
                </li>
                <li className="text-sm leading-8">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-500 Open-Sans"
                  >
                    AI Innovation
                  </a>
                </li>
                <li className="text-sm leading-8">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-500 Open-Sans"
                  >
                    ERP System & Analytics
                  </a>
                </li>
                <li className="text-sm leading-8">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-500 Open-Sans"
                  >
                    Vision AI
                  </a>
                </li>
                <li className="text-sm leading-8">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-500 Open-Sans"
                  >
                    Edge Analytics
                  </a>
                </li>
                <li className="text-sm leading-8">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-500 Open-Sans"
                  >
                    Intelligent Enterprise
                  </a>
                </li>
                <li className="text-sm leading-8">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-500 Open-Sans"
                  >
                    Cloud Transformation
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="flex relative group"
              onMouseEnter={handleServicesHover}
              onMouseLeave={handleServicesHoverOut}
            >
              <Link
                to="#"
                className={`inline-flex w-full justify-center white hover:text-black ${
                  isServicesHovered
                    ? "bg-[#f3d157]  text-black "
                    : "hover:bg-[#f3d157]"
                } active:bg-[#f3d157] rounded px-2 lg:px-4 py-2 font-sans font-normal text-base leading-6`}
              >
                Services
                <svg
                  className={`h-6 ml-1.5 ${
                    isServicesHovered ? "text-black rotate-180" : "text-black"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  />
                </svg>
              </Link>

              <ul
                style={{ background: "#340D73" }}
                className="absolute border-t-4 border-yellow-300 p-3 w-52 top-9 left-0 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg"
              >
                <li className="text-sm leading-8 text-left">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-500 font-sans"
                  >
                    Innovate
                  </a>
                </li>
                <li className="text-sm leading-8 text-left">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-500 font-sans"
                  >
                    Manage
                  </a>
                </li>
                <li className="text-sm leading-8 text-left">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-500 font-sans"
                  >
                    Modernize
                  </a>
                </li>
                <li className="text-sm leading-8 text-left">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-500 font-sans"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="flex relative group"
              onMouseEnter={handleIndustriesHover}
              onMouseLeave={handleIndustriesHoverOut}
            >
              {" "}
              {/* Add event handlers */}
              <Link
                to="#"
                className={`inline-flex w-full justify-center white hover:text-black ${
                  isIndustriesHovered
                    ? "bg-[#f3d157]  text-black"
                    : "hover:bg-[#f3d157]"
                } active:bg-[#f3d157] rounded px-2 lg:px-4 py-2 font-sans font-normal text-base leading-6`}
              >
                Industries
                <svg
                  className={`h-6 ml-1.5 ${
                    isIndustriesHovered ? "text-black rotate-180" : "text-black"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  />
                </svg>
              </Link>
              <ul
                style={{ background: "#340D73" }}
                className="absolute border-t-4 border-yellow-300 p-3 w-52 top-9 left-0 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg"
              >
                <li className="text-sm leading-8 text-left">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-500 font-sans"
                  >
                    Automotive
                  </a>
                </li>
                <li className="text-sm leading-8 text-left">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-500 font-sans"
                  >
                    Manufacturing
                  </a>
                </li>
                <li className="text-sm leading-8 text-left">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-500 font-sans"
                  >
                    Oil&Gas
                  </a>
                </li>
                <li className="text-sm leading-8 text-left">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-500 Open-sans"
                  >
                    Transportation
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-black hover:text-black hover:bg-[#f3d157] rounded active:bg-[#f3d157]  inline-block  px-1 lg:px-2 py-2 font-Open-Sans font-normal text-base leading-6"
              >
                Customer Success
              </Link>
            </li>
            <li>
              <Link
                to="/shodatAI"
                className="text-black hover:text-black hover:bg-[#f3d157] rounded active:bg-[#f3d157]  inline-block px-1 lg:px-2 py-2 font-Open-Sans font-normal text-base leading-6"
              >
                Shodat AI
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-black hover:text-black hover:bg-[#f3d157] rounded active:bg-[#f3d157] inline-block px-1 lg:px-2 py-2 font-Open-Sans font-normal text-base leading-6"
              >
                About
              </Link>
            </li>

            <li
              className="lg:ml-52"
              style={{
                marginLeft: "100px",
              }}
            >
              <CustomAnchor
                href="#"
                role="button"
                className="absolute rounded-full hover:rounded-xl  hidden lg:visible"
              >
                Reques Demo
              </CustomAnchor>
            </li>
          </ul>

          {/* Mobile menu icon */}
          <button
            id="mobile-icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <i
              className={
                isMobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
              }
            ></i>
          </button>
          {isMobileMenuOpen && (
            <div className="lg:hidden flex justify-center mt-3 w-full">
              <div
                id="mobile-menu"
                className="mobile-menu absolute top-14 w-full"
              >
                <ul className="bg-black shadow-lg leading-9 font-bold max-h-screen ">
                  <li className="   font-sans font-normal  pl-4 text-white hover:text-black hover:bg-[#f3d157] rounded active:bg-[#f3d157]">
                    <a href="/platform" className="block pl-7">
                      Platform
                    </a>
                  </li>
                  <li className="hover:bg-[#f3d157]   font-sans font-normal rounded active:bg-[#f3d157]   text-white hover:text-black">
                    <a href="/solutionAI" className="block pl-11">
                      Solutions
                      <i className="fa-solid fa-chevron-down fa-2xs pt-4 pl-2"></i>
                    </a>
                    <ul
                      style={{ background: "#340D73" }}
                      className="text-white w-full"
                    >
                      <li className="text-sm leading-8   hover:text-[#f3d157]  font-sans font-normal">
                        <a className="block pl-16" href="#">
                          Data Engineering
                        </a>
                      </li>
                      <li className="text-sm leading-8  hover:text-[#f3d157]  font-sans font-normal">
                        <a className="block pl-16" href="#">
                          Ai Innovation
                        </a>
                      </li>
                      <li className="text-sm leading-8  hover:text-[#f3d157]  font-sans font-normal">
                        <a className="block pl-16" href="#">
                          ERP System & Analaytics
                        </a>
                      </li>
                      <li className="text-sm leading-8 hover:text-[#f3d157]  font-sans font-normal">
                        <a className="block pl-16" href="#">
                          Vision Ai
                        </a>
                      </li>
                      <li className="text-sm leading-8  hover:text-[#f3d157]  font-sans font-normal">
                        <a className="block pl-16" href="#">
                          Edge Analytics
                        </a>
                      </li>
                      <li className="text-sm leading-8  hover:text-[#f3d157]  font-sans font-normal">
                        <a className="block pl-16" href="#">
                          intelligent Enterprise
                        </a>
                      </li>
                      <li className="text-sm leading-8  hover:text-[#f3d157]  font-sans font-normal">
                        <a className="block pl-16" href="#">
                          Cloud Transformation
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="hover:bg-[#f3d157]   font-sans font-normal  text-white rounded active:bg-[#f3d157] hover:text-black">
                    <a href="#" className="block pl-11">
                      Services
                      <i className="fa-solid fa-chevron-down fa-2xs pt-4 pl-2"></i>
                    </a>
                    <ul
                      style={{ background: "#340D73" }}
                      className="text-white w-full"
                    >
                      <li className="text-sm leading-8   hover:text-[#f3d157]  font-sans font-normal">
                        <a className="block pl-16" href="#">
                          innovate
                        </a>
                      </li>
                      <li className="text-sm leading-8  hover:text-[#f3d157]  font-sans font-normal">
                        <a className="block pl-16" href="#">
                          Manage
                        </a>
                      </li>
                      <li className="text-sm leading-8  hover:text-[#f3d157]  font-sans font-normal">
                        <a className="block pl-16" href="#">
                          Modernize
                        </a>
                      </li>
                      <li className="text-sm leading-8  hover:text-[#f3d157]  font-sans font-normal">
                        <a className="block pl-16" href="#">
                          Security
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="hover:bg-[#f3d157]   font-sans font-normal  text-white rounded active:bg-[#f3d157] hover:text-black">
                    <a href="#" className="block pl-11">
                      Industries
                      <i className="fa-solid fa-chevron-down fa-2xs pt-4 pl-2"></i>
                    </a>
                    <ul
                      style={{ background: "#340D73" }}
                      className="text-white w-full"
                    >
                      <li className="text-sm leading-8   hover:text-[#f3d157]  font-sans font-normal">
                        <a className="block pl-16" href="#">
                          Automative
                        </a>
                      </li>
                      <li className="text-sm leading-8  hover:text-[#f3d157]  font-sans font-normal">
                        <a className="block pl-16" href="#">
                          Manufacturing
                        </a>
                      </li>
                      <li className="text-sm leading-8  hover:text-[#f3d157]  font-sans font-normal">
                        <a className="block pl-16" href="#">
                          Oil & Gas
                        </a>
                      </li>
                      <li className="text-sm leading-8  hover:text-[#f3d157]  font-sans font-normal">
                        <a className="block pl-16" href="#">
                          Transportation
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pl-4 text-white hover:text-black hover:bg-[#f3d157] rounded active:bg-[#f3d157]  font-sans font-normal">
                    <a href="/contact" className="block pl-7">
                      Customer Success
                    </a>
                  </li>
                  <li className="pl-4 text-white hover:text-black hover:bg-[#f3d157] rounded active:bg-[#f3d157]  font-sans font-normal">
                    <a href="#" className="block pl-7">
                      Shodat AI
                    </a>
                  </li>
                  <li className="   pl-4 text-white hover:text-black hover:bg-[#f3d157] rounded active:bg-[#f3d157]  font-sans font-normal">
                    <a href="/about" className="block pl-7">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
export default PlatformNavbar;
