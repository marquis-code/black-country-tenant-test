<template>
    <!-- component -->
<div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <div class="w-1/4 bg-white border-r border-gray-300">
      <!-- Sidebar Header -->

        <div class="flex items-center space-x-4 p-2 bg-gray-100 rounded-lg">
          <!-- Search Input -->
          <div class="relative flex items-center bg-gray-200 rounded-lg px-3 py-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 11-1.414 1.415l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              type="text"
              class="bg-gray-200 text-gray-600 ml-2 focus:outline-none w-full"
              placeholder="Search"
            />
          </div>
      
          <!-- Add Button -->
          <button
            class="bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
      
          <!-- Filter Button -->
          <button
            class="bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-5.4 5.4a1 1 0 00-.293.707V17a1 1 0 01-.293.707l-2 2A1 1 0 0110 19v-6.586a1 1 0 00-.293-.707l-5.4-5.4A1 1 0 014 6V4z"
              />
            </svg>
          </button>
        </div>      
      <header class="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
        <h1 class="text-2xl font-semibold">Chat Web</h1>
        <div class="relative">
          <button id="menuButton" class="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path d="M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z" />
            </svg>
          </button>
          <!-- Menu Dropdown -->
          <div id="menuDropdown" class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden">
            <ul class="py-2 px-3">
              <li><a href="#" class="block px-4 py-2 text-gray-800 hover:text-gray-400">Option 1</a></li>
              <li><a href="#" class="block px-4 py-2 text-gray-800 hover:text-gray-400">Option 2</a></li>
              <!-- Add more menu options here -->
            </ul>
          </div>
        </div>
      </header>
    
      <!-- Contact List -->
      <div class="overflow-y-auto h-screen p-3 mb-9 pb-20">
        <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full">
          </div>
          <div class="flex-1">
            <h2 class="text-lg font-semibold">Alice</h2>
            <p class="text-gray-600">Hoorayy!!</p>
          </div>
        </div>
        
        <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img src="https://placehold.co/200x/ad922e/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full">
          </div>
          <div class="flex-1">
            <h2 class="text-lg font-semibold">Martin</h2>
            <p class="text-gray-600">That pizza place was amazing! We should go again sometime. 🍕</p>
          </div>
        </div>
        
        <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img src="https://placehold.co/200x/2e83ad/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full">
          </div>
          <div class="flex-1">
            <h2 class="text-lg font-semibold">Charlie</h2>
            <p class="text-gray-600">Hey, do you have any recommendations for a good movie to watch?</p>
          </div>
        </div>
        
        <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img src="https://placehold.co/200x/c2ebff/0f0b14.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full">
          </div>
          <div class="flex-1">
            <h2 class="text-lg font-semibold">David</h2>
            <p class="text-gray-600">I just finished reading a great book! It was so captivating.</p>
          </div>
        </div>
        
        <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img src="https://placehold.co/200x/e7c2ff/7315d1.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full">
          </div>
          <div class="flex-1">
            <h2 class="text-lg font-semibold">Ella</h2>
            <p class="text-gray-600">What's the plan for this weekend? Anything fun?</p>
          </div>
        </div>
        
        <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img src="https://placehold.co/200x/ffc2e2/ffdbdb.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full">
          </div>
          <div class="flex-1">
            <h2 class="text-lg font-semibold">Fiona</h2>
            <p class="text-gray-600">I heard there's a new exhibit at the art museum. Interested?</p>
          </div>
        </div>
        
        <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img src="https://placehold.co/200x/f83f3f/4f4f4f.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full">
          </div>
          <div class="flex-1">
            <h2 class="text-lg font-semibold">George</h2>
            <p class="text-gray-600">I tried that new cafe downtown. The coffee was fantastic!</p>
          </div>
        </div>
        
        <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img src="https://placehold.co/200x/dddddd/999999.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full">
          </div>
          <div class="flex-1">
            <h2 class="text-lg font-semibold">Hannah</h2>
            <p class="text-gray-600">I'm planning a hiking trip next month. Want to join?</p>
          </div>
        </div>
        
        <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img src="https://placehold.co/200x/70ff33/501616.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full">
          </div>
          <div class="flex-1">
            <h2 class="text-lg font-semibold">Ian</h2>
            <p class="text-gray-600">Let's catch up soon. It's been too long!</p>
          </div>
        </div>
        
        <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img src="https://placehold.co/200x/30916c/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full">
          </div>
          <div class="flex-1">
            <h2 class="text-lg font-semibold">Jack</h2>
            <p class="text-gray-600">Remember that hilarious joke you told me? I can't stop laughing!</p>
          </div>
        </div>
        
        
      </div>
    </div>
    
    <!-- Main Chat Area -->
    <div class="flex-1">
        <!-- Chat Header -->
        <header class="bg-white p-4 text-gray-700">
            <h1 class="text-2xl font-semibold">Alice</h1>
        </header>
        
        <!-- Chat Messages -->
        <div class="h-screen overflow-y-auto p-4 pb-36">
           <!-- Incoming Message -->
           <div class="flex mb-4 cursor-pointer">
             <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
               <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-8 h-8 rounded-full">
             </div>
             <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
               <p class="text-gray-700">Hey Bob, how's it going?</p>
             </div>
           </div>
           
           <!-- Outgoing Message -->
           <div class="flex justify-end mb-4 cursor-pointer">
             <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
               <p>Hi Alice! I'm good, just finished a great book. How about you?</p>
             </div>
             <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
               <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" class="w-8 h-8 rounded-full">
             </div>
           </div>
           
           <!-- Incoming Message -->
           <div class="flex mb-4 cursor-pointer">
             <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
               <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-8 h-8 rounded-full">
             </div>
             <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
               <p class="text-gray-700">That book sounds interesting! What's it about?</p>
             </div>
           </div>
           
           <!-- Outgoing Message -->
           <div class="flex justify-end mb-4 cursor-pointer">
             <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
               <p>It's about an astronaut stranded on Mars, trying to survive. Gripping stuff!</p>
             </div>
             <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
               <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" class="w-8 h-8 rounded-full">
             </div>
           </div>
           
           <!-- Incoming Message -->
           <div class="flex mb-4 cursor-pointer">
             <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
               <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-8 h-8 rounded-full">
             </div>
             <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
               <p class="text-gray-700">I'm intrigued! Maybe I'll borrow it from you when you're done?</p>
             </div>
           </div>
           
           <!-- Outgoing Message -->
           <div class="flex justify-end mb-4 cursor-pointer">
             <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
               <p>Of course! I'll drop it off at your place tomorrow.</p>
             </div>
             <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
               <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" class="w-8 h-8 rounded-full">
             </div>
           </div>
           
           <!-- Incoming Message -->
           <div class="flex mb-4 cursor-pointer">
             <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
               <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-8 h-8 rounded-full">
             </div>
             <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
               <p class="text-gray-700">Thanks, you're the best!</p>
             </div>
           </div>
           
           <!-- Outgoing Message -->
           <div class="flex justify-end mb-4 cursor-pointer">
             <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
               <p>Anytime! Let me know how you like it. 😊</p>
             </div>
             <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
               <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" class="w-8 h-8 rounded-full">
             </div>
           </div>
           
           <!-- Incoming Message -->
           <div class="flex mb-4 cursor-pointer">
             <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
               <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-8 h-8 rounded-full">
             </div>
             <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
               <p class="text-gray-700">So, pizza next week, right?</p>
             </div>
           </div>
           
           <!-- Outgoing Message -->
           <div class="flex justify-end mb-4 cursor-pointer">
             <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
               <p>Absolutely! Can't wait for our pizza date. 🍕</p>
             </div>
             <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
               <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" class="w-8 h-8 rounded-full">
             </div>
           </div>
           <!-- Incoming Message -->
           <div class="flex mb-4 cursor-pointer">
             <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
               <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-8 h-8 rounded-full">
             </div>
             <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
               <p class="text-gray-700">Hoorayy!!</p>
             </div>
           </div>
           
        </div>
        
        <!-- Chat Input -->
        <footer class="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
            <div class="flex items-center">
                <input type="text" placeholder="Type a message..." class="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500">
                <button class="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Send</button>
            </div>
        </footer>
    </div>
</div>
</template>