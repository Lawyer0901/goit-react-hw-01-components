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
      {title ? <StatisticsTitle>{title}</StatisticsTitle> : null}
      <StatisticsList>
        {stats.map(stat => (
          <StatisticsListItem key={stat.id} className="item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </SectionMain>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

//  <ul class="stat-list">
//    <li class="item">
//      <span class="label">.docx</span>
//      <span class="percentage">4%</span>
//    </li>
//    <li class="item">
//      <span class="label">.mp3</span>
//      <span class="percentage">14%</span>
//    </li>
//    <li class="item">
//      <span class="label">.pdf</span>
//      <span class="percentage">41%</span>
//    </li>
//    <li class="item">
//      <span class="label">.mp4</span>
//      <span class="percentage">12%</span>
//    </li>
//  </ul>;
