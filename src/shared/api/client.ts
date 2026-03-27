const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const apiClient = {
    get: async <T>(endpoint: string): Promise<T> => {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        if(!response.ok) throw new Error(response.statusText);
        return response.json();
    }
}