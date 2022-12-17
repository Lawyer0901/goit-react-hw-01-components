import { FriendItem, Status } from './Friendlist.styled';
// import PropTypes from 'prop-types';
import { RiRadioButtonLine } from 'react-icons/ri';
export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <Status checkOnline={isOnline}>
        <RiRadioButtonLine />
      </Status>
      <img src={avatar} alt={`${name} avatar`} width="48px" />
      <p>{name}</p>
    </FriendItem>
  );
}
