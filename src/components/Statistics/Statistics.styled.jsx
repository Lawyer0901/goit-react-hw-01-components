import styled from 'styled-components';

export const SectionMain = styled.section`
  margin-left: ${p => p.theme.space[5]}px;
`;

export const StatisticsTitle = styled.h2`
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white}
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  text-align: center;
  border: 2px solid black;
  margin-top: ${p => p.theme.space[4]}px;
`;

export const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
  flex-basis: 25%;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};

  border: 2px solid black;

  &:nth-child(n) {
    background-color: ${p => p.theme.colors.secondary};

    &:nth-child(3n) {
      background-color: ${p => p.theme.colors.accent};
    }
    &:nth-child(2n) {
      background-color: ${p => p.theme.colors.red};
    }
  }
`;
