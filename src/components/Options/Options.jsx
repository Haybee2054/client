import React, { useContext, useState } from "react";

import "./OptionsStyles.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from '@mui/material/Button';  
import { TextField } from "@mui/material";
import { Assignment, PhoneDisabled, Phone } from '@mui/icons-material';


import { SocketContext } from "../../SocketContext";


const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
 

  return (
    <div className="parent-options">
      <div className="option-content">
        <form  noValidate autoComplete="off" className="parent-info-container">
          <div className="info-container">

              <h6 className="account-info"> Account Info </h6>
              <TextField label='Name'  value={name} className="option-input" 
              onChange={(e) => setName(e.target.value)}  />
              <CopyToClipboard text={me} className='clipboard'>
              <Button variant="contained" color="primary" className="btnclipboard"  startIcon={<Assignment font-size='large'  />}>
                Copy your ID
              </Button>
              </CopyToClipboard>
          </div>
          <div className="info-container">

              <h6 className="account-info"> Make a call</h6>
              <TextField label='ID to call'  value={idToCall} className="option-input" 
              onChange={(e) => setIdToCall(e.target.value)}  />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled font-size='large' />}
                onClick={leaveCall} className='hangup'>
                  Hang up
                </Button>
              ) : (
                 <Button variant="contained" color="primary" startIcon={<Phone font-size='large' />}
                 onClick={() => callUser(idToCall)} className="btnclipboard">
                  Call
                 </Button>
              )}
          </div>
                 
        </form>
      
      {children}
      </div>
    </div>
  );
};

export default Options;
