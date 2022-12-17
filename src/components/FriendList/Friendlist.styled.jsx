import styled from 'styled-components';

export const FriendListCard = styled.ul`
  margin-left: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

export const FriendItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const Status = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => (p.checkOnline ? p.theme.colors.green : p.theme.colors.red)};
`;
