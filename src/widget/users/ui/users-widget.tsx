import UsersList from "@/widget/users/ui/users-list.tsx";
// import {useUsers} from "@entities/user/api/queries.ts";


export const UsersWidget = () => {

    // const {data: users, isLoading, error} = useUsers();
    //
    // if (isLoading) return <div className="loading">Loading users...</div>;
    // if (error) return <div className="error">Error: {error.message}</div>;
    // if (!users) return null;

    return (
        <div className='list'>
            <h1 className='list__title'>Активные</h1>
            {/*<UsersList users={users} />*/}
            <UsersList />
        </div>
    );
};

