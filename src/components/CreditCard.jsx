const CreditCard = (props) => {
  const cardStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
  };

  const cardNumber = (number) => {
    const lastFour = number.slice(-4);
    const masked = number.slice(0, -4).replace(/\d/g, '•').replace(/.{4}(?!$)/g, '$& ');

    return masked + ' ' + lastFour;
  }

  return (
    <div className="creditCard" style={cardStyle}>
        <div className="creditCard-type">
            {props.type}
        </div>
        <div className="creditCard-num">
            {cardNumber(props.number)}
        </div>
        <div className="creditCard-info">
            <div className="extra-info">
                <p>Expires: {props.expirationMonth}/{props.expirationYear}</p>

                <p>{props.bank}</p>
            </div>

            <p>{props.owner} </p>
        </div>
      
    </div>
  )
}

export default CreditCard;
