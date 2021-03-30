import React from 'react';
import styled from 'styled-components';
import { IUserInfo } from '~/api';
import { UserTable } from '~/components';
import { mixin } from '~/styles';

interface IProps {
  userDataList: IUserInfo[];
}

export const Example: React.FC<IProps> = ({ userDataList }) => {
  return (
    <>
      <Title>Hello Example</Title>
      <TableContainer>
        {userDataList.map(userData => (
          <UserTable key={userData.id} userData={userData} />
        ))}
      </TableContainer>
    </>
  );
};

const Title = styled.h1`
  margin-bottom: 200px;
`;

const TableContainer = styled.section`
  ${mixin.flexSet('space-between', 'stretch', 'column')};
  width: 80vw;
  padding: 0 50px 0 50px;
  border: 1px solid ${({ theme }) => theme.blue};
`;
