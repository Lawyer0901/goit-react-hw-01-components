import PropTypes from 'prop-types';
import {
  ProfileDiv,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsListInfo,
  Quantity,
} from './Profile.styled';

export default function Profile({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileDiv>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatsListInfo>
          <span className="label">Followers</span>
          <Quantity>{followers}</Quantity>
        </StatsListInfo>
        <StatsListInfo>
          <span className="label">Views</span>
          <Quantity>{views}</Quantity>
        </StatsListInfo>
        <StatsListInfo>
          <span className="label">Likes</span>
          <Quantity>{likes}</Quantity>
        </StatsListInfo>
      </StatsList>
    </ProfileDiv>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
};
