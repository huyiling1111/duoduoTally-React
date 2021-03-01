import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from "components/Icon";
import React from "react";
import theme from "../constants/theme";

const NavWrapper = styled.div`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3%;
      text-align: center;
      padding: 4px 0;
      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &.selected {
          color: ${theme.color};
          > .icon {
            fill: ${theme.color};
          }
        }
        > .icon {
          height: 24px;
          width: 24px;
        }
      }
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/detail" activeClassName="selected">
            <svg className="icon">
              <use xlinkHref="#statistics" />
            </svg>
            明细
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />
            记一笔
          </NavLink>
        </li>
        <li>
          <NavLink to="/chart" activeClassName="selected">
            <svg className="icon">
              <use xlinkHref="#labels" />
            </svg>
            图表
          </NavLink>
        </li>

      </ul>
    </NavWrapper>
  );
};
export default Nav;
