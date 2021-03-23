import Head from 'next/head'

export default function Home() {
  
  return (
    <div className="bg-gray-100 dark:bg-dark-main">
      <Head>
        <title>Facebook Clone</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
      </Head>
      
      <nav className="flex flex-col md:flex-row items-center justify-center md:justify-between h-max md:h-14 w-full shadow fixed bg-white dark:bg-dark-second top-0 z-50 border-b dark:border-dark-third">
        {/* Left Navigation */} 
        <div className="flex itesm-center justify-between w-full md:w-max px-4 py-2">
          <a href="#" className="mr-2 hidden md:inline-block">
            <img src="#" alt="Facebook logo" className="w-24 sm:w-20 lg:w-10 h-auto" />
          </a>
          <a href="#" className="inline-block md:hidden">
            <img src="#" alt="Facebook logo mb" className="w-32 h-auto" />
          </a>
          <div className="flex items-center justify-between space-x-1">
            <div className="relative bg-gray-100 dark:bg-dark-third px-2 py-2 w-10 h-10 sm:w-11 sm:h-11 lg:h-10 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer">
              <i className="bx bx-search-alt-2 text-xl xl:mr dark:text-dark-txt"></i>
              <input type="text" placeholder="Search Facebook..." className="outline-none bg-transparent hidden xl:inline-block" />
            </div>
            <div className="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark-text-dark-txt">
              <i className="bx bxl-messenger"></i>
            </div>
            <div className="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark-text-dark-txt">
              <i className="bx bxs-moon"></i>
            </div>
          </div>
        </div>
        {/* END OF Left Navigation */}

        <ul>
            <li>
              <a href="#">
                <i class="bx bxs-home"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-movie-play"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-store"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-group"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-layout"></i>
              </a>
            </li>
        </ul>

        <ul>
          <li>
            <a href="#" >
              <img src="#" alt="Profile picture" />
              <span>Patryk</span>
            </a>
          </li>
          <li>
            <div>
              <i className="bx bx-plus"></i>
            </div>
          </li>
          <li>
            <div>
              <i className="bx bxs-bell"></i>
            </div>
          </li>
          <li>
            <div>
              <i className="bx bxs-moon"></i>
            </div>
          </li>
        </ul>

      </nav>

      <main>
        

      </main>

      <footer>
        footer
      </footer>
    </div>
  )
}
