import styled from 'styled-components';
import { Container as MuiContainer } from '@mui/material';

export const Container = styled(MuiContainer)`
  margin-top: 20px;
  padding: 20px;
  max-width: 1000px;
  
  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 20px;
  }
`;
