import { rental_api } from "@/api_factory/modules/rental";
import { useCustomToast } from '@/composables/core/useCustomToast'
import { useClearLocalStorage } from '@/composables/core/useClearLocalStorage';

const { clearLocalStorageExceptUserAndToken } = useClearLocalStorage();

// Call the function when you need to clear localStorage

import { useRouter } from 'vue-router'; // Import useRouter

const rentalApplicationPayload = ref({
  houseId: '',
  roomId: '',
  idDocument: {
    type: '',
    fileUrls: [],
  },
  questionAnswers: [],
});

export function useCreateRentalApplication() {
  const { showToast } = useCustomToast();
  const loading = ref(false);
  const route = useRoute()
  const router = useRouter(); // Initialize the router

  const createRentalApplication = async (id: string) => {
    loading.value = true;

    const payload = {
      houseId: rentalApplicationPayload.value.houseId,
      roomId: rentalApplicationPayload.value.roomId,
      idDocument: rentalApplicationPayload.value.idDocument,
      questionAnswers: rentalApplicationPayload.value.questionAnswers
    };

    try {
      const res = await rental_api.$_create(id, payload) as any;
      if (res.type !== 'ERROR') {
        showToast({
          title: "Success",
          message: 'Rental Application was mad successfully!',
          toastType: "success",
          duration: 3000
        });
        clearLocalStorageExceptUserAndToken();
        router.push(`/dashboard/listings/${route.params.id}/preview`)
  
      } else {
        showToast({
          title: "Error",
          message: res?.data?.error,
          toastType: "error",
          duration: 3000
        });
      }
    } catch (error) {
      showToast({
        title: "Error",
        message: error?.data?.message,
        toastType: "error",
        duration: 3000
      });
    } finally {
      loading.value = false; // Ensure loading is set to false after the request
    }
  };

  const setPayload = (data: any) => {
    rentalApplicationPayload.value.houseId = data.houseId;
    rentalApplicationPayload.value.roomId = data.roomId;
    rentalApplicationPayload.value.idDocument = data.idDocument;
    rentalApplicationPayload.value.questionAnswers = data.questionAnswers;
  };

  return {
    loading,
    createRentalApplication,
    rentalApplicationPayload,
    setPayload
  };
}