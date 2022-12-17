import {
  SectionMain,
  StatisticsList,
  StatisticsTitle,
  StatisticsListItem,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export function Statistic({ title, stats }) {
  return (
    <SectionMain>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsListItem key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </SectionMain>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
