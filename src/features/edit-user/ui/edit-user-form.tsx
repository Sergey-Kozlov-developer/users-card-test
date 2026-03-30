import type {User} from "@shared/types/user.ts";
import {type EditUserFormData, editUserSchema} from "@features/edit-user/model/edit-user.shema.ts";
import {useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';


interface Props {
    user: User;
    onSubmit: (data: EditUserFormData) => void;
}

export const EditUserForm = ({ user, onSubmit }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EditUserFormData>({
        resolver: zodResolver(editUserSchema),
        defaultValues: {
            name: user.name,
            username: user.username,
            email: user.email,
            city: user.city,
            phone: user.phone.replace(/\D/g, ''),
            companyName: user.companyName,
        },
    });
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="edit-form">
            <div className="edit-form__field">
                <label className="edit-form__label">Имя</label>
                <input
                    className={`edit-form__input ${errors.name ? 'edit-form__input--error' : ''}`}
                    {...register('name')}
                />
                {errors.name && <span className="edit-form__error">{errors.name.message}</span>}
            </div>

            <div className="edit-form__field">
                <label className="edit-form__label">Никнейм</label>
                <input
                    className={`edit-form__input ${errors.username ? 'edit-form__input--error' : ''}`}
                    {...register('username')}
                />
                {errors.username && <span className="edit-form__error">{errors.username.message}</span>}
            </div>

            <div className="edit-form__field">
                <label className="edit-form__label">Почта</label>
                <input
                    className={`edit-form__input ${errors.email ? 'edit-form__input--error' : ''}`}
                    {...register('email')}
                />
                {errors.email && <span className="edit-form__error">{errors.email.message}</span>}
            </div>

            <div className="edit-form__field">
                <label className="edit-form__label">Город</label>
                <input
                    className={`edit-form__input ${errors.city ? 'edit-form__input--error' : ''}`}
                    {...register('city')}
                />
                {errors.city && <span className="edit-form__error">{errors.city.message}</span>}
            </div>

            <div className="edit-form__field">
                <label className="edit-form__label">Телефон</label>
                <input
                    className={`edit-form__input ${errors.phone ? 'edit-form__input--error' : ''}`}
                    {...register('phone')}
                    placeholder="Только цифры"
                />
                {errors.phone && <span className="edit-form__error">{errors.phone.message}</span>}
            </div>

            <div className="edit-form__field">
                <label className="edit-form__label">Название компании</label>
                <input
                    className={`edit-form__input ${errors.companyName ? 'edit-form__input--error' : ''}`}
                    {...register('companyName')}
                />
                {errors.companyName && <span className="edit-form__error">{errors.companyName.message}</span>}
            </div>

            <button type="submit" className="edit-form__save">
                Сохранить
            </button>
        </form>
    );
};

