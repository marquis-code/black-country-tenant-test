<template>
  <main>
    <TopNavBar />
    <RentalApplication  />
    <!-- <section v-if="!loading">
      <section class="px-4 lg:px-0">
        <div class="flex justify-between max-w-7xl mx-auto items-center pt-6">
          <div class="flex items-center space-x-4">
            <svg
              @click="router.back()"
              class="cursor-pointer"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="18" fill="#EAEAEA" />
              <path
                d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <a href="#" class="text-gray-500 hover:text-gray-700 text-sm"
              >Listings</a
            >
            <span class="text-gray-400 text-sm">|</span>
            <h1 class="text-gray-800 font-semibold text-sm">
              {{ propertyObj.name }}
            </h1>
          </div>

          <div class="flex items-center space-x-3">
            <button @click="showShareModal = true" class=" ">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="36" height="36" rx="18" fill="#EAEAEA" />
                <path
                  d="M25.5 13.417C25.5 14.7977 24.3807 15.917 23 15.917C21.6192 15.917 20.5 14.7977 20.5 13.417C20.5 12.0363 21.6192 10.917 23 10.917C24.3807 10.917 25.5 12.0363 25.5 13.417Z"
                  stroke="#1D2739"
                  stroke-width="1.5"
                />
                <path
                  d="M15.5 18C15.5 19.3807 14.3807 20.5 13 20.5C11.6193 20.5 10.5 19.3807 10.5 18C10.5 16.6192 11.6193 15.5 13 15.5C14.3807 15.5 15.5 16.6192 15.5 18Z"
                  stroke="#1D2739"
                  stroke-width="1.5"
                />
                <path
                  d="M25.5 22.583C25.5 23.9638 24.3807 25.083 23 25.083C21.6192 25.083 20.5 23.9638 20.5 22.583C20.5 21.2023 21.6192 20.083 23 20.083C24.3807 20.083 25.5 21.2023 25.5 22.583Z"
                  stroke="#1D2739"
                  stroke-width="1.5"
                />
                <path
                  d="M15.2734 16.9585L20.6901 14.459M15.2734 19.0423L20.6901 21.5419"
                  stroke="#1D2739"
                  stroke-width="1.5"
                />
              </svg>
            </button>

            <button @click="toggleLike" class="">
              <svg
                v-if="propertyObj?.bookmarked"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#D42620" />
                <path
                  d="M27.4626 11.9942C24.7809 10.3492 22.4404 11.0121 21.0344 12.068C20.4578 12.501 20.1696 12.7174 20 12.7174C19.8304 12.7174 19.5422 12.501 18.9656 12.068C17.5596 11.0121 15.2191 10.3492 12.5374 11.9942C9.01807 14.1529 8.22172 21.2749 16.3395 27.2834C17.8857 28.4278 18.6588 29 20 29C21.3412 29 22.1143 28.4278 23.6605 27.2834C31.7783 21.2749 30.9819 14.1529 27.4626 11.9942Z"
                  fill="white"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>

              <svg
                v-else
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="black"
                  fill-opacity="0.6"
                />
                <path
                  d="M27.4626 11.9942C24.7809 10.3492 22.4404 11.0121 21.0344 12.068C20.4578 12.501 20.1696 12.7174 20 12.7174C19.8304 12.7174 19.5422 12.501 18.9656 12.068C17.5596 11.0121 15.2191 10.3492 12.5374 11.9942C9.01807 14.1529 8.22172 21.2749 16.3395 27.2834C17.8857 28.4278 18.6588 29 20 29C21.3412 29 22.1143 28.4278 23.6605 27.2834C31.7783 21.2749 30.9819 14.1529 27.4626 11.9942Z"
                  stroke="#F9FAFB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <div class="max-w-7xl mx-auto pb-8">
        <section v-if="!loading">

          <div class="max-w-7xl mx-auto py-8 p-4 lg:p-0 mt-6">
            <div class="relative">
              <img
                v-if="propertyObj?.images?.length"
                :src="propertyObj?.images[0]"
                alt="Rental Background"
                class="w-full h-[500px] rounded-lg object-cover"
              />
              <img
                v-else
                src="@/assets/img/rental-details.png"
                alt="Rental Background"
                class="w-full h-[500px] rounded-lg object-cover"
              />

              <div
                class="absolute inset-x-0 bottom-5 mx-auto w-full max-w-xl flex justify-between bg-black bg-opacity-50 py-2 px-4 rounded-lg text-white"
              >
                <div
                  v-for="(step, index) in steps"
                  :key="index"
                  class="flex flex-col items-center space-y-1"
                >
                  <div
                    :class="[
                      'w-8 h-8 flex items-center justify-center rounded-full border-2',
                      step.progressKey === currentProgress ? 'bg-[#5B8469] border-[#5B8469] text-white' : '',
                      steps.findIndex(
                        (s) => s.progressKey === currentProgress
                      ) >= index
                        ? 'bg-[#5B8469] border-[#5B8469] text-white'
                        : 'bg-[#D0D5DD] text-[#1D2739]',
                    ]"
                  >
                    <span>{{ index + 1 }}</span>
                  </div>
                  <p
                      class="text-center text-xs"
                    :class="{
                      'text-[#5B8469] text-xs': steps.findIndex((s) => s.progressKey === currentProgress) >= index,
                      'text-xs': true,
                      'text-[#5B8469]': currentProgress === 'agreement-assigned'
                    }"
                  >
                    {{ step.label }}
                  </p>
                </div>
              </div>
            </div>

            <div class="flex justify-around mt-8 gap-x-2 lg:px-20">
              <div class="flex flex-col items-center">
                <button
                  class="rounded-lg disabled:opacity-25 disabled:cursor-not-allowed transition"
                  :disabled="isScheduleTourDisabled"
                  @click="rescheduleTour"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="8" fill="#292929" />
                    <path
                      d="M13.668 20.1626C13.668 17.2578 13.668 15.8053 14.5027 14.9029C15.3375 14.0005 16.681 14.0005 19.368 14.0005H20.6346C23.3216 14.0005 24.6652 14.0005 25.4999 14.9029C26.3346 15.8053 26.3346 17.2578 26.3346 20.1626V20.505C26.3346 23.4099 26.3346 24.8623 25.4999 25.7648C24.6652 26.6672 23.3216 26.6672 20.6346 26.6672H19.368C16.681 26.6672 15.3375 26.6672 14.5027 25.7648C13.668 24.8623 13.668 23.4099 13.668 20.505V20.1626Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 17.3335H26"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.3359 17.3335H25.6693"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.9957 20.667H20.0017M19.9957 23.3337H20.0017M22.6594 20.667H22.6654M17.332 20.667H17.338M17.332 23.3337H17.338"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24 13.333V14.6663M16 13.333V14.6663"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <p class="text-gray-500 mt-2 text-xs text-center">Reschedule Tour</p>
              </div>

              <div class="flex flex-col items-center">
                <button
                  class="rounded-lg transition disabled:cursor-not-allowed disabled:opacity-25 bg-red-500 text-white"
                  :disabled="isCancelApplicationDisabled"
                  @click="showCancelModal = true"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="8" fill="#FBEAE9" />
                    <path
                      d="M24.6654 15.3335L15.332 24.6668M15.332 15.3335L24.6654 24.6668"
                      stroke="#BA110B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <p class="text-red-600 mt-2 text-xs text-center">Cancel application</p>
              </div>
              <div class="flex flex-col items-center">
                <button 
                  class="rounded-lg transition disabled:cursor-not-allowed disabled:opacity-25"
                  :disabled="propertyObj?.rentalApplication?.progress === 'application-sent' || propertyObj?.rentalApplication?.status === 'PENDING' || !isSignBtnEnabled"
                  @click="router.push(`/dashboard/listings/${route?.params?.id}/rental-applications/lease-agreement`)">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="8" fill="#292929"/>
                    <path d="M26.0311 14.0356C24.5791 12.4719 13.657 16.3025 13.666 17.701C13.6762 19.2869 17.9314 19.7748 19.1108 20.1057C19.8201 20.3047 20.01 20.5087 20.1735 21.2524C20.9142 24.6207 21.2861 26.296 22.1336 26.3334C23.4845 26.3931 27.4482 15.5617 26.0311 14.0356Z" stroke="white" stroke-width="1.5"/>
                    <path d="M19.666 20.3333L21.9993 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>  
                </button>
                <p class="text-gray-500 mt-2 text-xs text-center">Sign Agreement</p>
              </div>

              <div class="flex flex-col items-center">

                <button
                  class="rounded-lg transition disabled:cursor-not-allowed disabled:opacity-25"
                   :disabled="propertyObj?.rentalApplication?.progress === 'agreement-pending-signage' || isMakePaymentDisabled"
                  @click="proceed"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="8" fill="#292929" />
                    <path
                      d="M21.6693 20.0002C21.6693 20.9206 20.9231 21.6668 20.0026 21.6668C19.0821 21.6668 18.3359 20.9206 18.3359 20.0002C18.3359 19.0797 19.0821 18.3335 20.0026 18.3335C20.9231 18.3335 21.6693 19.0797 21.6693 20.0002Z"
                      stroke="white"
                      stroke-width="1.5"
                    />
                    <path
                      d="M24.6654 19.4281C24.4486 19.3967 24.226 19.3729 23.9987 19.3569M15.9987 20.644C15.7713 20.6281 15.5488 20.6042 15.332 20.5728"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.9987 25.0002C19.1104 25.4151 17.9434 25.6668 16.6654 25.6668C15.9548 25.6668 15.2785 25.589 14.6654 25.4486C13.6651 25.2194 13.332 24.6178 13.332 23.5908V16.4095C13.332 15.7529 14.0254 15.302 14.6654 15.4486C15.2785 15.589 15.9548 15.6668 16.6654 15.6668C17.9434 15.6668 19.1104 15.4151 19.9987 15.0002C20.887 14.5853 22.054 14.3335 23.332 14.3335C24.0426 14.3335 24.7189 14.4113 25.332 14.5518C26.3865 14.7933 26.6654 15.4137 26.6654 16.4095V23.5908C26.6654 24.2474 25.972 24.6984 25.332 24.5518C24.7189 24.4113 24.0426 24.3335 23.332 24.3335C22.054 24.3335 20.887 24.5852 19.9987 25.0002Z"
                      stroke="white"
                      stroke-width="1.5"
                    />
                  </svg>
                </button>
                <p class="text-gray-500 mt-2 text-xs text-center">Make Payment</p>
              </div>
            </div>
          </div>
          <PropertyDetails
            :scheduled="route.query.type === 'scheduled'"
            :showApplicationBtn="false"
            class="mt-10 px-6 lg:px-0"
            :property="propertyObj"
          />
        </section>
        <section v-else>
          <div class="rounded-md p-4 w-full mx-auto mt-10">
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-6 py-1">
                <div class="h-32 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div
                      class="h-32 w-full bg-slate-200 rounded col-span-2"
                    ></div>
                    <div
                      class="h-32 w-full bg-slate-200 rounded col-span-1"
                    ></div>
                  </div>
                  <div class="h-32 w-full bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SimilarProperties
          class="mt-16"
          v-if="!loadingSimilarProperties"
          :properties="propertyList"
        />
        <section v-else>
          <div class="rounded-md p-4 w-full mx-auto mt-10">
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-6 py-1">
                <div class="h-32 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div
                      class="h-32 w-full bg-slate-200 rounded col-span-2"
                    ></div>
                    <div
                      class="h-32 w-full bg-slate-200 rounded col-span-1"
                    ></div>
                  </div>
                  <div class="h-32 w-full bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section v-else>
      <div class="rounded-md p-4 max-w-7xl mx-auto w-full mx-auto mt-10">
        <div class="animate-pulse flex space-x-4">
          <div class="flex-1 space-y-6 py-1">
            <div class="h-32 bg-slate-200 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-32 w-full bg-slate-200 rounded col-span-2"></div>
                <div class="h-32 w-full bg-slate-200 rounded col-span-1"></div>
              </div>
              <div class="h-32 w-full bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CoreModal :isOpen="showShareModal" @close="showShareModal = false">
      <div
        class="bg-white p-6 w-full m-14 lg:m-0 rounded-lg lg:w-3/12 relative space-y-10"
        @click.stop
      >
        <div class="space-y-7">
          <div class="flex justify-between items-center">
            <div>
              <h2 class="text-lg pt-3 font-medium text-[#1D2739]">
                Share using
              </h2>
            </div>
            <div>
              <button class="" @click="showShareModal = false">
                <svga
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="4" fill="#F9FAFB" />
                  <path
                    d="M23 13L13 23M13 13L23 23"
                    stroke="#344054"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svga>
              </button>
            </div>

  
          </div>

          <div class="flex justify-between mb-6">
            <div class="flex flex-col items-center space-y-2">
              <svg
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30.125" cy="30" r="30" fill="#FEF7FF" />
                <rect
                  x="15.916"
                  y="15.085"
                  width="29.1667"
                  height="29.8295"
                  rx="8"
                  fill="url(#paint0_radial_6053_214487)"
                />
                <rect
                  x="15.916"
                  y="15.085"
                  width="29.1667"
                  height="29.8295"
                  rx="8"
                  fill="url(#paint1_radial_6053_214487)"
                />
                <rect
                  x="15.916"
                  y="15.085"
                  width="29.1667"
                  height="29.8295"
                  rx="8"
                  fill="url(#paint2_radial_6053_214487)"
                />
                <path
                  d="M37.7923 24.1407C37.7923 25.0233 37.0928 25.7387 36.2298 25.7387C35.3669 25.7387 34.6673 25.0233 34.6673 24.1407C34.6673 23.2582 35.3669 22.5427 36.2298 22.5427C37.0928 22.5427 37.7923 23.2582 37.7923 24.1407Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.5007 35.3268C33.3771 35.3268 35.709 32.9419 35.709 30.0001C35.709 27.0582 33.3771 24.6734 30.5007 24.6734C27.6242 24.6734 25.2923 27.0582 25.2923 30.0001C25.2923 32.9419 27.6242 35.3268 30.5007 35.3268ZM30.5007 33.1961C32.2265 33.1961 33.6257 31.7652 33.6257 30.0001C33.6257 28.235 32.2265 26.8041 30.5007 26.8041C28.7748 26.8041 27.3757 28.235 27.3757 30.0001C27.3757 31.7652 28.7748 33.1961 30.5007 33.1961Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.084 29.574C20.084 25.9941 20.084 24.2041 20.7652 22.8368C21.3644 21.6341 22.3205 20.6562 23.4965 20.0434C24.8335 19.3467 26.5837 19.3467 30.084 19.3467H30.9173C34.4176 19.3467 36.1678 19.3467 37.5048 20.0434C38.6808 20.6562 39.6369 21.6341 40.2361 22.8368C40.9173 24.2041 40.9173 25.9941 40.9173 29.574V30.4262C40.9173 34.0061 40.9173 35.796 40.2361 37.1634C39.6369 38.3661 38.6808 39.344 37.5048 39.9568C36.1678 40.6535 34.4176 40.6535 30.9173 40.6535H30.084C26.5837 40.6535 24.8335 40.6535 23.4965 39.9568C22.3205 39.344 21.3644 38.3661 20.7652 37.1634C20.084 35.796 20.084 34.0061 20.084 30.4262V29.574ZM30.084 21.4774H30.9173C32.7019 21.4774 33.915 21.479 34.8527 21.5574C35.766 21.6337 36.2331 21.772 36.5589 21.9418C37.343 22.3504 37.9804 23.0023 38.3798 23.8041C38.5459 24.1373 38.6811 24.6151 38.7558 25.5492C38.8324 26.5082 38.834 27.7489 38.834 29.574V30.4262C38.834 32.2513 38.8324 33.492 38.7558 34.451C38.6811 35.3851 38.5459 35.8628 38.3798 36.1961C37.9804 36.9979 37.343 37.6498 36.5589 38.0584C36.2331 38.2282 35.766 38.3665 34.8527 38.4428C33.915 38.5212 32.7019 38.5228 30.9173 38.5228H30.084C28.2994 38.5228 27.0863 38.5212 26.1486 38.4428C25.2353 38.3665 24.7682 38.2282 24.4424 38.0584C23.6583 37.6498 23.0209 36.9979 22.6215 36.1961C22.4554 35.8628 22.3202 35.3851 22.2455 34.451C22.1689 33.492 22.1673 32.2513 22.1673 30.4262V29.574C22.1673 27.7489 22.1689 26.5082 22.2455 25.5492C22.3202 24.6151 22.4554 24.1373 22.6215 23.8041C23.0209 23.0023 23.6583 22.3504 24.4424 21.9418C24.7682 21.772 25.2353 21.6337 26.1486 21.5574C27.0863 21.479 28.2994 21.4774 30.084 21.4774Z"
                  fill="white"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_6053_214487"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(26.3327 37.4571) rotate(-55.9754) scale(26.9935 26.7735)"
                  >
                    <stop stop-color="#B13589" />
                    <stop offset="0.79309" stop-color="#C62F94" />
                    <stop offset="1" stop-color="#8A3AC8" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_6053_214487"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(25.291 45.9798) rotate(-65.6239) scale(23.9769 23.6276)"
                  >
                    <stop stop-color="#E0E8B7" />
                    <stop offset="0.444662" stop-color="#FB8A2E" />
                    <stop offset="0.71474" stop-color="#E2425C" />
                    <stop offset="1" stop-color="#E2425C" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_6053_214487"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(14.3535 16.1503) rotate(-8.31232) scale(40.5299 8.85781)"
                  >
                    <stop offset="0.156701" stop-color="#406ADC" />
                    <stop offset="0.467799" stop-color="#6A45BE" />
                    <stop offset="1" stop-color="#6A45BE" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              <span class="text-sm text-[#1D2739]">Instagram</span>
            </div>
            <div class="flex flex-col items-center space-y-2">
              <svg
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30.375" cy="30" r="30" fill="#F0F2F5" />
                <rect
                  x="15.1992"
                  y="15"
                  width="30"
                  height="30"
                  rx="8"
                  fill="black"
                />
                <path
                  d="M34.527 23H36.7714L31.8682 28.6041L37.6364 36.23H33.1199L29.5824 31.6049L25.5347 36.23H23.289L28.5335 30.2358L23 23H27.6312L30.8287 27.2275L34.527 23ZM33.7393 34.8866H34.983L26.9554 24.2728H25.6209L33.7393 34.8866Z"
                  fill="white"
                />
              </svg>

              <span class="text-sm text-[#1D2739]">Twitter</span>
            </div>
            <div class="flex flex-col items-center space-y-2">
              <svg
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30.375" cy="30" r="30" fill="#F0F2F5" />
                <rect
                  x="15.1992"
                  y="15"
                  width="30"
                  height="30"
                  rx="8"
                  fill="black"
                />
                <path
                  d="M34.527 23H36.7714L31.8682 28.6041L37.6364 36.23H33.1199L29.5824 31.6049L25.5347 36.23H23.289L28.5335 30.2358L23 23H27.6312L30.8287 27.2275L34.527 23ZM33.7393 34.8866H34.983L26.9554 24.2728H25.6209L33.7393 34.8866Z"
                  fill="white"
                />
              </svg>

              <span class="text-sm text-[#1D2739]">WhatsApp</span>
            </div>
            <div class="flex flex-col items-center space-y-2">
              <svg
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30.875" cy="30" r="30" fill="#E6F1FF" />
                <rect
                  x="15.5"
                  y="15"
                  width="30"
                  height="30"
                  rx="8"
                  fill="#1877F2"
                />
                <path
                  d="M36.3359 34.3359L37.0039 30H32.8438V27.1875C32.8438 26.0039 33.4238 24.8438 35.2871 24.8438H37.1797V21.1523C37.1797 21.1523 35.4629 20.8594 33.8223 20.8594C30.3945 20.8594 28.1562 22.9336 28.1562 26.6953V30H24.3477V34.3359H28.1562V45H32.8438V34.3359H36.3359Z"
                  fill="white"
                />
              </svg>

              <span class="text-sm text-[#1D2739]">Facebook</span>
            </div>
          </div>
        </div>

        <div class="pt-4">
          <h3 class="font-medium mb-2 text-[#1D2739]">Copy Link</h3>
          <div class="relative">
            <input
              type="text"
              class="border-[0.5px] rounded-lg w-full py-4 px-4 text-[#667185] bg-[#E4E7EC]"
              :value="shareLink"
              readonly
            />
            <button
              class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full"
              @click="copyLink"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1309 11.0152C11.2623 11.8838 9.85408 11.8838 8.98541 11.0152C8.11684 10.1466 8.11684 8.73833 8.98541 7.8697L10.9514 5.90375C11.7804 5.07467 13.1012 5.03694 13.975 5.79055M13.7037 3.15146C14.5723 2.28285 15.9806 2.28285 16.8492 3.15146C17.7178 4.02006 17.7178 5.42836 16.8492 6.29696L14.8832 8.26291C14.0542 9.092 12.7335 9.12975 11.8597 8.37608"
                  stroke="#1D2739"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M17.5 10.8333C17.5 13.976 17.5 15.5474 16.5237 16.5237C15.5474 17.5 13.976 17.5 10.8333 17.5H9.16667C6.02397 17.5 4.45262 17.5 3.47631 16.5237C2.5 15.5474 2.5 13.976 2.5 10.8333V9.16667C2.5 6.02397 2.5 4.45262 3.47631 3.47631C4.45262 2.5 6.02397 2.5 9.16667 2.5"
                  stroke="#1D2739"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </CoreModal>

    <CoreModal :isOpen="showPaymentModal" @close="showPaymentModal = false">
      <div
        class="bg-white rounded-lg shadow-md max-w-lg w-full lg:w-1/2 mx-auto text-center"
      >
        <h2
          class="text-xl font-medium text-[#1D2739] text-start px-6 pt-6 mb-4"
        >
          Select Payment method
        </h2>
        <div class="space-y-4">
          <div
            v-for="(option, index) in paymentOptions"
            :key="index"
            class="flex px-6 justify-between border-b last:border-b-0 items-center p-3 cursor-pointer"
            @click="selectPaymentOption(option.value)"
          >
            <span class="text- text-[#1D2739]">{{ option.label }}</span>
            <input
              type="radio"
              :value="option.value"
              v-model="selectedOption"
              class="text-green-600 h-6 w-6"
            />
          </div>
        </div>
        <div class="flex justify-between mt-10 px-6 pb-6">
          <button
            @click="cancel"
            class="w-full mr-2 py-3.5 border border-gray-300 rounded-md text-[#292929] font-semibold text-sm hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            @click="proceed"
            :disabled="!selectedOption"
            class="w-full ml-2 py-3.5 bg-[#292929] text-white rounded-md text-sm hover:bg-gray-800"
          >
            Continue
          </button>
        </div>
      </div>
    </CoreModal>

    <CoreModalWithoutCloseBtn
      :isOpen="showCancelModal"
      @close="showCancelModal = false"
    >
      <div
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        @click.self="onCancel"
      >
        <div
          class="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-lg"
        >
          <div
            class="flex justify-center items-center bg-yellow-500 rounded-full w-16 h-16 mx-auto mb-4"
          >
            <svg
              width="65"
              height="64"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.921875"
                width="63.1513"
                height="64"
                rx="31.5756"
                fill="#F3A218"
              />
              <path
                d="M42.2031 32.375C42.2031 26.8521 37.7259 22.375 32.2031 22.375C26.6803 22.375 22.2031 26.8521 22.2031 32.375C22.2031 37.8978 26.6803 42.375 32.2031 42.375C37.7259 42.375 42.2031 37.8978 42.2031 32.375Z"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M32.4453 37.375V32.375C32.4453 31.9036 32.4453 31.6679 32.2988 31.5214C32.1524 31.375 31.9167 31.375 31.4453 31.375"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M32.1953 28.377H32.2043"
                stroke="white"
                stroke-width="3.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h2 class="text-lg font-semibold text-gray-700 mb-2">
            Cancel Rental Application
          </h2>
          <p class="text-gray-500 mb-6">
            Are you sure you want to cancel rental application process?
          </p>
          <div class="space-y-3">
            <button
              type="button"
              :disabled="cancelling"
              class="w-full disabled:cursor-not-allowed text-sm disabled:opacity-25 bg-[#292929] text-white py-3.5 rounded-md font-semibold"
              @click="onConfirm"
            >
              {{ cancelling ? "processing.." : "Yes, Proceed" }}
            </button>
            <button
              type="button"
              class="w-full bg-[#EBE5E0] text-gray-700 text-sm py-3.5 rounded-md font-semibold"
              @click="onCancel"
            >
              No, Continue
            </button>
          </div>
        </div>
      </div>
    </CoreModalWithoutCloseBtn>

    <CoreLoadingScreen :loading="initializing" />
    <CoreFullScreenLoader :visible="loading" text="Fetching rental details..." /> -->
  </main>
