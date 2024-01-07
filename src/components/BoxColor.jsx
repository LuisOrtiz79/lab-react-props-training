const BoxColor = (props) => {
  const rgbToHex = (r, g, b) => {
    const toHex = (c) => {
          const hex = c.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const boxStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
  };

  return (
    <div className="boxColor" style={boxStyle}>
    <p>RGB: {props.r}, {props.g}, {props.b}</p>
    <p>Hex: {rgbToHex(props.r, props.g, props.b)}</p>
  </div>
  )
}

export default BoxColor;
