import PropTypes from 'prop-types';
import { StatisticSection } from './statistics.styled';
import { StatisticTitle } from './statistics.styled';
import { StatisticList } from './statistics.styled';
import { StatisticItem } from './statistics.styled';
import { StatisticSpan } from './statistics.styled';
export const Statistic = ({ statistic, title }) => {
  return (
    <StatisticSection>
      <StatisticTitle>{title}</StatisticTitle>
      <StatisticList>
        {statistic.map(stat => (
          <StatisticItem key={stat.id}>
            <StatisticSpan>{stat.label}</StatisticSpan>
            <StatisticSpan>{stat.percentage}</StatisticSpan>
          </StatisticItem>
        ))}
      </StatisticList>
    </StatisticSection>
  );
};

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  statistic: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
