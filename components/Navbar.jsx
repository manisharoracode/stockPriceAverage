import Link from "next/link";
import { useState } from "react";
import { ShareSVG } from "./svg";
export default function Navbar()  {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center sticky flex-wrap bg-white shadow-sm">
      <Link href="/" className="no-underline">
        <span className="text-lg font-bold px-5">Stock Price Average Calculator</span>
      </Link>

      <div
        className=" inline-flex p-3 rounded lg:hidden text-slate-600 ml-auto outline-none"
        onClick={handleClick}
      >
        {active ? <svg
          width="28px"
          height="28px"
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z" />
          <path d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z" />
        </svg> :
          <svg
            width="28px"
            height="28px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentcolor"
            strokeWidth={2}
          >
            <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
          </svg>}
      </div>
      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
        className={`${active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto p-1">
          <Link href="https://sipcalculatorai.com/">
            <a className="flex lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-black font-medium items-center justify-center border-blue-500">
              <span className="cum-icon"></span>
             Blog
            </a>
          </Link>
        
          <Link href="https://t.me/Sipcalculatorai">
            <a className="flex lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-black font-medium items-center justify-center border-blue-500">
              <span className="cum-icon"></span>
              Telegram Link
            </a>
          </Link>
         
          <Link href="mailto:manisharoracode@gmail.com">
            <a className="flex lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-black font-medium items-center justify-center border-blue-500">
              Contact Us
            </a>
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

