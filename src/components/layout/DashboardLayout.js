import styled from 'styled-components';

export const DashboardLayout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 10rem 20rem 1fr;
  transform: translateX(0);
  transition: transform 0.5s ease;
  ${props => `
    @media ${props.theme.breakpoints.xs} {
      grid-template-columns: 50vw 100vw 100vw;
      transform: translateX(-50vw);
      transition: transform 0.5s ease;
    }
  `}
`;
