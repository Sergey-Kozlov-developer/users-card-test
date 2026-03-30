import UsersList from "@/widget/users/ui/users-list.tsx";
import {useUsers} from "@entities/user/api/queries.ts";
import {useUserStore} from "@entities/model/user.store.ts";
import {useEffect} from "react";
import {Divider} from "@shared/ui";


export const UsersWidget = () => {

    const {data: apiUsers, isLoading, error} = useUsers();
    const {
        users,
        archiveUser,
        archiveIds,
        hiddenIds,
        setUsers,
        activeUser,
        hideUser,

    } = useUserStore()

    useEffect(() => {
        if(apiUsers && users.length === 0) {
            setUsers(apiUsers)
        }
    },[apiUsers, users.length, setUsers]);

    if (isLoading) return <div className="loader">Загрузка...</div>;
    if (error) return <div className="error">Ошибка: {error.message}</div>;

    const activeUsers = users.filter(
        user => !archiveIds.includes(user.id) && !hiddenIds.includes(user.id)
    )
    const archivedUsers = users.filter(user => archiveIds.includes(user.id));

    return (
        <div className='users-widget'>
            <div className='users-widget__section'>
                <h1 className='users-widget__title'>Активные</h1>
                <Divider />
                <UsersList
                    users={activeUsers}
                    onArchive={archiveUser}
                    onHide={hideUser}
                />
            </div>

            {archivedUsers.length > 0 && (
                <div className='users-widget__section'>
                    <h2 className='users-widget__subtitle'>Архив</h2>
                    <Divider />
                    <UsersList
                        users={archivedUsers}
                        isArchived
                        onActivate={activeUser}
                    />
                </div>
            )}
        </div>
    );
};

