import Logo from "@components/ui/Logo";

const Navbar = () => {
  return (
    <div className="z-10 max-h-[54px] w-full mx-auto h-full flex items-center justify-center fixed bg-white dark:bg-black top-0 left0 shadow-sm transition-all duration-300 ease-in-out dark:shadow-[#eeeeee3d] px-4 tablet:px-[32px]">
      <div className="flex items-center justify-between max-w-[650px] w-full">
        <nav className="flex items-center justify-between flex-[2] text-gray-700 dark:text-gray-200">
          <a
            href="/"
            className="text-sm transition-all duration-300 ease-in-out underline py-1 px-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-900"
          >
            /
          </a>
          <a
            href="/about"
            className="text-sm transition-all duration-300 ease-in-out underline py-1 px-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-900"
          >
            /about
          </a>
          <a
            href="/projects"
            className="text-sm transition-all duration-300 ease-in-out underline py-1 px-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-900"
          >
            /projects
          </a>
          <a
            href="https://blog.abhinavrajesh.com"
            className="text-sm transition-all duration-300 ease-in-out underline py-1 px-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-900"
          >
            blog &#x2197;
          </a>
        </nav>
        <div className="flex items-center justify-end flex-1 tablet:flex-[2]">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
