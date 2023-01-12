function Letter(props) {
  return (
    // props.children returns the content
    // of <Letter>...</Letter>
    <div>{props.children}</div>
  );
}

export default Letter;