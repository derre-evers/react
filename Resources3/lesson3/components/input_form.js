function InputForm({ }) {

  function handleChange(event) {
    
  }

  function handleSubmit(event) {
    event.preventDefault(); // don't submit the form

  }

  return (
    <div className="header">
      <form onSubmit={handleSubmit}>
        <input 
          onChange={handleChange}
          placeholder="enter task" />
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default InputForm;
