import { Button, Table, TableCell, TableContainer } from "@mui/material";
import styled from "styled-components";

export const StyledTableContainer = styled(TableContainer)`
  margin: 20px auto;
  max-width: 1100px;

  @media (max-width: 1200px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const StyledTable = styled(Table)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledTableHeadCell = styled(TableCell)`
  font-weight: bold;
  white-space: nowrap;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const StyledTableCell = styled(TableCell)`
  font-weight: bold;
  white-space: nowrap;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const StyledTableCellActions = styled(StyledTableCell)`

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

`

export const ActionButton = styled(Button)`

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 6px 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 4px 8px;
  }
`;


