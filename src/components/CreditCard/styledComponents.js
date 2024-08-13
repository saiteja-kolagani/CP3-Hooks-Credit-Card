// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
`

export const CardContainer = styled.div`
  background-color: #3b4b69;
  width: 50%;
  text-align: center;
  padding-block: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const PaymentMethodContainer = styled.div`
  background-color: #ffffff;
  width: 50%;
  display: flex;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  text-decoration-line: underline;
  text-decoration-color: #ffd773;
  letter-spacing: 1px;
  color: #ffffff;
`
export const CardImageContainer = styled.div`
  background-image: url(https://assets.ccbp.in/frontend/hooks/credit-card-bg.png);
  width: 500px;
  height: 300px;
  background-size: cover;
  border-radius: 8px;
  margin: auto;
  padding-block: 70px;
  text-align: start;
  padding-inline: 40px;
`
export const Number = styled(Heading)`
  text-decoration: none;
`
export const NamePara = styled.p`
  font-size: 16px;
  color: #ffffff;
  margin-top: 60px;
`
export const Name = styled(Number)`
  font-size: 20px;
`
export const SubContainer = styled.div`
  width: 400px;
  height: 300px;
  box-shadow: 0px 4px 16px 0px #475569;
  margin: auto;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const PaymentHeading = styled.h1`
  font-size: 20px;
  color: #344e7a;
  margin-bottom: 35px;
`
export const InputField = styled.input`
  width: 70%;
  padding-inline: 12px;
  padding-block: 8px;
  outline: none;
  margin-bottom: 25px;
`
