import type {User, ApiUser} from "@shared/types/user.ts";
import {apiClient} from "@shared/api/client.ts";

const transformUser = (apiUser: ApiUser): User => ({
    id: apiUser.id,
    name: apiUser.name,
    username: apiUser.username,
    email: apiUser.email,
    city: apiUser.address?.city || 'Не указан',
    phone: apiUser.phone,
    companyName: apiUser.company?.name || 'Не указана',
});

export const usersApi = {
    getAll: async (): Promise<User[]> => {
        const apiUsers = await apiClient.get<ApiUser[]>('/users');
        return apiUsers.map(transformUser);
    },
};
