import {useParams, useNavigate} from 'react-router';
import {useUsers} from "@entities/user/api/queries.ts";
import {useUserStore} from "@entities/model/user.store.ts";
import {useState} from "react";
import type {EditUserFormData} from "@features/edit-user/model/edit-user.shema.ts";
import {Divider, Loader, Toast} from "@shared/ui";
import {EditUserForm} from "@features/edit-user";
import userPhoto from '@assets/images/edit-profile.png'

export const EditUser = () => {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const {data: apiUsers, isLoading: isLoadingUsers} = useUsers();
    const {users, updateUser} = useUserStore();
    const [showToast, setShowToast] = useState(false);

    if (isLoadingUsers) return <Loader/>;

    const userId = Number(id);
    const user = users.find(u => u.id === userId) || apiUsers?.find(u => u.id === userId);

    if (!user) {
        return <div className="edit-user__not-found">Пользователь не найден</div>;
    }

    const handleSave = (data: EditUserFormData) => {

        updateUser(userId, {
            name: data.name,
            username: data.username,
            email: data.email,
            city: data.city,
            phone: data.phone,
            companyName: data.companyName,
        });
        setShowToast(true);
    };

    return (
        <div className="edit-user">
            <button onClick={() => navigate('/')} className="edit-user__back">
                ← Назад
            </button>

            <div className="edit-user__field">
                <div className="edit-user__profile">
                    <img src={userPhoto} alt={user.name} className="edit-user__avatar"/>
                    <h1 className="edit-user__title">Данные профиля</h1>

                    <div className="edit-user__info">
                        <Divider/>
                        <p className='edit-user__info-text'>Рабочее пространство</p>
                        <Divider/>

                        <p className='edit-user__info-text'>Приватность</p>
                        <Divider/>

                        <p className='edit-user__info-text'>Безопасность</p>
                        <Divider/>

                    </div>
                </div>

                <EditUserForm user={user} onSubmit={handleSave}/>
            </div>

            {showToast && (
                <Toast
                    message="Изменения сохранены!!"
                    onClose={() => setShowToast(false)}
                />
            )}
        </div>
    );
};