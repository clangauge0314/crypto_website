const Navbar = () => {
  return (
    <div className="w-full h-16 bg-[#150726]/90 backdrop-blur fixed top-2 left-0 flex items-center justify-between px-[10%] py-10 shadow-lg border-b border-purple-500/20">
        <div className="flex items-center gap-3 ml-4 hover:scale-105 transition-transform cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white animate-pulse">
                <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" />
            </svg>
            <span className="text-2xl font-bold text-white">CryptoVault</span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-lg font-medium text-white">
            <a href="#" className="hover:text-purple-200 transition-colors hover:scale-110 transform">Home</a>
            <a href="#" className="hover:text-purple-200 transition-colors hover:scale-110 transform">About</a>
            <div className="relative group">
                <a href="#" className="hover:text-purple-200 transition-colors hover:scale-110 transform">Calculator</a>
                <div className="absolute hidden group-hover:block top-full left-0 mt-2 bg-[#150726]/90 backdrop-blur rounded-lg shadow-lg border border-purple-500/20">
                    <a href="#" className="block px-4 py-2 hover:bg-purple-500/10 hover:text-purple-200 transition-colors">Mining Calculator</a>
                    <a href="#" className="block px-4 py-2 hover:bg-purple-500/10 hover:text-purple-200 transition-colors">Referral Calculator</a>
                </div>
            </div>
            <a href="#" className="hover:text-purple-200 transition-colors hover:scale-110 transform">Blog</a>
            <a href="#" className="hover:text-purple-200 transition-colors hover:scale-110 transform">Contact</a>
        </div>

        <div className="flex items-center gap-4">
            <div className="relative">
                <select className="appearance-none pl-10 pr-8 py-2.5 bg-[#150726] border border-purple-500/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 hover:border-purple-400 transition-all cursor-pointer font-medium">
                    <option value="en" className="flex items-center">
                        🇺🇸 English
                    </option>
                    <option value="ko" className="flex items-center">
                        🇰🇷 한국어
                    </option>
                    <option value="jp" className="flex items-center">
                        🇯🇵 日本語
                    </option>
                    <option value="cn" className="flex items-center">
                        🇨🇳 中文
                    </option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            <button className="px-8 py-2.5 bg-gradient-to-r from-[#4a148c] to-[#7b1fa2] text-white font-bold rounded-xl hover:from-[#6a1b9a] hover:to-[#9c27b0] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40">
                Connect Wallet
            </button>
        </div>
    </div>
  )
}

export default Navbar