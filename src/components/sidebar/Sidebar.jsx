import {
  RssFeed as FeedIcon,
  Chat as ChatsIcon,
  VideoCameraFront as VideosIcon,
  Group as GroupsIcon,
  Bookmark as BookmarksIcon,
  HelpOutline as QuestionsIcon,
  WorkOutline as JobsIcon,
  Event as EventsIcon,
  School as CoursesIcon,
} from '@mui/icons-material';

import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <FeedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className='sidebarListItem'>
            <ChatsIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Chats</span>
          </li>
          <li className='sidebarListItem'>
            <VideosIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className='sidebarListItem'>
            <GroupsIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className='sidebarListItem'>
            <BookmarksIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Bookmarks</span>
          </li>
          <li className='sidebarListItem'>
            <QuestionsIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Questions</span>
          </li>
          <li className='sidebarListItem'>
            <JobsIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Jobs</span>
          </li>
          <li className='sidebarListItem'>
            <EventsIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className='sidebarListItem'>
            <CoursesIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr' />
        <ul className='sidebarFriendList'>
          <li className='sidebarFriend'>
            <img
              className='sidebarFriendImg'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              className='sidebarFriendImg'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              className='sidebarFriendImg'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              className='sidebarFriendImg'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              className='sidebarFriendImg'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              className='sidebarFriendImg'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
