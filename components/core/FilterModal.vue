<template>
    <div class="w-full custom-scroll h-[500px] overflow-y-auto relative max-w-md space-y-6">
  
     <section class="space-y-1">
      <div class="">
        <h3 class="font-medium text-sm bg-white py-3 bg-white border-[0.5px] border-gray-50 rounded-lg px-4 text-gray-900">Sort by</h3>
      </div>
  
      <div class="space-y-2 bg-white rounded-md border-[0.5px] border-gray-50 px-4">
        <div
          v-for="option in sortOptions"
          :key="option.id"
          class="flex justify-between items-center py-1 cursor-pointer"
          @click="handleSortChange(option)"
        >
          <label :for="option.id" class="text-sm text-gray-700 cursor-pointer">
            {{ option.label }}
          </label>
          
          <div class="relative flex items-center">
            <input
              :id="option.id"
              type="radio"
              :name="sortGroup"
              :value="option.id"
              :checked="selectedSort === option.id"
              class="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500 focus:ring-offset-0"
              @change="handleSortChange(option)"
            >
          </div>
        </div>
      </div>
     </section>
  
  
      <section class="space-y-1">
        <h3 class="font-medium text-sm bg-white py-3 border-[0.5px] border-gray-50 rounded-lg px-4 text-gray-900">Co-living with</h3>
        <div class="flex items-center space-x-4 bg-white rounded-md border-[0.5px] border-gray-50 py-4 px-2">
          <button @click="sharedCount = Math.max(0, sharedCount - 1)"
                  class="border-[0.5px] rounded-lg bg-white py-3 w-full border-gray-50 flex items-center justify-center">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.3333 10H4" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
          </button>
          <span class="w-20 text-center bg-[#EAEAEA] py-3 px-20 rounded-md">{{ sharedCount }}</span>
          <button @click="sharedCount++"
                  class="border-[0.5px] rounded-lg bg-white py-3 w-full border-gray-50 flex items-center justify-center">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.334 3.33301V16.6663" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.66699 10H17.0003" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
          </button>
        </div>
      </section>
  
      <section class="space-y-1">
        <h3 class="font-medium text-sm bg-white py-3 border-[0.5px] border-gray-50 rounded-lg px-4 text-gray-900">Property type</h3>
        <div v-for="type in propertyTypesList" :key="type.id"
         class="flex justify-between items-center">
      <label :for="'property-' + type.id" class="ml-3 text-sm text-gray-700">
        {{ type.name }}
      </label>
      <CoreCustomCheckbox
        :id="'property-' + type.id"
        :checkbox-id="type.id"
        v-model="selectedPropertyTypes"
      />
    </div>
        <!-- <div class="space-y-2 bg-white rounded-md border-[0.5px] border-gray-50 py-3 p-1">
          <div v-for="type in propertyTypesList" :key="type.id"
               class="flex justify-between items-center">
            <label :for="'property-' + type.id" class="ml-3 text-sm text-gray-700">{{ type.name }}</label>
            <CoreCustomCheckbox
               :id="'property-' + type.id"
               v-model="selectedPropertyTypes"
            />
          </div>
        </div> -->
      </section>
  
  
      <section class="space-y-1">
        <h3 class="font-medium text-sm bg-white py-3 border-[0.5px] border-gray-50 rounded-lg px-4 text-gray-900">Building amenities</h3>
        <div class="space-y-2 bg-white rounded-md border-[0.5px] border-gray-50 py-3 p-1">
          <div v-for="amenity in commonAreasList" :key="amenity.id"
               class="flex justify-between items-center">
            <label :for="'amenity-' + amenity.id" class="ml-3 text-sm text-gray-700">{{ amenity.name }}</label>
            <CoreCustomCheckbox
               :id="'amenity-' + amenity.id"
              :checkbox-id="amenity.name"
              v-model="selectedAmenities"
            />
  
          </div>
        </div>
      </section>
  
  
      <FiltersRangeSlider
        v-model="filters.priceRange"
        :min="200000"
        :max="3000000"
        :step="100000"
        title="Price range"
        prefix="₦ "
      />
  
     
      <FiltersRangeSlider
        v-model="filters.roomSizeRange"
        :min="200"
        :max="6000"
        :step="100"
        code="room"
        title="Average Room size range"
        prefix=""
        @update:selectedUnit="onUnitUpdate"
      />
  
  
      <div class="space-y-1">
        <h3 class="font-medium text-sm bg-white py-3 border-[0.5px] border-gray-50 rounded-lg px-4 text-gray-900">Bedrooms</h3>
        <div class="flex flex-wrap gap-2 bg-white rounded-md border-[0.5px] border-gray-50 py-3 p-1">
          <button
            class="px-4 py-2 text-xs rounded-md"
            :class="selectedBedrooms.length === 0 ? 'bg-[#5B8469] text-white' : 'border border-gray-100 text-gray-700'"
            @click="selectedBedrooms = []"
          >
            Any
          </button>
          <button
            v-for="num in bedroomOptions"
            :key="num"
            class="px-4 py-2 text-xs rounded-md"
            :class="selectedBedrooms.includes(num) ? 'bg-[#5B8469] text-white' : 'border-[0.5px] border-gray-100 text-gray-700'"
            @click="selectedBedrooms = selectedBedrooms.includes(num) ? selectedBedrooms.filter(n => n !== num) : [...selectedBedrooms, num]"
          >
            {{ num }}
          </button>
          <button
            class="px-4 py-2 text-xs rounded-md border-[0.5px] border-gray-100 text-gray-700"
            :class="selectedBedrooms.includes(9) ? 'bg-[#5B8469] text-white' : ''"
            @click="selectedBedrooms = selectedBedrooms.includes(9) ? selectedBedrooms.filter(n => n !== 9) : [...selectedBedrooms, 9]"
          >
            9+
          </button>
        </div>
      </div>
  
      <div class="space-y-1">
        <h3 class="font-medium text-sm bg-white py-3 border-[0.5px] border-gray-50 rounded-lg px-4 text-gray-900">Bathrooms</h3>
        <div class="flex items-center space-x-4 bg-white rounded-md border-[0.5px] border-gray-50 py-3 p-1">
          <button @click="bathroomCount = String(Math.max(1, parseInt(bathroomCount || '1') - 1))"
                  class="border-[0.5px] rounded-lg bg-white py-3 w-full border-gray-50 flex items-center justify-center">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.3333 10H4" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
          </button>
          <span class="w-20 text-center bg-[#EAEAEA] py-3 px-20 rounded-md">{{ bathroomCount || 1 }}</span>
          <button @click="bathroomCount = String(parseInt(bathroomCount || '1') + 1)"
                  class="border-[0.5px] rounded-lg bg-white py-3 w-full border-gray-50 flex items-center justify-center">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.334 3.33301V16.6663" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.66699 10H17.0003" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
          </button>
        </div>
      </div>
  
  
      <div class="space-y-1">
    <h3 class="font-medium text-sm bg-white py-3 border-[0.5px] border-gray-50 rounded-lg px-4 text-gray-900">Pets</h3>
    <div class="space-y-2 bg-white rounded-md border-[0.5px] border-gray-50 py-3 p-1">
      <div v-for="pet in petsList" :key="pet.id" class="flex justify-between items-center">
        <label :for="'pet-' + pet.id" class="ml-3 text-sm text-gray-700">{{ pet.name }}</label>
        <div class="relative flex items-center">
          <CoreCustomCheckbox
               :id="'pet-' + pet.id"
              :checkbox-id="pet.name"
              v-model="selectedPets"
            />
          <!-- <input
            :id="'pet-' + pet.id"
            type="checkbox"
            :checked="selectedPets.has(pet.id)"
            @change="togglePetSelection(pet.id)"
            class="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-0 focus:ring-offset-0"
          > -->
        </div>
      </div>
    </div>
     </div>
  
     <div class="pb-20">
        <h3 class="font-medium text-sm bg-white py-3 border-[0.5px] border-gray-50 mb-3 rounded-lg px-4 text-gray-900">Move-in-date</h3>
        <div class="border-[0.5px] bg-white border-gray-100 rounded-lg p-3">
          <input type="date" class="w-full border-[0.5px] text-sm rounded-lg p-2 py-3 mt-3" v-model="filters.availabilityFrom" />
        <div class="flex justify-between items-center items-center pt-6">
          <h3 class="text-sm">Available Now</h3>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" v-model="filters.availableNow" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
          </label>
        </div>
        </div>
      </div>
  
      <section class="">
    <div id="footer" class="flex justify-between items-center items-center gap-x-6 mx-auto w-full">
      <button 
        @click="resetFilterOptions" 
        class="text-gray-800 font-semibold border w-full text-sm py-3 rounded-lg"
      >
        Reset
      </button>
      <button 
        :disabled="loading" 
        @click="handleSubmit" 
        class="bg-[#292929] disabled:cursor-not-allowed w-full disabled:opacity-25 text-sm text-white rounded-lg py-3"
      >
        {{ loading ? 'processing..' : 'Apply Filter' }}
      </button>
    </div>
  </section>
  
  <!-- <section class="fixed w-full bottom-0 bg-white z-[999999px]">
    <div id="footer" class="flex justify-between items-center gap-x-6 w-full">
          <button @click="resetFilterOptions" class="text-[#EBE5E0] w-full text-gray-800 font-semibold border text-sm py-3 rounded-lg">Reset</button>
          <button :disabled="loading" @click="handleSubmit" class="bg-[#292929] w-full disabled:cursor-not-allowed disabled:opacity-25 text-sm text-white rounded-lg py-3">{{ loading ? 'processing..' : 'Apply Filter' }}</button>
      </div>
  </section> -->
    </div>
  </template>
  
  <script setup lang="ts">
  import { useGetCommonAreas } from '@/composables/modules/property/fetchCommonAreas'
  import { useFilterProperty } from '@/composables/modules/property/useFilterListings'
  import { useGetPropertyTypes } from '@/composables/modules/property/fetchPropertyTypes'
  const { filterProperty, setPayload, loading, filterPayload } = useFilterProperty()
  const { propertyTypesList } = useGetPropertyTypes()
  const { loading: fetchingCommonAreas, commonAreasList } = useGetCommonAreas()
  import { ref, reactive, watch } from 'vue'
  
  interface FilterPayload {
    order: Array<{ field: string; value: string }>;
    sharedCount: number;
    houseTypeIds: string[];
    priceMin: number;
    priceMax: number;
    bedroomsCount: number[];
    bathroomsCount: number[];
    roomSizeMin: number;
    roomSizeMax: number;
    roomSizeUnit: string;
    amenities: string[];
    pets: string[];
    availabilityFrom: string
    isFurnished: [boolean, boolean],
    availableNow: boolean
  }
  
  const onUnitUpdate = (newUnit: any) => {
    filterPayload.value.roomSizeUnit = newUnit
        // console.log('Unit updated:', newUnit);
      }
  
  const filters = reactive({
    sortBy: '',
    priceRange: [200000, 3000000] as [number, number],
    roomSizeRange: [200, 6000] as [number, number],
    coLiving: 1,
    features: {} as Record<string, boolean>,
    bedrooms: [] as number[],
    propertyTypes: {} as Record<string, boolean>,
    amenities: {} as Record<string, boolean>,
    availabilityFrom: "",
    moveInDate: '',
    availableNow: false
  });
  
  // Reactive filters object
  const filtersObj = reactive({ ...filters });
  
  // Function to reset filters to their default state
  const resetFilterOptions = () => {
    Object.assign(filtersObj, filters);
    emit('close')
    window.location.reload()
  };
  
  const selectedSortOptions = ref<Set<string>>(new Set())
  const selectedPropertyTypes = ref<Set<string>>(new Set())
  const selectedAmenities = ref<Set<string>>(new Set())
  const selectedFeatures = ref<Set<string>>(new Set())
  
  const sharedCount = ref(0)
  const priceRange = reactive({
    min: 200000,
    max: 3000000
  })
  const roomSize = reactive({
    min: 1000,
    max: 3000
  })
  const selectedBedrooms = ref<number[]>([])
  const bathroomCount = ref('')
  const moveInDate = ref('')
  const availableNow = ref(false)
  
  const bedroomOptions = Array.from({ length: 8 }, (_, i) => i + 1)
  
  const toggleOption = (set: Set<string>, id: string) => {
    if (id === 'all') {
      if (set.has('all')) {
        set.clear()
      } else {
        set.clear()
        set.add('all')
      }
      return
    }
  
    if (set.has('all')) {
      set.delete('all')
    }
  
    if (set.has(id)) {
      set.delete(id)
    } else {
      set.add(id)
    }
  }
  
  
  const getFilterPayload = (): FilterPayload => {
      const selectedOption = sortOptions.value.find(option => option.id === selectedSort.value)
    const orderConfig = selectedOption?.sortConfig || {
      field: SortField.PRICE,
      value: SortValue.DESC
    }
  
    return {
      order: [{
        field: orderConfig.field,
        value: orderConfig.value
      }],
      sharedCount: sharedCount.value,
      houseTypeIds: Array.from(selectedPropertyTypes.value),
      priceMin:filters.priceRange[0],
      priceMax: filters.priceRange[1],
      bedroomsCount: selectedBedrooms.value,
      bathroomsCount: bathroomCount.value ? [parseInt(bathroomCount.value)] : [],
      roomSizeMin: filters.roomSizeRange[0],
      roomSizeMax: filters.roomSizeRange[1],
      availabilityFrom: filters.availabilityFrom,
      availableNow: filters.availableNow,
      isFurnished: filters.isFurnished,
      roomSizeUnit: filterPayload?.value?.roomSizeUnit,
      amenities: Array.from(selectedAmenities.value),
      pets: Array.from(selectedPets.value) // Add selected pets
    }
  }
  
  
  watch([selectedSortOptions, selectedPropertyTypes, selectedAmenities, selectedFeatures,
        sharedCount, priceRange, roomSize, selectedBedrooms, bathroomCount, moveInDate, availableNow],
    () => {
      const payload = getFilterPayload()
      console.log('Filter payload:', payload)
    }
  )
  
  enum SortField {
    CREATED_AT = 'createdAt',
    PRICE = 'price'
  }
  
  enum SortValue {
    DESC = 'DESC',
    ASC = 'ASC'
  }
  
  interface SortConfig {
    field: SortField
    value: SortValue
  }
  
  interface SortPayload {
    order: SortConfig[]
  }
  
  interface SortOption {
    id: string
    label: string
    sortConfig: SortConfig | null
  }
  
  // Reactive state
  const selectedSort = ref<string>('all')
  const sortGroup = ref<string>('sortOptions')
  const currentSortConfig = ref<SortPayload | null>(null)
  
  // Sort options with corresponding configurations
  const sortOptions = ref<SortOption[]>([
    {
      id: 'all',
      label: 'All',
      sortConfig: null
    },
    {
      id: 'newest',
      label: 'Newest Listings',
      sortConfig: {
        field: SortField.CREATED_AT,
        value: SortValue.DESC
      }
    },
    {
      id: 'oldest',
      label: 'Oldest Listings',
      sortConfig: {
        field: SortField.CREATED_AT,
        value: SortValue.ASC
      }
    },
    {
      id: 'lowest',
      label: 'Lowest price to highest price',
      sortConfig: {
        field: SortField.PRICE,
        value: SortValue.ASC
      }
    },
    {
      id: 'highest',
      label: 'Highest price to lowest price',
      sortConfig: {
        field: SortField.PRICE,
        value: SortValue.DESC
      }
    }
  ])
  
  const handleSortChange = (option: SortOption) => {
    selectedSort.value = option.id
    
    // Update the main filter payload
    const payload = getFilterPayload()
    if (option.sortConfig) {
      payload.order = [{
        field: option.sortConfig.field,
        value: option.sortConfig.value
      }]
    } else {
      // Default sorting when 'All' is selected
      payload.order = [{
        field: SortField.PRICE,
        value: SortValue.DESC
      }]
    }
    
    // setPayload(payload)
    // filterProperty()
  }
  
  // Watch for sort changes
  watch(selectedSort, (newSort) => {
    const selectedOption = sortOptions.value.find(option => option.id === newSort)
    if (selectedOption) {
      handleSortChange(selectedOption)
    }
  })
  
  const emit = defineEmits(['close', 'result'])
  
  const handleSubmit = async () => {
    const payload = getFilterPayload()
    setPayload(payload)
    const result = await filterProperty()
    emit('result',result)
    emit('close')
  }
  
  const petsList = [
    { id: 'dog', name: 'Dog' },
    { id: 'cat', name: 'Cat' },
    { id: 'rabbit', name: 'Rabbit' },
    { id: 'hamster', name: 'Hamster' },
    { id: 'parrot', name: 'Parrot' }
  ]
  
  const selectedPets = ref(new Set<string>()) // Initialize with an empty Set
  
  const togglePetSelection = (petId: string) => {
    if (selectedPets.value.has(petId)) {
      selectedPets.value.delete(petId)
    } else {
      selectedPets.value.add(petId)
    }
  }
  
  // Watch specific properties and log changes
  watch(
    () => filters.priceRange,
    (newVal) => {
      console.log('Parent priceRange updated:', newVal);
    },
    { immediate: true }
  );
  
  watch(
    () => filters.roomSizeRange,
    (newVal) => {
      console.log('Parent roomSizeRange updated:', newVal);
    },
    { immediate: true }
  );
  
  </script>
  
  
  <style scoped>
  /* Custom checkbox styles */
  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    background-color: white;
    border: 2px solid #d1d5db;
    padding: 0;
  }
  
  input[type="checkbox"]:checked {
    background-color: #059669;
    border-color: #059669;
  }
  
  /* 
  input[type="date"]::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  } */
  
  /* Ensure proper spacing on mobile */
  @media (max-width: 640px) {
    .space-y-6 > * + * {
      margin-top: 1.5rem;
    }
    
    .space-y-3 > * + * {
      margin-top: 0.75rem;
    }
    
    .space-y-2 > * + * {
      margin-top: 0.5rem;
    }
  }
  
  
  </style>
  
  