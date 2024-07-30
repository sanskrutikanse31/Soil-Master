import Navbar from "../Navbar";

function Home() {
 
  return (
    <>
     

      <nav className="bg-lime-300  border-green-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              User Home
            </span>
          </a>
        </div>
            <Navbar userRole={"user"}/>
      </nav>

      <section className="bg-center bg-no-repeat bg-cover h-screen w-full bg-[url('https://t3.ftcdn.net/jpg/02/86/02/22/360_F_286022279_zTU2R0YbUwWRS9esGbtB2dUuEnWaZ3pO.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
           Welcome!
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Explore your dashboard, track your progress, and take the first step
            towards a more sustainable and profitable farming practice.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <div
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-500 hover:bg-lime-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
            <div
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </div>
          </div>
        </div>
      </section>

      {/* welcome message  */}
    </>
  );
}
export default Home;
