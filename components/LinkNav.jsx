import Link from "next/link";
import { GWASVG, ShareSVG } from "./svg";

export default function LinkNav() {
  return (
    <>
      <div className='bg-white rounded-md mt-3 shadow border-round p-4 text-slate-400'>
        <div className="lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-wrap justify-center lg:h-auto p-2">
          <Link href="/share-average-calculator">
          <a className="flex flex-col px-5 py-2 rounded text-black font-medium items-center justify-center border-blue-500-Link">
              <span className="cum-icon">
                <ShareSVG />
              </span>
              <span className='text-center'>Share Price Calculator</span>
            </a>
          </Link>
       
          <Link href="/gwa-calculator">
          <a className="flex flex-col px-5 py-2 rounded text-black font-medium items-center justify-center border-blue-500-Link">
              <span className="cum-icon">
             <GWASVG />
              </span>
              <span className='text-center'>GWA Calculator</span>
            </a>
          </Link>
          <Link href="/male-and-female-standards-calculator">
          <a className="flex flex-col px-5 py-2 rounded text-black font-medium items-center justify-center border-blue-500-Link">
              <span className="cum-icon">
             <GWASVG />
              </span>
              <span className='text-center'>Standards Calculator</span>
            </a>
          </Link>
          <Link href="/ap-status-calcualator">
          <a className="flex flex-col px-5 py-2 rounded text-black font-medium items-center justify-center border-blue-500-Link">
              <span className="cum-icon">
             <GWASVG />
              </span>
              <span className='text-center'>Standards Calculator</span>
            </a>
          </Link>
      
        </div>
      </div>
    </>
  )
} 