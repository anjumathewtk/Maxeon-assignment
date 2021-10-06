import axios from "axios";
import React, { useState } from "react";
import { InputGroup, InputGroupAddon, Input, Button, Alert } from "reactstrap";

//Send icon
import Send from "../../assets/send-button.png";

export const ChatConfirm = () => {
  const [chatchange, setchatchange] = useState(true); // boolean value to change chat screen

  const [data, setdata] = useState([]);
  const [msg, setmsg] = useState(""); //to store textbox value
  const [apimsg, setapimsg] = useState(""); //to store api msg

  //Advice api call
  const advice = () => {
    //Api config variable
    const config = {
      method: "get",
      url: "https://api.adviceslip.com/advice",
      headers: {
        "Content-Type": "application/json",
      },
    };
    //Api client function
    axios(config)
      .then(function (response) {
        setapimsg(response.data.slip.advice);//Storing data from api to apimsg hook
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //Chat submit
  const typeSubmit = (e) => {
    console.log(data);
    setmsg(data);
    setdata("");
    advice();
  };

  return (
    <div>
      {chatchange ? (
        <div className="Chat-confirm">
          <div className="Chat-confirm-header">
            <h4>Hi There</h4>
            <p>Hello Ask Us Anything. Share Your Feedback.</p>
          </div>
          <div className="Chat-confirm-body">
            <h4>Start Conversation</h4>
            <p>Hello Ask Us Anything. Share Your Feedback.</p>
            <Button
              color="success"
              className="btn-chat"
              onClick={(e) => setchatchange(false)}
            >
              New Conversation <img src={Send} className="Send-ico" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="Chat-area">
          <div className="Chat-area-confirm-header">
            <h4>Hi There</h4>
            <p>Hello Ask Us Anything. Share Your Feedback.</p>
          </div>
          <div className="Chat-area-body">
            <div
              className="chat-msg-body"
              style={{
                width: 320,
                height: 200,
                overflowY: "scroll",
                overflowX: "hidden",
                wordWrap: "break-word",
                fontSize: "12px",
              }}
            >
              {!msg ? (
                ""
              ) : (
                <Alert
                  color="primary"
                  style={{
                    width: 200,
                    marginTop: 10,
                    float: "right",
                  }}
                >
                  {msg}
                </Alert>
              )}
              {!apimsg ? (
                ""
              ) : (
                <Alert
                  color="danger"
                  style={{
                    width: 200,
                    marginTop: 5,
                    float: "left",
                  }}
                >
                  {apimsg}
                </Alert>
              )}
            </div>
            <InputGroup className="type">
              <Input
                placeholder="Type to Chat..."
                onChange={(e) => setdata(e.target.value)}
              />
              <InputGroupAddon addonType="append">
                <Button color="secondary" onClick={typeSubmit}>
                  Send
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      )}
    </div>
  );
};
