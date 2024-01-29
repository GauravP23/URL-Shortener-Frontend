import React from "react";
import {Link} from 'react-router-dom'

export default function Login(){
  return(
    <>
    <div className="w-full h-auto flex items-center justify-centre loginpage ">
    <div className="w-[32%] h-auto py-10 px-12 rounded-xl logincard">
      <div className="w-full h-auto">
        <h1 className="text-[1.475rem] text-white font-semibold mb-1">Login </h1>
        <p className="text-sm text-gray-50 font-normal mb-8">Glad you’re back.! </p>
      </div>
<div className="w-full h-auto mb-5">
  <label htmlFor="username" className="block text-white mb-1">Username</label>
  <input  type="text" id="username" name="username"
      placeholder="Enter your email"
      className="w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-white "/>
</div>
{/*  Password Field */}
<div className="w-full h-auto mb-5">
  <label htmlFor="password" className="block text-white mb-1">Password</label>
  <input  type="password" id="password" name="password"
      placeholder="Enter your Password"
      className="w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-white "/>
</div>
<div className="w-full h-auto flex items-center justify-between mb-5">
  <div className="flex items-center gap-x-2">
  <input type="checkbox" id="remember" className="w-4 h-4 accent-gray-200/20 border border-gray-200/20 rounded-md text-white " />
  <label htmlFor="remember" className="text-[0.875rem] text-white ">Remember me</label>
  </div>
  <div className="w-auto h-auto ">
    <Link className="text-white text-sm font-medium hover:underline ease-out duration-500">Forget Password</Link>
  </div>
</div>
<button className="login_btn w-full h-12 outline-none bg-white/70 rounded-md text-lg text-yellow-600 font-medium mb-7">Login</button>
{/* OR */}
<div className="w-full h-auto flex items-center gap-x-1 my-5 ">
<div className="w-1/2 h-[1.5px] bg-gray-200/40 rounded-md"></div>
<p className="text-sm text-gray-300 font-normal px-2">OR</p>
<div className="w-1/2 h-[1.5px] bg-gray-200/40 rounded-md"></div>
</div>
{/* Other-options to login */}
<div className="w-full h-auto flex justify-between gap-7 ">
  <div className="w-1/2 h-auto flex justify-between gap-7">
    <button className="w-full h-42 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-whitw rounded-md flex intems-center gap-x-2 hover:bg-gray-100/40 ease-in-out duration-700 ">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 42 42" fill="none">
  <g clip-path="url(#clip0_29_117)">
    <path d="M14.6311 1.38138C10.4346 2.83717 6.81562 5.60031 4.30562 9.26492C1.79562 12.9295 0.526938 17.3025 0.685917 21.7414C0.844897 26.1804 2.42316 30.4513 5.18889 33.927C7.95462 37.4027 11.762 39.8998 16.0519 41.0517C19.5297 41.9491 23.1735 41.9885 26.67 41.1665C29.8374 40.4551 32.7658 38.9332 35.1684 36.75C37.669 34.4083 39.4841 31.4294 40.4184 28.1334C41.4337 24.5491 41.6144 20.7799 40.9467 17.115H21.4167V25.2164H32.7272C32.5011 26.5085 32.0167 27.7417 31.303 28.8423C30.5892 29.9428 29.6607 30.888 28.5731 31.6214C27.1922 32.5353 25.6352 33.1501 24.0023 33.4261C22.3648 33.7306 20.6852 33.7306 19.0477 33.4261C17.3878 33.0833 15.8177 32.3983 14.4375 31.4147C12.2199 29.8449 10.5547 27.6147 9.67968 25.0425C8.7901 22.422 8.7901 19.5812 9.67968 16.9608C10.3026 15.124 11.3322 13.4516 12.6919 12.0684C14.2478 10.4565 16.2177 9.30428 18.3854 8.7382C20.553 8.17211 22.8347 8.21403 24.9802 8.85935C26.6562 9.3736 28.1889 10.2725 29.4558 11.4844C30.7311 10.2156 32.0042 8.94357 33.2752 7.66826C33.9314 6.98248 34.6467 6.32951 35.2931 5.62732C33.3589 3.82762 31.0887 2.42713 28.6125 1.50607C24.1031 -0.131305 19.169 -0.175308 14.6311 1.38138Z" fill="white"/>
    <path d="M14.6311 1.38139C19.1686 -0.176358 24.1027 -0.133513 28.6125 1.5028C31.0892 2.43012 33.3584 3.83734 35.2899 5.64374C34.6336 6.34592 33.9413 7.00217 33.2719 7.68467C31.9988 8.95561 30.7267 10.2222 29.4558 11.4844C28.1889 10.2725 26.6562 9.37361 24.9802 8.85936C22.8355 8.21178 20.5538 8.16744 18.3856 8.7312C16.2173 9.29497 14.2463 10.4451 12.6886 12.0553C11.329 13.4385 10.2993 15.1109 9.67642 16.9476L2.87439 11.6812C5.3091 6.85308 9.52466 3.15991 14.6311 1.38139Z" fill="#E33629"/>
    <path d="M1.06971 16.8985C1.43504 15.0865 2.04203 13.3317 2.87439 11.6813L9.67643 16.9608C8.78684 19.5813 8.78684 22.4221 9.67643 25.0425C7.41018 26.7925 5.14283 28.5513 2.87439 30.3188C0.791296 26.1723 0.155986 21.4479 1.06971 16.8985Z" fill="#F8BD00"/>
    <path d="M21.4167 17.1117H40.9467C41.6144 20.7767 41.4337 24.5459 40.4185 28.1301C39.4841 31.4261 37.669 34.405 35.1685 36.7467C32.9733 35.0339 30.7683 33.3342 28.5731 31.6214C29.6615 30.8873 30.5904 29.941 31.3042 28.8393C32.018 27.7376 32.502 26.5031 32.7272 25.2098H21.4167C21.4135 22.5126 21.4167 19.8122 21.4167 17.1117Z" fill="#587DBD"/>
    <path d="M2.87109 30.3187C5.13953 28.5687 7.40687 26.81 9.67312 25.0425C10.5499 27.6156 12.2174 29.8459 14.4375 31.4147C15.822 32.3937 17.3955 33.0732 19.0575 33.4097C20.695 33.7142 22.3747 33.7142 24.0122 33.4097C25.645 33.1337 27.202 32.5189 28.583 31.605C30.7781 33.3178 32.9831 35.0175 35.1783 36.7303C32.776 38.9147 29.8476 40.4377 26.6798 41.1501C23.1834 41.9721 19.5396 41.9327 16.0617 41.0353C13.3111 40.3009 10.7417 39.0061 8.51484 37.2323C6.15801 35.3608 4.23293 33.0025 2.87109 30.3187Z" fill="#319F43"/>
  </g>
  <defs>
    <clipPath id="clip0_29_117">
      <rect width="42" height="42" fill="white"/>
    </clipPath>
  </defs>
</svg>
    </button>
    <button className="w-full h-42 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-whitw rounded-md flex intems-center gap-x-2 hover:bg-gray-100/40 ease-in-out duration-700 ">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 42 42" fill="none">
  <path d="M21 0C9.3975 0 0 9.3975 0 21C0 30.2925 6.01125 38.1413 14.3587 40.9238C15.4087 41.1075 15.8025 40.4775 15.8025 39.9263C15.8025 39.4275 15.7763 37.7738 15.7763 36.015C10.5 36.9863 9.135 34.7287 8.715 33.5475C8.47875 32.9437 7.455 31.08 6.5625 30.5812C5.8275 30.1875 4.7775 29.2162 6.53625 29.19C8.19 29.1637 9.37125 30.7125 9.765 31.3425C11.655 34.5187 14.6738 33.6263 15.8813 33.075C16.065 31.71 16.6162 30.7913 17.22 30.2662C12.5475 29.7412 7.665 27.93 7.665 19.8975C7.665 17.6138 8.47875 15.7237 9.8175 14.2537C9.6075 13.7287 8.8725 11.5763 10.0275 8.68875C10.0275 8.68875 11.7863 8.1375 15.8025 10.8413C17.4825 10.3688 19.2675 10.1325 21.0525 10.1325C22.8375 10.1325 24.6225 10.3688 26.3025 10.8413C30.3188 8.11125 32.0775 8.68875 32.0775 8.68875C33.2325 11.5763 32.4975 13.7287 32.2875 14.2537C33.6263 15.7237 34.44 17.5875 34.44 19.8975C34.44 27.9562 29.5312 29.7412 24.8588 30.2662C25.62 30.9225 26.2763 32.1825 26.2763 34.1512C26.2763 36.96 26.25 39.2175 26.25 39.9263C26.25 40.4775 26.6438 41.1338 27.6938 40.9238C31.8628 39.5167 35.4856 36.8375 38.0521 33.2634C40.6185 29.6892 41.9993 25.4001 42 21C42 9.3975 32.6025 0 21 0Z" fill="white"/>
</svg>
    </button>
  </div>
</div>

<div className="w-full h-auto flex items-center justify-center gap-x-1">
  <p className="text-white text-sm font-medium">Don't have an account?</p>
  <Link className="text-white text-base font-medium hover:underline ease-out duration-500">Create New Account</Link> </div>
    </div>
    </div>

    </>
  )
}

