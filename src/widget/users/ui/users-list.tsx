import type {User} from "@shared/types/user.ts";
import userPhoto from '@assets/images/user-photo.png';
import setting from '@assets/icons/settings.svg';


interface UsersListProps {
    users: User[];
}

const UsersList = () => {
    return (
        <div className='users'>
            <div className='users__list'>
                <div className='users__card'>
                    <img src={userPhoto} alt="Photo" className="users__card-img"/>
                    <div className='users__text'>
                        <p className='users__text-name'>Ivan1234</p>
                        <p className='users__text-company'>at-work</p>

                        <p className='users__text-city'>Санкт-Петербург</p>
                    </div>
                    <div>
                        <button>
                            <img src={setting} alt=""/>
                        </button>
                    </div>
                </div>
                {/*{users.map((user) => (*/}
                {/*    <div className='users__card' key={user.id}>*/}
                {/*        <p>{user.name}</p>*/}
                {/*    </div>*/}
                {/*))}*/}
            </div>
        </div>
    );
};

export default UsersList;