</template>

<script setup lang="ts">
import { useInitializeRentPayment } from "@/composables/modules/rentals/useInitializeRentPayment";
import { useFetchRental } from '@/composables/modules/rentals/fetchRentalsById'
import { useGetRental } from "@/composables/modules/rentals/useFetchRental";
// import { useCheckout } from "@/composables/modules/banks/useCheckout";
import { useCancelRental } from "@/composables/modules/rentals/cancelRentals";
import { useFetchProperty } from "@/composables/modules/property/fetchProperty";
import { useFetchSimilarProperty } from "@/composables/modules/property/fetchSimilarProperties";
import { useCustomToast } from "@/composables/core/useCustomToast";
import { useBookmarkProperty } from "@/composables/modules/property/bookmark";
const { bookmarkProperty, loading: favoriting } = useBookmarkProperty();
const { propertyList, loading: loadingSimilarProperties } =
  useFetchSimilarProperty();
  const { propertyObj, loading } = useFetchProperty();
const { cancelRental, loading: cancelling } = useCancelRental();
const { loadingRental, rentalObj } = useGetRental();
const { rentalObj: rental, loading: fetching } = useFetchRental()
const {
  initializeRentPayment,
  loading: initializing,
  payload,
  responseObj,
  setPayloadObj 
} = useInitializeRentPayment();
const router = useRouter()

