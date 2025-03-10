import Button from "../ui/Button";
import Logo from "/images/Logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <img src={Logo} />
      </div>
      {/* <Button size="sm" className="text-link">
        Book Appointment
      </Button> */}
      <div className="text-deep-indigo">
        <svg
        className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
          stroke="currentColor"
          strokeWidth="1"  /* Increase stroke width */
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
