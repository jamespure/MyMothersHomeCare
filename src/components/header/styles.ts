import styled from "styled-components";
import { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
  position: static;
`;

export const fill = keyframes`
          0% {
            width: 0%;
            height: 1px;
          }
          50% {
            width: 100%;
            height: 1px;
          }
          100% {
            width: 100%;
            height: 100%;
            background: #333;
          }
        `;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 7.5rem;
  margin: 0 auto;
  .left {
    flex: 3;
  }
  .center {
    flex: 2;
    ul {
      display: flex;
      margin: 0;
      justify-content: space-evenly;
      li {
        cursor: pointer;

        a {
          position: relative;
          padding: 0.8rem 1rem;
          font-weight: bold;
          letter-spacing: 0.1rem;
        }
        a:after,
        a:after {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          width: 0%;
          content: ".";
          color: transparent;
          background: #000;
          height: 1px;
        }
        a:hover:after {
          width: 100%;
        }

        a {
          transition: all 2s;
        }

        a:after {
          text-align: left;
          content: ".";
          margin: 0;
          opacity: 0;
        }
        a:hover {
          color: #fff;
          z-index: 1;
        }
        a:hover:after {
          z-index: -10;
          animation: ${fill} 1s forwards;
          -webkit-animation: ${fill} 1s forwards;
          -moz-animation: ${fill} 1s forwards;
          opacity: 1;
        }
      }
    }
    @media (max-width: 1200px) {
      display: none;
    }
  }
  .right {
    flex: 2;
    display: none;
    justify-content: flex-end;

    .toggle-menu {
      background: transparent;
      border: none;
      cursor: pointer;
      text-align: right;
    }

    @media (max-width: 1200px) {
      display: flex;
    }
  }
`;