const route = useRoute();
const { showToast } = useCustomToast();

const showCancelModal = ref(false);


const onCancel = () => {
  showCancelModal.value = false;
};

const onConfirm = async () => {
  await cancelRental(propertyObj.value.rentalApplication.id);
  showCancelModal.value = false;
};
// Property Images

const selectedOption = ref<string | null>(null);

const paymentOptions = [
  { label: "Pay with Transfer", value: "transfer" },
  { label: "Pay with Card", value: "card" },
  { label: "Pay with Linked Bank", value: "bank" },
];

const selectPaymentOption = (value: string) => {
  selectedOption.value = value;
};

const proceed = async () => {
  const payloadObj = {
      rentalApplicationId: propertyObj.value.rentalApplication?.id,
      rentAmount: propertyObj.value.rentalApplication?.room?.rentAmount
    };
    
    setPayloadObj(payloadObj);
    await initializeRentPayment();
};

const cancel = () => {
  selectedOption.value = null;
};

const showShareModal = ref(false);
// const showBookingModal = ref(true);

// Property Manager

// Similar Properties

// const handleFavorite = () => {};

const shareLink = ref(`https://www.blackcountry.com/${route.fullPath}`);
// Function to copy the link to the clipboard
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(shareLink.value);
    showToast({
      title: "Success",
      message: "Link copied!",
      toastType: "success",
      duration: 3000,
    });
  } catch (err) {
    showToast({
      title: "Error",
      message: "Failed to copy link",
      toastType: "error",
      duration: 3000,
    });
  }
};

