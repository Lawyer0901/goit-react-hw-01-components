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

export const FriendIsOnline = styled.span`
  background-color: ${p => p.theme.colors.green};
  border-radius: ${p => p.theme.radii.round};
  width: 20px;
  height: 20px;
`;

export const FriendOffLine = styled.span`
  background-color: ${p => p.theme.colors.red};
  border-radius: ${p => p.theme.radii.round};
  width: 20px;
  height: 20px;
`;
