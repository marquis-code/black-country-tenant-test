import { ref, onMounted } from 'vue';
import { property_api } from '@/api_factory/modules/property';
import { useRoute, useRouter } from 'vue-router';

export const useFetchProperty = () => {
    const propertyObj = ref<Record<string, any>>({});
    const loading = ref(false);
    const error = ref<string | null>(null);

    const route = useRoute();
    const router = useRouter();
    
    // Ensure that route.params.id is reactive
    const queryId = ref<string | null>(null);

    const { $_fetch_single_property } = property_api;

    const getProperty = async () => {
        console.log(route, 'route here')
        // Ensure the queryId is available before making the API call
        if (!queryId.value) {
            error.value = 'No property ID available to fetch';
            return;
        }

        loading.value = true;
        error.value = null; // Reset error state
        try {
            const res = await $_fetch_single_property(route.params.id) as any;
            console.log(res, 'here oo')
            if (res.type !== 'ERROR') {
                console.log(res.data.data, 'here oodaasdsdsddsdsd')
                propertyObj.value = res.data;
            } else {
                error.value = 'Failed to fetch property data';
            }
        } catch (e) {
            error.value = 'An unexpected error occurred';
        } finally {
            loading.value = false;
        }
    };

    onMounted(() => {
        // Assign the route parameter value to queryId if available
        if (route.params.id) {
            queryId.value = route.params.id as string;
            getProperty();
        } else {
            // Optionally, redirect or show an error if no ID is available
            error.value = 'No property ID available in the route';
            console.warn('No property ID found in route parameters.');
            router.push('/error'); // Redirect to an error page if necessary
        }
    });

    return { propertyObj, loading, error, getProperty };
};