definePageMeta({
  middleware: "auth",
});

const showPaymentModal = ref(false);

// const steps = ref([
//   { label: 'Tour Schedule', status: 'completed', progress: propertyObj?.value?.rentalApplication?.progress },
//   { label: 'Application sent', status: 'active', progress: propertyObj?.value?.rentalApplication?.progress },
//   { label: 'Agreement signed', status: 'pending', progress: propertyObj?.value?.rentalApplication?.progress },
//   { label: 'Payment made', status: 'pending', progress: propertyObj?.value?.rentalApplication?.progress }
// ]);

const steps = ref([
  {
    label: "Tour Schedule",
    status: "completed",
    progressKey: "tour-scheduled",
  },
  {
    label: "Application Sent",
    status: "active",
    progressKey: "application-sent",
  },
  {
    label: "Agreement Signed",
    status: "pending",
    progressKey: "agreement-signed",
  },
  { label: "Payment Made", status: "pending", progressKey: "payment-made" },
]);

const currentProgress = computed(
  () => propertyObj?.value?.rentalApplication?.progress || "tour-scheduled"
);

// Determine button states
const isCancelEnabled = computed(
  () => currentProgress.value === "application-sent"
);


const isScheduleTourCancelApplicationDisabled = computed(
  () => currentProgress.value === "agreement-pending-signage" || propertyObj?.value?.rentalLeaseAgreement?.status === 'PENDING_SIGNAGE'
);

