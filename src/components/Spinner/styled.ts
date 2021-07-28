import styled from "styled-components";

export const Loader = styled.div`
  &,
  &:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
  }
  & {
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 0.2em solid rgba(253, 102, 153, 0.2);
    border-right: 0.2em solid rgba(253, 102, 153, 0.2);
    border-bottom: 0.2em solid rgba(253, 102, 153, 0.2);
    border-left: 0.2em solid rgba(253, 102, 153, 1);;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load 0.5s infinite linear;
    animation: load 0.5s infinite linear;
  }
  @-webkit-keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;