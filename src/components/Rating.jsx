const Rating = (props) => {
  const stars = (rating) => {
    let string = '';

    for(let i = 0; i < rating; i++){
        string += '★';
    }

    for(let i = rating; i < 5; i++){
        string +=  '☆';
    }

    return string;
  }
  return (
    <div className="rating">
        <p>{stars(props.children)}</p>
    </div>
  )
}

export default Rating;
