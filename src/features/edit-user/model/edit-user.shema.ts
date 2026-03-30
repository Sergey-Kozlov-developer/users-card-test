import { z } from 'zod';

export const editUserSchema = z.object({
    name: z.string().min(2, 'От 2 до 64 символов').max(64, 'От 2 до 64 символов'),
    username: z.string().min(2, 'От 2 до 64 символов').max(64, 'От 2 до 64 символов'),
    email: z.string().email('Некорректный email'),
    city: z.string().min(2, 'От 2 до 64 символов').max(64, 'От 2 до 64 символов'),
    phone: z.string().regex(/^\d+$/, 'Только цифры'),
    companyName: z.string().min(2, 'От 2 до 64 символов').max(64, 'От 2 до 64 символов'),
});

export type EditUserFormData = z.infer<typeof editUserSchema>;