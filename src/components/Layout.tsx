import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;
type Props = {
  children: any;
};
const Layout = (props: Props) => {
  return (
    <Wrapper>
      <Main>{props.children}</Main>
      <Nav />
    </Wrapper>
  );
};
export default Layout;
