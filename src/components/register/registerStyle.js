import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #f6f6f6;
  a {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: black;
    text-decoration: none;
  }
`;

const InfoLogo = styled.div`
  width: 212px;
  height: 88px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .logo {
    width: 102px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #ffffff;
    border: 1px solid #e3dddd;
    border-radius: 28px;
    margin-right: 10px;

    span {
      font-family: "Bungee";
      font-style: normal;
      font-weight: 400;
      font-size: 56px;
      line-height: 34px;

      color: #000000;

      backdrop-filter: blur(2px);
    }
  }

  span {
    text-align: center;

    font-family: "Bungee";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 17px;
    word-break: break-all;

    color: #000000;

    text-shadow: 0px 2px 2px;
  }
`;

const Forms = styled.form`
  width: 312px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  input {
    width: 312px;
    height: 50px;
    background: rgba(217, 217, 217, 0.5);
    border: 3px solid #000000;
    border-radius: 16px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: black;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 316px;
    height: 58px;

    cursor: pointer;
    background: #353434;
    border: 4px solid #464646;
    border-radius: 20px;
    font-family: "Roboto";
    font-style: oblique;
    font-weight: 500;
    font-size: 24px;
    line-height: 14px;

    color: #ffffff;
  }

  button:hover {
    filter: brightness(1.75);
  }
`;

export const registerStyle = {
  Container,
  InfoLogo,
  Forms,
};
