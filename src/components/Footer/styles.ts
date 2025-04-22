import styled from 'styled-components';
import { colors } from '../../styles/styles';
import { HashLink } from 'react-router-hash-link';

export const Container = styled.footer`
  background-color: ${colors.gray};
  padding: 2rem 0;
  font-size: 0.875rem;
`;

export const FooterSection = styled.div`
  margin-bottom: 4rem;
`;

export const SectionTitle = styled.h4`
  color: ${colors.white};
  font-size: 1rem;
  font-weight: bold;
`;

export const Links = styled.ul`
  display: flex;
  margin-top: 1rem;
`;

export const Link = styled(HashLink)`
  color: ${colors.gray100};
  margin-right: 0.5rem;
`;
