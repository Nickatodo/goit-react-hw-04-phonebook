export default function FilterContac({ setInputValue }) {
  function handleChange(evt) {
    setInputValue(evt.target.value);
  }
  return (
    <>
      <p>Find contact by name</p>
      <input type="text" name="name_filter" onChange={handleChange}></input>
    </>
  );
}
