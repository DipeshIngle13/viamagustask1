import tree from "./assets/Rectangle 4.png";
import googleLogo from "./assets/Group 9.png";
import facebookLogo from "./assets/Rectangle 17.png";

function App() {
  return (
    <div className="h-full w-full ">
      <div className="custom-background  flex  justify-center ">
        <div className="custom-card  flex flex-col items-center gap-6 mt-20 mx-3  sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
          <div className="custom-header">
            <img
              src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png"
              alt="amazon_logo"
              className="amazon-logo"
            />
          </div>
          <h2 className="text-3xl  text-[#20B716]">Login</h2>
          <div>
            <img
              src={tree}
              alt="tree_image"
              className="tree-img text-center items-center"
            />
          </div>
          <div className=" sm:w-[24.0625rem]  w-[20rem] ">
            <input
              type="email"
              className="border-b-[3px] w-full  border-[#E2E8F0] outline-none placeholder-[#20B716] placeholder-opacity-75 py-2 px-4 text-base font-semibold"
              placeholder="Email"
            />
            <div className=" sm:w-[24.0625rem] h-[1.5625rem] w-[20rem] ">
              <span className="text-[10px] font-semibold self-start text-[#EE2D6E]">
                The email field is required
              </span>
            </div>
            <input
              type="password"
              className="border-b-[3px] w-full  border-[#E2E8F0] outline-none placeholder-[#20B716] placeholder-opacity-75 py-2 px-4 text-base font-semibold"
              placeholder="Password"
            />
          </div>
          <button className="sm:w-[24.125rem] w-[20rem] h-[3.0625rem] bg-[#20B716]  text-white font-bold py-2 px-4 rounded-[40px]">
            Sign In
          </button>
          <div className="sm:w-[24.0625rem] h-[1.5625rem] w-[20rem]  font-medium text-xs ">
            <div className="flex flex-row justify-between items-center ">
              <p className=" text-[#000000]">Forgot Password?</p>
              <p className="text-[#D9185F] ">New User? Sign Up</p>
            </div>
            <p className=" text-[#000000] text-center">or?</p>
          </div>

          <div className="flex flex-col gap-4" >
            <button class=" bg-[#4285F4] text-white font-bold py-2 px-4 rounded sm:w-[24.125rem] h-[2.875rem] w-[20rem]  flex items-center">
              <img
                src={googleLogo}
                alt="google_icon"
                class="sm:w-8 sm:h-8 w-6 h-6 mr-2"
              />
              <span class="flex-grow">Continue with Google</span>
            </button>
            <button class=" bg-[#4285F4] text-white font-bold py-2 px-4 rounded sm:w-[24.125rem] h-[2.875rem] w-[20rem] flex items-center">
              <img
                src={facebookLogo}
                alt="facebook_icon"
                class="sm:w-8 sm:h-8 w-6 h-6 mr-2"
              />
              <span class="flex-grow">Continue with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
