import './index.css'

const InputContainer = props => {
  const {inputDetails, onChangeInput, value} = props
  const {id, iconUrl, iconAltText, inputType, placeholderValue} = inputDetails

  const onChangeValue = event => {
    onChangeInput(event, id)
  }
  console.log(value)
  return (
    <div className="input-container">
      <img className="icon" src={iconUrl} alt={iconAltText} />
      <input
        value={value}
        onChange={onChangeValue}
        className="input"
        placeholder={placeholderValue}
        type={inputType}
      />
    </div>
  )
}

export default InputContainer
