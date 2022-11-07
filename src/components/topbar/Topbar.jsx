import {
  Search as SearchIcon,
  Person as PersonIcon,
  Chat as ChatIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

import './topbar.css';

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='logo'>RSocial</span>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <SearchIcon className='searchIcon' />
          <input
            placeholder='Search for friend, post or video'
            type='text'
            className='searchInput'
          />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <PersonIcon />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <ChatIcon />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <NotificationsIcon />
            <span className='topbarIconBadge'>1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
