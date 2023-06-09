import './index.css'

const DenominationItem = props => {
  // props in functional component should not be accessed with this
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  // Variable declaration should consist of keyword const
  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        // Functions in functional components should not be accessed with this
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
