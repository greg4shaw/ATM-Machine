// Main Function Expression dealing with setting states & keeping balance
const Account = () => {
  //const [deposit, setDeposit] = React.useState(0);
  let deposit = 0;
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);

// Rendering the balance on the form
let status = `Account Balance $ ${totalState}`;
console.log(`Account Balance $ ${totalState}`)

// Function expression storing the input value
const handleChange = event => {
    console.log(event.target.value);
    deposit = Number(event.target.value);
    //setDeposit(Number(event.target.value));
};

// Function expression using the input value and updating the balance 
const handleSubmit = event => {
  let newTotal = isDeposit ? totalState + deposit: totalState - deposit;
  newTotal < 0 ? alert("You have insufficient funds"): setTotalState(newTotal);
  //setValidTransaction(false);
  event.preventDefault();
  console.log(newTotal);
};

const ATMDeposit = ({onChange, isDeposit}) => {
  const choice = ["Deposit", "Withdrawal"];
  console.log(`isDeposit status: ${isDeposit}`)
  return(
    <label className="label huge">
      <h3>{choice[Number(!isDeposit)]}</h3>
      <input type="number" width="200" min="0" onClick={onChange}></input>
      {/* Creating the Submit button which triggers {handleSubmit} */}
      <input type="submit" width="200" value="Submit"></input>
    </label>
  );
};

return(
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      {/* Create buttons to select */}
      <button onClick={() => setIsDeposit(true)}>Deposit</button>
      <button onClick={() => setIsDeposit(false)}>Withdrawal</button>
       {/*  The ATMDeposit creates the input for the form. Bring in the ATMDeposit 
       function expression and pass in props to it to deal wit the input.*/}
       <ATMDeposit onChange={handleChange} isDeposit={isDeposit}/>
    </form>
  );
};

ReactDOM.render(<Account/>, document.getElementById("root")); 