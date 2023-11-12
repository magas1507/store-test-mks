import styled from "styled-components";

const CustomHeaderContainer = styled.header`
  height: 101px;
  width:100%;
  max-width:100%;
  padding-left: 66px;
  padding-right: 88px;
  background-color: #0F52BA;
  display:flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderLeftContent = styled.div`
  display: flex;
  color: #FFF;
  font-family: Montserrat; 
  font-style: normal;
  h1{
    color: #FFF;  
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
  }
  
  span{
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;
    display:flex;
    align-items: end;
  }
`
const HeaderRightContent = styled.div`
  display: flex;
  
`
const Header = () =>{
  return(
    <CustomHeaderContainer>
      <HeaderLeftContent>
        <h1>
          MKS 
        </h1>
        <span>Sistemas</span>
      </HeaderLeftContent>
      <HeaderRightContent>
        <div>
          🛒0
        </div>
      </HeaderRightContent>
    </CustomHeaderContainer>
  )
}

export default Header;

