import { FC } from "react";
import styled from "styled-components";
import bg from "../assets/scheduled-maintenance-message-examples-and-inspiration0a@3x-1560x760.png";
const MaintenancePage: FC = () => {
  return (
    <Maintenance>
      <div className="content-wrapper">
        <div className="content">
          <h1>
            My Mother's Home Care Givers <br />
          </h1>
          <h1>is under construction Please check back later.</h1>
        </div>
      </div>
    </Maintenance>
  );
};

const Maintenance = styled.div`
  .content-wrapper {
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;

    .content {
      width: 90%;
      color: #fff;
      text-align: center;
      font-size: calc(.65rem + 1vw);
      padding-top: 8rem;
    }
    
`;
export default MaintenancePage;
