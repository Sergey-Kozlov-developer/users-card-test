import type {User} from "@shared/types/user.ts";
import userPhoto from '@assets/images/user-photo.png';
import setting from '@assets/icons/settings.svg';
import {useNavigate} from "react-router";
import {useCallback, useEffect, useState} from "react";


interface UsersListProps {
    users: User[];
    isArchived?: boolean;
    onArchive?: (id: number) => void;
    onActivate?: (id: number) => void;
    onHide?: (id: number) => void;
}

const UsersList = ({users, isArchived, onArchive, onActivate, onHide}: UsersListProps) => {

    const navigate = useNavigate();
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const handleOnClickOutside = useCallback(() => {
        setOpenDropdown(null)
    }, []);

    useEffect(() => {
        const handleClick = handleOnClickOutside;
        document.addEventListener('click', handleClick);
        return document.removeEventListener('click', handleClick)
    });

    if (users.length === 0) {
        return <div className="users__empty">Нет пользователей</div>;
    }

    return (
        <div className='users'>
            <div className='users__list'>
                {users.map((user) => (
                    <div className='users__card' key={user.id}>
                        <img
                            src={userPhoto}
                            alt={user.name}
                            className={`users__card-img ${isArchived ? ' users__card-img--archived' : ''}`}
                        />
                        <div className='users__text'>
                            <p className={`users__text-name ${isArchived ? 'users__text-name--archived' : ''}`}>{user.username}</p>
                            <p className='users__text-company'>{user.companyName}</p>
                            <p className='users__text-city'>{user.city}</p>
                        </div>

                        <div className='users__dropdown'>
                            <button
                                className='users__dropdown-trigger'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenDropdown(openDropdown === user.id ? null : user.id);
                                }}
                            >
                                <img src={setting} alt="Настройки" />
                            </button>

                            {openDropdown === user.id && (
                                <div className='users__dropdown-menu'>
                                    {!isArchived ? (
                                        <>
                                            <button
                                                className='users__dropdown-item'
                                                onClick={() => {
                                                    navigate(`/profile/${user.id}`);
                                                    setOpenDropdown(null);
                                                }}
                                            >
                                                Редактировать
                                            </button>
                                            <button
                                                className='users__dropdown-item'
                                                onClick={() => {
                                                    onArchive?.(user.id);
                                                    setOpenDropdown(null);
                                                }}
                                            >
                                                Архивировать
                                            </button>
                                            <button
                                                className='users__dropdown-item users__dropdown-item'
                                                onClick={() => {
                                                    onHide?.(user.id);
                                                    setOpenDropdown(null);
                                                }}
                                            >
                                                Скрыть
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            className='users__dropdown-item'
                                            onClick={() => {
                                                onActivate?.(user.id);
                                                setOpenDropdown(null);
                                            }}
                                        >
                                            Активировать
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default UsersList;