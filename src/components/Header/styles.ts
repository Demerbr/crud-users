import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

 export const StyledAppBar = styled(AppBar)`
  background-color: #2196f3;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const DesktopMenu = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;