const Account = () => {

const [accountState, setAccountState] = React.useState(0);
var deposit = 0
const handleChange = event => {
    console.log(event.target.value);
    deposit = Number(event.target.value)

}

const handleSubmit = event => {
    let newState = accountState + deposit
    setAccountState(newState);
    event.preventDefault();
}

const ATMDeposit = ({adjust}) => {
    return (
      <label className="label huge">
          Deposit:
        <input type="number" onChange={adjust}></input>
      </label>
    );
  };


return(
    <>
        <form onSubmit={handleSubmit}>
            <label>Balance: {accountState}</label>
            <br></br>
            <ATMDeposit adjust={handleChange}/>
        </form>
       
    </>
)

}






ReactDOM.render(<Account/>, document.getElementById("root")); 