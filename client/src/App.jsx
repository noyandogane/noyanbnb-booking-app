import './App.css'

function App() {
  
  return (
    <div>
      <header className='flex justify-between p-5'>
        {/*Logo */}
        <a href="" className='flex items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
          </svg>
          <span className='font-bold text-xl'>noyanbnb</span>            
        </a>
        {/* Search bar
        add space left and psbly right*/}

        <div className='flex border border-gray-300 items-center rounded-full p-3 pl-5 pr-3 gap-5 shadow-md shadow-gray-200'>
          <div>Anywhere</div>
          <div className="border-[1px] h-7 border-zinc-300 shadow-lg"></div>
          <div>Any week</div>
          <div className="border-[1px] h-7 border-zinc-300 shadow-lg"></div>
          <div>Add guests</div>
          {/*Search icon*/}
          <button className='bg-red text-white p-2 rounded-full '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            
          </button>
        </div>
        {/* Hamburger and user icons */}
        <div className='flex border border-gray-300 items-center rounded-full p-3 gap-5'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>          
        </div>
        
      </header>
    </div>
  )
}

export default App
