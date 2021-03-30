import React from 'react';
import styled from 'styled-components';
import { IUserInfo } from '~/api';
import { mixin } from '~/styles';

export interface IProps {
  userData: IUserInfo;
}

export const UserTable: React.FC<IProps> = ({ userData }) => {
  const { id, name, username, email } = userData;

  return (
    <Container>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{username}</Text>
      <Text>{email}</Text>
    </Container>
  );
};

const Container = styled.div`
  ${mixin.flexSet('flex-start')};
  padding-left: 30px;
`;

const Text = styled.p`
  width: 100px;
  font-size: ${({ theme }) => theme.typo.M};
  margin-right: 30px;
  color: ${({ theme }) => theme.black};
`;
