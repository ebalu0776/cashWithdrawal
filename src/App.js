import {Component} from 'react'
import CashWithdrawal from './components/CashWithdrawal'

import './App.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class App extends Component {
  state = {balanceState: 2000}

  setBalance = () => {
    this.setState(prevState => ({balanceState: prevState.balanceState - value}))
  }
  render() {
    return (
      <div className="bank-container">
        <p className="p">Your Balance</p>
        <p className="p">{balanceState}</p>
        <p className="paragraph">Withdraw</p>
        <p className="paragraph">CHOOSE SUM (IN RUPEES)</p>

        <ul className="list-container">
          {denominationsList.map(eachBalance => (
            <CashWithdrawal balanceDetails={eachBalance} key={eachBalance.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
