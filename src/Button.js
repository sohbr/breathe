import styled from "styled-components";

const Button = styled.button`
  background-color: rgba(0,0,0,0);
  width: 12rem;
  height: 42px;
  font-family: "arial", san-serif;
  font-size: 20px;
  font-weight: bold;
  color: rgba(0,0,0,1);
  border-radius: 25px;
  border: 2px solid #cccccc;
  padding: 10px;
  z-index: 10;
  margin: 0px auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.2s;

  &:hover {
    border: 2px solid #ededed;
    cursor: pointer;

    &:after {
      background-color: #ededed;
      content: "play";
      border-radius: 25px;
      width: 106px;
      height: 29px;
      position: absolute;
      left: 5px;
      top: 4.5px;
      vertical-align: -100%;
      transition: 0.7s;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }

  &:after {
    background-color: #cccccc;
    content: "play";
    color: gray;
    border-radius: 25px;
    width: 106px;
    height: 29px;
    position: absolute;
    left: 5px;
    top: 4.5px;
    transition: 0.7s;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #ededed;
  }
`;

export default Button;
