import {useQuery} from "@tanstack/react-query";
import {usersApi} from "@shared/api/users.ts";

export const userKeys = {
    all: ['users'] as const,
};

export const useUsers = () => {
    return useQuery({
        queryKey: userKeys.all,
        queryFn: usersApi.getAll,
        staleTime: 5 * 60 * 1000, // 5 минут
    });
};