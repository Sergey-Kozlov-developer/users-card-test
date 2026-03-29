import type {User} from "@shared/types/user.ts";
import userPhoto from '@assets/images/user-photo.png';
import setting from '@assets/icons/settings.svg';
import {useNavigate} from "react-router";


interface UsersListProps {
    users: User[];
    isArchived?: boolean;
    onArchive?: (id: number) => void;
    onActivate?: (id: number) => void;
    onHide?: (id: number) => void;
}

const UsersList = ({ users, isArchived, onArchive, onActivate, onHide }: UsersListProps)  => {

    const navigate = useNavigate();

    if (users.length === 0) {
        return <div className="users__empty">Нет пользователей</div>;
    }

    return (
        <div className='users'>
            <div className='users__list'>
                {users.map((user) => (
                    <div className='users__card' key={user.id}>
                        <img
                            src={user.avatar || userPhoto}
                            alt={user.name}
                            className="users__card-img"
                        />
                        <div className='users__text'>
                            <p className='users__text-name'>@{user.username}</p>
                            <p className='users__text-company'>{user.companyName}</p>
                            <p className='users__text-city'>{user.city}</p>
                        </div>
                        <div className='users__actions'>
                            {!isArchived ? (
                                <>
                                    <button
                                        className='users__button users__button--edit'
                                        onClick={() => navigate(`/profile/${user.id}`)}
                                    >
                                        Редактировать
                                    </button>
                                    <button
                                        className='users__button users__button--archive'
                                        onClick={() => onArchive?.(user.id)}
                                    >
                                        Архивировать
                                    </button>
                                    <button
                                        className='users__button users__button--hide'
                                        onClick={() => onHide?.(user.id)}
                                    >
                                        Скрыть
                                    </button>
                                </>
                            ) : (
                                <button
                                    className='users__button users__button--activate'
                                    onClick={() => onActivate?.(user.id)}
                                >
                                    Активировать
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersList;