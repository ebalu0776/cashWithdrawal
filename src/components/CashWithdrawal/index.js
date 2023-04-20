const CashWithdrawal = props => {
  const {balanceDetails} = props
  const {value} = balanceDetails

  return (
    <div>
      <li className="balance-card-container">
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.setBalance}
        >
          {value}
        </button>
      </li>
    </div>
  )
}

export default CashWithdrawal
