import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 0px 30px 0px 30px;
  align-items: center;
  display: flex;
  height: 4em;
  justify-content: space-between;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
