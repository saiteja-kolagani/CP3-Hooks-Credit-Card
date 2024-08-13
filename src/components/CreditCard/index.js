// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CardContainer,
  PaymentMethodContainer,
  Heading,
  CardImageContainer,
  Number,
  NamePara,
  Name,
  SubContainer,
  PaymentHeading,
  InputField,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [holderName, setHolderName] = useState('')

  const onChangeNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeName = event => {
    setHolderName(event.target.value.toUpperCase())
  }

  return (
    <MainContainer>
      <CardContainer>
        <Heading>CREDIT CARD</Heading>
        <CardImageContainer data-testid="creditCard">
          <Number as="p">{cardNumber}</Number>
          <NamePara>CARDHOLDER NAME</NamePara>
          <Name as="p">{holderName}</Name>
        </CardImageContainer>
      </CardContainer>
      <PaymentMethodContainer>
        <SubContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <InputField
            type="text"
            placeholder="Card Number"
            onChange={onChangeNumber}
            value={cardNumber}
          />
          <InputField
            type="text"
            placeholder="Cardholder Name"
            value={holderName}
            onChange={onChangeName}
          />
        </SubContainer>
      </PaymentMethodContainer>
    </MainContainer>
  )
}

export default CreditCard
