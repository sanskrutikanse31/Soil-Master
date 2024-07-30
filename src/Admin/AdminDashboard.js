import Navbar from "../Navbar";
function Dashboard() {
 
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
              Admin Dashboard
            </span>
          </a>
        </div>
        <Navbar userRole={"admin"}/>
      </nav>
   
     
      <section className="bg-center bg-no-repeat bg-cover h-screen w-full bg-[url('https://t3.ftcdn.net/jpg/02/86/02/22/360_F_286022279_zTU2R0YbUwWRS9esGbtB2dUuEnWaZ3pO.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Start Your Journey to Soil Success
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Explore your dashboard, track your progress, and take the first step
            towards a more sustainable and profitable farming practice.
          </p>
        </div>
      </section>
    </>
  );
}
export default Dashboard;