const isScheduleTourDisabled = computed(() => {
  return currentProgress.value === "agreement-pending-signage" || propertyObj?.value?.rentalLeaseAgreement?.status === 'PENDING_SIGNAGE' ||  currentProgress.value === "agreement-signed" ||  currentProgress.value === "application-sent"
})

const isCancelApplicationDisabled = computed(() => {
  return currentProgress.value === "agreement-pending-signage" || propertyObj?.value?.rentalLeaseAgreement?.status === 'PENDING_SIGNAGE' ||  currentProgress.value === "agreement-signed" ||  currentProgress.value === "application-sent"
})

const isMakePaymentDisabled = computed(() => {
  return currentProgress.value === "agreement-pending-signage" || propertyObj?.value?.rentalLeaseAgreement?.status === 'PENDING_SIGNAGE' || currentProgress.value === "application-sent"
})

const isSignBtnEnabled = computed(() => {
  return currentProgress.value === "agreement-pending-signage" || propertyObj?.value?.rentalLeaseAgreement?.status === 'PENDING_SIGNAGE' ||  currentProgress.value !== "agreement-signed" ||  currentProgress.value === "application-sent"
})

const isRescheduleEnabled = computed(
  () => currentProgress.value === "application-sent"
);
const isSignAgreementEnabled = computed(
  () => currentProgress.value === "agreement-signed"
);
const isMakePaymentEnabled = computed(
  () => currentProgress.value === "payment-made"
);


// const cancelApplication = () => {
//   console.log('Cancel application clicked');
//   await cancelRental(proper)
//   // Your cancel logic here...
// };

const toggleLike = async () => {
  await bookmarkProperty(propertyObj.value.id);
};
</script>

<style scoped>
/* Additional styling for specific elements can be added here */
</style>
