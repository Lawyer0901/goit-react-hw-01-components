import styled from 'styled-components';

export const ProfileDiv = styled.div`
  /* margin-top: ${p => p.theme.space[1]}px; */
  box-shadow: 2px 2px 6px 0px rgba(97, 90, 90, 0.66);
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;
  width: 300px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.background};
`;

export const Avatar = styled.img`
  width: 100%;
  border-radius: ${p => p.theme.radii.round};
`;

export const StatsList = styled.ul`
  display: flex;
  text-align: center;
  background-color: ${p => p.theme.colors.backgroundSecondary};
  border-top: ${p => p.theme.borders.normal};
  color: ${p => p.theme.colors.borderColor};
`;

export const StatsListInfo = styled.li`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
  & + & {
    border-left: ${p => p.theme.borders.normal};
  }
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.black};
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.red};
  }
`;

export const Name = styled.p`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Tag = styled.p`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Location = styled.p`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Quantity = styled.span`
  color: ${p => p.theme.colors.accent};
`;
