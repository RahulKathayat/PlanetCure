
import { createContext, useState } from "react";
export const Context = createContext<any>(null);
import runChat from "../utils/Gemini";

const ContextProvider = (props:any) => {
  const [input, setinput] = useState("");
  const [recentPrompt, setrecentPrompt] = useState("");
  const [prvePrompt, setprvePrompt] = useState<string[]>([]);
  const [showResult, setshowResult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultData, setresultData] = useState("");

  const delayPara = (index:number, nextword:string) => {
    setTimeout(() => {
      setresultData((prev) => prev + nextword);
    }, 75 * index);
  };

  const newChat = ()=>{
    setloading(false)
    setshowResult(false)
  }
  const onSet = async (prompt:undefined) => {
    setresultData("");
    setloading(true);
    setshowResult(true);
    let response;
    if(prompt !== undefined){
      response = await runChat(prompt);
      setrecentPrompt(prompt)
    }

    else{
      setprvePrompt(prev=>[...prev,input])
      setrecentPrompt(input)
      response = await runChat(input)
    }
    // setrecentPrompt(input);
    // setprvePrompt(prev=>[...prev,input])
    let responsesArray = response.split("**");
    let newResponse=''
    for (let i = 0; i < responsesArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responsesArray[i];
      } else {
        newResponse += "<b>" + responsesArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextword = newResponseArray[i];
      delayPara(i, nextword + " ");
    }
    setloading(false);
    setinput("");
  };

  const contextValue = {
    prvePrompt,
    setprvePrompt,
    onSet,
    setrecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setinput,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
