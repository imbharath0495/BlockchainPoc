import React , {useState} from 'react';


function ConnectionDetails() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setdefaultAccount] = useState(null);
    const [userbalance, setuserbalance] = useState(null);
    const [connButtonText, setconnButtonText] = useState('connect wallet');
    const handleConnButtonText = () => {
        
    }
    return(
        <div>
            <h4>connect to metamask using window.ethereum methods</h4>
            <button onClick={handleConnButtonText}>{connButtonText}</button>
            <h3>Address : {defaultAccount}</h3>
            <h3>balance : {userbalance}</h3>
            <h5>Error : {errorMessage}</h5>

        </div>
    )
}

export default ConnectionDetails;