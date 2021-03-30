import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mixin } from '~/styles';

export const Home = () => {
  return (
    <Container>
      <Header>Hello Ziphz</Header>
      <StyledLink to='example'>Go to Example Page</StyledLink>
    </Container>
  );
};

const Container = styled.section`
  ${mixin.flexSet('center', 'center', 'column')};
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.blue};
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.black};
`;
