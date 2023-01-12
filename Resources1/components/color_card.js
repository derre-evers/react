function Square() {
  const squareStyle = {
    height: 150,
    backgroundColor: "#FF6663"
  };

  return (
    <div style={squareStyle} />
  );
}

function Label() {
  const labelStyle = {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    padding: 13,
    margin: 0
  };

  return (
    <p style={labelStyle}>
      #FF6663
    </p>
  );
}

function Card() {
  const cardStyle = {
    height: 200,
    width: 150,
    padding: 0,
    backgroundColor: "#FFF",
    filter: "drop-shadow(0px 0px 5px #666)"
  };

  return (
    <div style={cardStyle}>
      <Square />
      <Label />
    </div>
  );
}

export default Card;
