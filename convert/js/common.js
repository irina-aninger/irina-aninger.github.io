const container = document.querySelector ('.wrapper');
const current = 99;

class Calc extends React.Component {
  render() {
    return (
     <div className="calc">
      <div className="calc__wrap">
          <Flag src={this.props.src} alt={this.props.alt} />
          <div className="title__wrap">
            <Currency currency={this.props.currency} />
            <Sub from={this.props.from} count={this.props.count} to={this.props.to} />
        </div>
      </div>
      <Input id={this.props.id} value={this.props.value} />
    </div>
    )
  }
}

class Flag extends React.Component {
  render() {
    return (
    <img src={this.props.src} alt={this.props.alt} className="country" />
    )
  }
}

class Currency extends React.Component {
  render() {
    return (
    <div className="title__currency">{this.props.currency}</div>
    )
  }
}

class Sub extends React.Component {
  render() {
    return (
      <div className="title__sub">1 {this.props.from} =   <span>
        {this.props.from === "USD" ? current : (1/current).toFixed(3)}</span> 
        {this.props.to}</div>
    )
  }
}
              
class Input extends React.Component {
  render() {
    return (
      <input id={this.props.id} className="amount" value={this.props.value}></input>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Calc 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_the_United_States_%281877-1890%29.svg"
          alt="us"
          currency="USD"
          from="USD"
          count="67"
          to="RUB"
          id="usd"
          value="1000"
          />

        <div className="divider"></div>
        
        <Calc
          
          src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg"
          alt="rub"
          currency="RUB"
          from="RUB"
          count=""
          to="USD"
          id="rub"
          value="67000" 
          />
        
      </>
    )
  }
}

ReactDOM.render(<App />, container);