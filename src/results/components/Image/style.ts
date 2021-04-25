import styled, {keyframes} from "styled-components";

const load = keyframes`
  from {
    left: -150px;
  }
  to   {
    left: 100%;
  }
`;

export const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px;
  box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
  border-radius: 4px;
`;

export const Loader = styled.div`
  box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
  border-radius: 4px;
  height: 200px;
  width: 200px;
  margin: 10px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%);
    animation: ${load} 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  }
`;