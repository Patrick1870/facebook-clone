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
      
      {/* NAV */}
      <nav className="flex flex-col md:flex-row items-center justify-center md:justify-between h-max md:h-14 w-full shadow fixed bg-white dark:bg-dark-second top-0 z-50 border-b dark:border-dark-third">
        {/* Left Navigation */} 
        <div className="flex items-center justify-between w-full md:w-max px-4 py-2">
          <a href="#" className="mr-2 hidden md:inline-block">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 sm:w-20 lg:w-10 h-auto">
              <g clip-path="url(#clip0)">
              <path d="M16.6667 39.7778C7.22222 38.1111 0 29.8889 0 20C0 9 9 0 20 0C31 0 40 9 40 20C40 29.8889 32.7778 38.1111 23.3333 39.7778L22.2222 38.8889H17.7778L16.6667 39.7778Z" fill="url(#paint0_linear)"/>
              <path d="M27.7791 25.5556L28.668 20.0001H23.3346V16.1112C23.3346 14.5556 23.8902 13.3334 26.3346 13.3334H28.8902V8.22228C27.4457 8.00005 25.8902 7.77783 24.4457 7.77783C19.8902 7.77783 16.668 10.5556 16.668 15.5556V20.0001H11.668V25.5556H16.668V39.6667C17.7791 39.8889 18.8902 40.0001 20.0013 40.0001C21.1124 40.0001 22.2235 39.8889 23.3346 39.6667V25.5556H27.7791Z" fill="url(#paint1_linear)"/>
              </g>
              <defs>
              <linearGradient id="paint0_linear" x1="20" y1="38.6156" x2="20" y2="0" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0062E0"/>
              <stop offset="1" stop-color="#19AFFF"/>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="20.2791" y1="39.0586" x2="20.2791" y2="7.77783" gradientUnits="userSpaceOnUse">
              <stop stop-color="white"/>
              <stop offset="1" stop-color="white"/>
              </linearGradient>
              <clipPath id="clip0">
              <rect width="40" height="40" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </a>
          <a href="#" className="inline-block md:hidden">
            <svg width="272" height="53" viewBox="0 0 272 53" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-auto">
              <g clip-path="url(#clip0)">
              <path d="M21.9692 8.83765C18.778 8.83765 17.8553 10.2554 17.8553 13.3824V18.5698H26.3674L25.5142 26.9504H17.8587V52.3838H7.64348V26.9504H0.761719V18.5698H7.64348V13.5248C7.64348 5.07134 11.0463 0.60609 20.5406 0.60609C22.5302 0.601416 24.5181 0.719787 26.4931 0.960528V8.84759L21.9692 8.83765Z" fill="#1876F2"/>
              <path d="M27.0742 34.4102C27.0742 24.9629 31.5419 17.8477 40.9039 17.8477C46.0098 17.8477 49.1283 20.4778 50.6197 23.7439V18.5698H60.405V52.3838H50.6197V47.2693C49.201 50.5387 46.0098 53.096 40.9039 53.096C31.5419 53.096 27.0742 45.9907 27.0742 36.5335V34.4102ZM37.2861 36.6858C37.2861 41.7275 39.1281 45.0665 43.8801 45.0665C48.0667 45.0665 50.1931 42.0123 50.1931 37.1827V33.7874C50.1931 28.9578 48.0667 25.9037 43.8801 25.9037C39.1281 25.9037 37.2861 29.2427 37.2861 34.2843V36.6858Z" fill="#1876F2"/>
              <path d="M81.6819 17.8574C85.6502 17.8574 89.4102 18.712 91.4671 20.1298L89.1986 27.3775C87.0708 26.3626 84.7462 25.8288 82.3895 25.814C76.857 25.814 74.4529 29.0106 74.4529 34.4829V36.4704C74.4529 41.9426 76.8636 45.1392 82.3895 45.1392C84.7462 45.1244 87.0708 44.5906 89.1986 43.5757L91.4671 50.8201C89.4102 52.2412 85.6535 53.0958 81.6819 53.0958C69.6942 53.0958 64.2344 46.6298 64.2344 36.2584V34.6949C64.2344 24.3234 69.6942 17.8574 81.6819 17.8574Z" fill="#1876F2"/>
              <path d="M92.8125 36.7689V33.7877C92.8125 24.198 98.2723 17.8877 109.41 17.8877C119.906 17.8877 124.516 24.2808 124.516 33.6585V39.0579H103.021C103.236 43.6755 105.293 45.7359 110.958 45.7359C114.79 45.7359 118.832 44.9541 121.811 43.6755L123.68 50.6814C120.984 52.1058 115.452 53.1691 110.561 53.1691C97.634 53.1658 92.8125 46.7064 92.8125 36.7689ZM103.024 32.3633H115.366V31.512C115.366 27.8186 113.878 24.887 109.413 24.887C104.8 24.8903 103.024 27.8053 103.024 32.3501V32.3633Z" fill="#1876F2"/>
              <path d="M162.371 36.5436C162.371 45.9909 157.834 53.1061 148.482 53.1061C143.376 53.1061 139.831 50.5489 138.413 47.2794V52.3939H128.77V1.5901L138.981 0.662598V23.2538C140.47 20.2726 143.733 17.8545 148.486 17.8545C157.848 17.8545 162.375 24.9598 162.375 34.417L162.371 36.5436ZM152.16 34.1984C152.16 29.4383 150.318 25.8873 145.423 25.8873C141.237 25.8873 138.968 28.8685 138.968 33.7015V37.2525C138.968 42.0821 141.237 45.0667 145.423 45.0667C150.318 45.0667 152.16 41.5157 152.16 36.7556V34.1984Z" fill="#1876F2"/>
              <path d="M165.789 36.3279V34.6253C165.789 24.8899 171.322 17.8574 182.598 17.8574C193.875 17.8574 199.411 24.8899 199.411 34.6253V36.3279C199.411 46.06 193.878 53.0958 182.602 53.0958C171.325 53.0958 165.789 46.06 165.789 36.3279ZM189.196 33.9131C189.196 29.4379 187.35 25.8869 182.582 25.8869C177.813 25.8869 175.984 29.4379 175.984 33.9131V37.0401C175.984 41.5153 177.83 45.0663 182.582 45.0663C187.334 45.0663 189.196 41.5153 189.196 37.0401V33.9131Z" fill="#1876F2"/>
              <path d="M202.805 36.3279V34.6253C202.805 24.8899 208.337 17.8574 219.614 17.8574C230.891 17.8574 236.423 24.8899 236.423 34.6253V36.3279C236.423 46.06 230.891 53.0958 219.614 53.0958C208.337 53.0958 202.805 46.06 202.805 36.3279ZM226.211 33.9131C226.211 29.4379 224.366 25.8869 219.614 25.8869C214.862 25.8869 213.02 29.4379 213.02 33.9131V37.0401C213.02 41.5153 214.862 45.0663 219.614 45.0663C224.366 45.0663 226.211 41.5153 226.211 37.0401V33.9131Z" fill="#1876F2"/>
              <path d="M250.465 34.6952L260.535 18.57H271.385L260.819 35.265L271.812 52.384H260.961L250.465 35.8215V52.384H240.25V1.5901L250.465 0.662598V34.6952Z" fill="#1876F2"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="272" height="53" fill="white"/>
              </clipPath>
              </defs>
            </svg>
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

        {/* MAIN NAV */}
        <ul className="flex w-full lg:w-max items-center justify-center">
            <li className="w-1/5 md:w-max text-center">
              <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block text-blue-500 border-b-4 border-blue-500">
                <i class="bx bxs-home"></i>
              </a>
            </li>
            <li className="w-1/5 md:w-max text-center">
              <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative">
                <i class="bx bx-movie-play"></i>
                <span className="text-xs absolute top-0 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">2</span>
              </a>
            </li>
            <li className="w-1/5 md:w-max text-center">
              <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative">
                <i class="bx bx-store"></i>
              </a>
            </li>
            <li className="w-1/5 md:w-max text-center">
              <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative">
                <i class="bx bx-group"></i>
              </a>
            </li>
            <li className="w-1/5 md:w-max text-center hidden md:inline-block">
              <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative">
                <i class="bx bx-layout"></i>
                <span className="text-xs absolute top-0 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">8</span>
              </a>
            </li>
            <li className="w-1/5 md:w-max text-center inline-block md:hidden">
              <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative">
                <i class="bx bx-menu"></i>
              </a>
            </li>
        </ul>
        {/* END OF Main Nav */}

        {/* Right Nav */}
        <ul className="hidden md:flex mx-4 items-center justify-center">
          <li className="h-full hidden xl:flex">
            <a href="#" className="inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1">
              <img src="#" alt="Profile picture"  className="rounded-full h-7 w-7"/>
              <span className="mx-2 font-semibold dark:text-dark-txt"></span>
              <span>Patryk</span>
            </a>
          </li>
          <li>
            <div className="text-xl hidden xl:grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
              <i className="bx bx-plus"></i>
            </div>
          </li>
          <li>
            <div className="text-xl hidden xl:grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
              <i className="bx bxl-messenger"></i>
            </div>
          </li>
          <li>
            <div className="text-xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
              <i className="bx bxs-bell"></i>
              <span className="text-xs absolute top-0 right-0 bg-red-500 text-white font-semibold rounded-full px-1 text-center">4</span>
            </div>
          </li>
          <li>
            <div className="text-xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
              <i className="bx bxs-moon"></i>
            </div>
          </li>
        </ul>
        {/* END OF Right Nav */}
      </nav>
      {/* END OF NAV */}

      {/* MAIN */}
      <div className="flex justify-center h-screen">
        {/* Left Menu */}
        <div className="w-1/5 pt-16 h-full hidden xl:flex flex-col fixed top-0 left-0">
          <ul>
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                <img src="#" alt="Profile picture" className="w-10 h-10 rounded-full" />
                <span className="font-semibold">Patryk Adach</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                <img src="#" alt="Friends picture" className="w-10 h-10 rounded-full" />
                <span className="font-semibold">Friends</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                <img src="#" alt="Profile picture" className="w-10 h-10 rounded-full" />
                <span className="font-semibold">Pages</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                <img src="#" alt="Profile picture" className="w-10 h-10 rounded-full" />
                <span className="font-semibold">Memories</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                <img src="#" alt="Profile picture" className="w-10 h-10 rounded-full" />
                <span className="font-semibold">Groups</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                <span className="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
                  <i className="bx bx-chevron-down"></i>
                </span>
                <span className="font-semibold">See more</span>
              </a>
            </li>
            <li className="border-b border-gray-200 dark:border-dark-third mt-6"></li>
          </ul>

          <div className="flex justify-between items-center py-4 px-2 h-4 group">
            <span className="font-semibold text-gray-500 text-lg dark:text-dark-txt">Your shortcuts</span>
            <span className="text-blue cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-sm gropu-hover:inline-block">Edit</span>
          </div>
 
          <ul className="p-2">
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                <img src="#" alt="Profile picture" className="w-10 h-10 rounded-lg" />
                <span className="font-semibold">Traiding JAM Session PL</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                <img src="#" alt="Profile picture" className="w-10 h-10 rounded-lg" />
                <span className="font-semibold">Rozmowy o Startupach</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                <span className="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
                  <i className="bx bx-chevron-down"></i>
                </span>
                <span className="font-semibold">See more</span>
              </a>
            </li>
          </ul>
          <div className="mt-auto p-6 text-sm text-gray-500 dark:text-dark-txt">
            <a href="#">Privacy</a>
            <span>.</span>
            <a href="#">Terms</a>
            <span>.</span>
            <a href="#">Advertising</a>
            <span>.</span>
            <a href="#">Cookies</a>
            <span>.</span>
            <a href="#">Ad choices</a>
            <span>.</span>
            <a href="#">More</a>
            <span>.</span>
            <span>Facebook &copy; 2021</span>
          </div>
        </div>
        {/* END OF Left Menu */}

        {/* Main Content */}
        <div className="w-full lg:w-2/3 xl:w-2/5 pt-32 lg:pt-16 px-2">
          {/* STORY */}
          <div className="relative flex space-x-2 pt-4">
            <div className="w-1/4 sm:w-1/6 h-44 rounded-xl shadow overflow-hidden flex flex-col group cursor-pointer">
              <div className="h-3/5 overflow-hidden">
                <img src="profile_photo.png" alt="First Picture" className="group-hover:transform group-hover:scale-110 transition-all duration-700 " />
              </div>
              <div className="flex-1 relative flex items-end justify-center pb-2 text-center leading-none dark:bg-dark-second dark:text-dark-txt">
                <span className="font-semibold">Create a <br/> Story</span>
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white grid place-items-center text-2xl border-4 border-white dark:border-dark-second absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <i className="bx bx-plus"></i>
                </div>
              </div>
            </div>
            <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
              <div className="relative h-full group cursor-pointer">
                <img src="firstStory.jpg" alt="Story iamge" className="group-hover:transform group-hover:scale-110 transition-all duration:700 h-full w-full" />
                <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
                <span className="absolute bottom-0 left-0 pb-2 font-semibold text-white">
                  Your story
                </span>
                <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                  <img src="avatar-3.jpg" alt="profile picture" className="w-full h-full object-cover" />
                </div> 
              </div>
            </div>
            <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
              <div className="relative h-full group cursor-pointer">
                <img src="firstStory.jpg" alt="Story iamge" className="group-hover:transform group-hover:scale-110 transition-all duration:700 h-full w-full" />
                <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
                <span className="absolute bottom-0 left-0 pb-2 font-semibold text-white">
                  Your story
                </span>
                <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                  <img src="avatar-3.jpg" alt="profile picture" />
                </div>
              </div>
            </div>
            <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
              <div className="relative h-full group cursor-pointer">
                <img src="firstStory.jpg" alt="Story iamge" className="group-hover:transform group-hover:scale-110 transition-all duration:700 h-full w-full" />
                <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
                <span className="absolute bottom-0 left-0 pb-2 font-semibold text-white">
                  Your story
                </span>
                <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                  <img src="avatar-3.jpg" alt="profile picture" />
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {/* END OF STORY */}
        </div>
        {/* END OF Main Content */}

        {/* Right Menu */}
        <div className="w-1/5 pt-16 h-full hidden xl:flex px-4 fixed top-0 right-0">
          <div class="h-full">
            <div className="flex justify-between items-center px-2 pt-4">
              <span className="font-semibold text-gray-500 text-lg dark:text-dark-txt">Friend requests</span>
              <span className="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2   rounded-md">See All</span>
            </div>

            <div className="p-2">
              <a href="#" className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg transition-all">
                <img src="#" alt="profile picture" className="w-16 h-16 rounded-full" />
                <div className="flex-1 h-full">
                  <div className="dark:text-dark-txt">
                    <span className="font-semibold">Patryk Adach</span>
                    <span className="float-right">5d</span>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <div className="w-1/2 bg-blue-500 cursor-pointer py-1 text-center font-semibold text-white rounded-lg">
                      Confirm
                    </div>
                    <div className="w-1/2 bg-gray-300 cursor-pointer py-1 text-center font-semibold text-black rounded-lg">
                      Delete
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="border-b border-gray-200 dark:border-dark-third mt-6"></div>
            {/* Contacts */}
              <div className="flex justify-between items-center px-4 pt-4 text-gray-500 dark:text-dark-txt">
                <span className="font-semibold text-lg">Contacts</span>
                <div className="flex space-x-1">
                  <div className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
                    <i className="bx bx-search-alt-2"></i>
                  </div>
                  <div className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </div>
                </div>
              </div>
              <ul className="p-2">
                <li>
                  <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                    <div className="relative">
                      <img src="/avatar-3.jpg" alt="Friends profile pictures" className="rounded-full w-10 h-10 object-cover" />
                      <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div>
                      <span className="font-semibold">Chin Chin</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                    <div className="relative">
                      <img src="/avatar-3.jpg" alt="Friends profile pictures" className="rounded-full w-10 h-10 object-cover" />
                      <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div>
                      <span className="font-semibold">Chin Chin</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                    <div className="relative">
                      <img src="/avatar-3.jpg" alt="Friends profile pictures" className="rounded-full w-10 h-10 object-cover" />
                      <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div>
                      <span className="font-semibold">Chin Chin</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                    <div className="relative">
                      <img src="/avatar-3.jpg" alt="Friends profile pictures" className="rounded-full w-10 h-10 object-cover" />
                      <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div>
                      <span className="font-semibold">John Doe</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                    <div className="relative">
                      <img src="/avatar-3.jpg" alt="Friends profile pictures" className="rounded-full w-10 h-10 object-cover" />
                      <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div>
                      <span className="font-semibold">John Doe</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                    <div className="relative">
                      <img src="/avatar-3.jpg" alt="Friends profile pictures" className="rounded-full w-10 h-10 object-cover" />
                      <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div>
                      <span className="font-semibold">John Doe</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                    <div className="relative">
                      <img src="/avatar-3.jpg" alt="Friends profile pictures" className="rounded-full w-10 h-10 object-cover" />
                      <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div>
                      <span className="font-semibold">John Doe</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                    <div className="relative">
                      <img src="/avatar-3.jpg" alt="Friends profile pictures" className="rounded-full w-10 h-10 object-cover" />
                      <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                    </div>
                    <div>
                      <span className="font-semibold">John Doe</span>
                    </div>
                  </div> 
                </li>
              </ul>
            {/* END OF Contacts */}
          </div>
        </div>
        {/* END OF Right Menu */}

      </div>
      {/* END OF MAIN */}

      <footer>
        footer
      </footer>
    </div>
  )
}
