
const ATMDeposit = ({ onChange, isValid }) => {
  return (
    <label className="label huge">
      <h3> {isValid}</h3>
      <input style={mystyle} id="number-input" type="number" width="200" onChange={onChange}></input>
      <input type="submit" width="200" value="Submit" id="submit-input"></input>
    </label>
  );
};

const mystyle = {
   backgroundColor: "lightyellow",
 };

const Account = () => {
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [validTransaction, setValidTransaction] = React.useState("What would you like to do?");
  
  let status = `Account Balance $ ${totalState} `;
  const handleChange = (event) => {
    console.log(Number(event.target.value));
    if (Number(event.target.value) < 0) {    
      setValidTransaction("Money out");
    }
    else if (Number(event.target.value) > 0) {    
      setValidTransaction("Money in");
    }
    else {
      setValidTransaction("What next?");
    }
    setDeposit(Number(event.target.value));
  };
  const handleSubmit = (event) => {
    let newTotal = totalState + deposit;
    newTotal < 0 ? alert("You have insufficient funds"): setTotalState(newTotal);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <>
        <h2 id="total">{status}</h2>
          <ATMDeposit
            onChange={handleChange}
            isValid={validTransaction}
          ></ATMDeposit>
      </>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById('root'));