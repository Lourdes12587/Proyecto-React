import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 88px;
    position: sticky;
    top:0;
    z-index: 99;
    background: blue;
    a{
      color: white;
      text-decoration: none;
      margin-right: 2rem;
    }
`;
   
export const NavbarWrapper = styled.div`
  margin:0;      
  width: 100%;
  width: 1300px;
  height: 88px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 3px, solid black;
`;

export const IconLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  color: white;
`;
