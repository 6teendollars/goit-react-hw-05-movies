import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonBack = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Section = styled.section`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;

  img {
    width: 200px;
    margin-right: 20px;
    border-radius: 5px;
  }

  div {
    flex: 1;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin-bottom: 10px;
`;

export const Genres = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    margin-bottom: 5px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  margin-right: 10px;
  padding: 5px 10px;
  color: #333;
  text-decoration: none;
  background-color: #f1f1f1;
  border-radius: 5px;

  &:hover {
    background-color: #e1e1e1;
  }
`;
