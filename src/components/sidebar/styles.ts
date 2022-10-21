import styled from "styled-components";

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 1rem;
  box-shadow: hsl(360, 67%, 44%);
  transition: all 0.3s linear;
  transform: translate(-100%);
  &.show-sidebar {
    transform: translate(0);
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 1.75rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: all 0.3s linear;
    cursor: pointer;
    color: hsl(360, 67%, 44%);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: hsl(360, 71%, 66%);
  }
  .links a {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }
`;
