
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 py-3 bg-[#202124] border-b border-[#3c4043] sticky top-0 z-50">
        <img src="./image/google.png" className="h-7" alt="Google" />
        <div className="flex items-center w-full max-w-2xl mx-6 bg-[#303134] rounded-full px-4 py-2">
          <input
            type="text"
            value="youtube"
            className="bg-transparent text-white flex-grow outline-none text-sm"
            placeholder="Search Google or type a URL"
          />
          <img src="./image/clear.png" className="w-4 h-4 mx-2 cursor-pointer bg-[#202124]" />
          <img src="./image/mic.png" className="w-5 h-5 mx-2 cursor-pointer bg-[#202124]" />
          <img src="./image/lens.png" className="w-5 h-5 mx-2 cursor-pointer bg-[#202124]" />
          <img src="./image/search.png" className="w-5 h-5 mx-2 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-4">
          <img src="./image/lab.png" className="w-8 h-8" />
          <img src="./image/app.png" className="w-8 h-8" />
          <img src="./image/profil.png" className="w-8 h-8 rounded-full" />
        </div>
      </nav>

      <div className="flex items-center space-x-6 px-6 text-sm border-b border-[#3c4043] mt-2">
        <a href="#" className="text-blue-400 border-b-2 border-blue-400 pb-2">All</a>
        <a href="#" className="hover:text-blue-400">Videos</a>
        <a href="#" className="hover:text-blue-400">Short videos</a>
        <a href="#" className="hover:text-blue-400">Images</a>
        <a href="#" className="hover:text-blue-400">News</a>
        <a href="#" className="hover:text-blue-400">Shopping</a>
        <a href="#" className="hover:text-blue-400">More</a>
        <span className="ml-auto text-sm text-gray-400">Tools</span>
      </div>

      <div className="px-6 py-6 max-w-3xl mx-auto">
        <div className="mb-6">
          <p className="text-xs text-gray-400">https://www.youtube.com</p>
          <a href="#" className="text-purple-400 text-xl hover:underline">YouTube</a>
          <p className="text-sm text-gray-300 mt-1">19 Sept 2020 — Share your videos with friends, family, and the world.</p>
        </div>

        <div className="space-y-6">
          <div>
            <a href="#" className="text-blue-400 hover:underline">Music</a>
            <p className="text-gray-400 text-sm">With the YouTube Music app, enjoy over 100 million songs at ...</p>
          </div>
          <div>
            <a href="#" className="text-blue-400 hover:underline">YouTube History</a>
            <p className="text-gray-400 text-sm">Share your videos with friends, family, and the world.</p>
          </div>
          <div>
            <a href="#" className="text-blue-400 hover:underline">Channel</a>
            <p className="text-gray-400 text-sm">YouTube's Official Channel helps you discover what's new ...</p>
          </div>
          <div>
            <a href="#" className="text-blue-400 hover:underline">Library</a>
            <p className="text-gray-400 text-sm">Library. Home. Shorts. Library. Sign in. You're not signed in ...</p>
          </div>
          {/* Extra entries for scrolling */}
          <div>
            <a href="#" className="text-blue-400 hover:underline">Lorem Ipsum 1</a>
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, enim erat facilisis urna, nec dictum massa.</p>
          </div>
          <div>
            <a href="#" className="text-blue-400 hover:underline">Lorem Ipsum 2</a>
            <p className="text-gray-400 text-sm">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus.</p>
          </div>
          <div>
            <a href="#" className="text-blue-400 hover:underline">Lorem Ipsum 3</a>
            <p className="text-gray-400 text-sm">Suspendisse potenti. Nullam ac erat euismod, dictum massa at, cursus enim. Etiam euismod, nunc ut laoreet dictum.</p>
          </div>
          <div>
            <a href="#" className="text-blue-400 hover:underline">Lorem Ipsum 4</a>
            <p className="text-gray-400 text-sm">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.</p>
          </div>
          <div>
            <a href="#" className="text-blue-400 hover:underline">Lorem Ipsum 5</a>
            <p className="text-gray-400 text-sm">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit.</p>
          </div>
          <div>
            <a href="#" className="text-blue-400 hover:underline">Lorem Ipsum 6</a>
            <p className="text-gray-400 text-sm">Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus.</p>
          </div>
          <div>
            <a href="#" className="text-blue-400 hover:underline">Lorem Ipsum 7</a>
            <p className="text-gray-400 text-sm">Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
