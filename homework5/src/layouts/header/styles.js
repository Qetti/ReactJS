import styled from "styled-components";

export const HeaderBox = styled.div`
  width: 100%;
  height: 3rem;
  background: #f1f1f1;
  border-bottom: 1px solid #ccc;
  color: #333;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
`;
export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  h1{
    line-height: 3rem;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
  }
  .btn{
  position: absolute;
   top: 50%;
        transform: translateY(-50%);
      &.logout{   
        right: 10px;       

      }
      &.cart{    
        left: 250px;       
      }
      &.main{
        left: 0px;       
      }
  }
`;