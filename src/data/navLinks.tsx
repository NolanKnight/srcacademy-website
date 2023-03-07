import About from "../pages/about";
import Academics from "../pages/academics";
import Calendar from "../pages/calendar";
import Contact from "../pages/contact";
import Enrollment from "../pages/enrollment";
import Home from "../pages/home";
import Staff from "../pages/staff";

const navLinks = [
  { label: "Home", link: "/", element: <Home /> },
  { label: "About", link: "/about", element: <About /> },
  { label: "Enrollment", link: "/enrollment", element: <Enrollment /> },
  { label: "Staff", link: "/staff", element: <Staff /> },
  { label: "Calendar", link: "/calendar", element: <Calendar /> },
  { label: "Contact", link: "/contact", element: <Contact /> },
  { label: "Academics", link: "/academics", element: <Academics /> },
];

export default navLinks;
