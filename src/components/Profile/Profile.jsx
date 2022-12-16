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

export default function Profile(props) {
  return (
    <ProfileDiv>
      <Description>
        <Avatar src={props.avatar} alt={props.username} />
        <Name>{props.username}</Name>
        <Tag>{props.tag}</Tag>
        <Location>{props.location}</Location>
      </Description>

      <StatsList>
        <StatsListInfo>
          <span className="label">Followers</span>
          <Quantity>{props.stats.followers}</Quantity>
        </StatsListInfo>
        <StatsListInfo>
          <span className="label">Views</span>
          <Quantity>{props.stats.views}</Quantity>
        </StatsListInfo>
        <StatsListInfo>
          <span className="label">Likes</span>
          <Quantity>{props.stats.likes}</Quantity>
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
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
