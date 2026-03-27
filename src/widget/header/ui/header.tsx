import logo from '@assets/icons/logo-sign.svg'
import favorite from '@assets/icons/favorite.svg';
import notification from '@assets/icons/notification.svg';
import profile from '@assets/images/user-profile.png';

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <img className="header__logo-img" src={logo} alt="Logo"/>
                        <span className="header__logo-title">
						at-<strong>work</strong>
					</span>
                    </div>
                    <div className="header__info">
                        <img src={favorite} alt="Favorite"/>
                        <img src={notification} alt="Notification"/>
                        <div className="header__profile">
                            <img src={profile} className='header__profile-img' alt="Profile"/>
                            <span className='header__profile-name'>Ivan1234</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

