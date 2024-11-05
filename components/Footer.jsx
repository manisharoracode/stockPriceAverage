import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between px-6 py-2 sm:flex-row bg-slate-800">
      <Link href="/"><a className="text-xl font-semibold text-white">
        Copyright © 2024 sipcalculatorai.com
      </a></Link>
      <hr className="w-full opacity-30 my-4 md:hidden lg:hidden" />
      {/* <p className="py-2 text-white text-xs sm:py-0">2022 -All rights reserved</p> */}
      <div className="text-white font-medium">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto p-2">
        
          <Link href="mailto:manisharoracode@gmail.com">
            <a className="flex lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-white font-medium items-center justify-center hover:bg-slate-500 hover:text-white">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

