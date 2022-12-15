import PropTypes from 'prop-types';
import {
  ProfileDiv,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
} from './Profile.styled';

export default function Profile(props) {
  return (
    <ProfileDiv>
      <Description>
        <Avatar src={props.avatar} alt={props.username} />
        <Name>{props.username}</Name>
        <Tag>{props.tag}</Tag>
        <Location>{props.location}</Location>
      </Description>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{props.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{props.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{props.stats.likes}</span>
        </li>
      </ul>
    </ProfileDiv>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
