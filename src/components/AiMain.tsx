import React, { useContext } from 'react'
import '../styles/aimain.css'
import { Context } from "../context/Context";
type Props = {}
interface ContextType {
    onSet: (value: any) => void;
    recentPrompt: string;
    showResult: boolean;
    loading: boolean;
    resultData: any;
    setinput: (value: string) => void;
    input: string;
  }


  const UserIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

    )
  }
  const SendIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>


    )
  }
const AiMain = (props: Props) => {
    const {
        onSet,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setinput,
        input,
      } = useContext<ContextType>(Context);
  return (
    <div className='main'>
 

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello,Dev</span>
              </p>
              <p>How Can I Help You Today</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Suggest a beautoful places to see on an upcoming road trip
                </p>
                <div><UserIcon /></div>
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban Planning</p>
                <div><UserIcon /></div>
              </div>
              <div className="card">
                <p>Brainstorm team bonding activites for our work</p>
                <div><UserIcon /></div>
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <div><UserIcon /></div>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
                <UserIcon />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
            <img src="/gemini_icon.png" alt="no" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setinput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a Prompt here"
              className=' placeholder:text-black'
            />
            <div>
                <img src="/gallery_icon.png" alt="no" />
                <img src="/mic_icon.png" alt="no" />
           {input?
            // <img onClick={() => onSet(undefined)} src="../../public/send-icon.png" alt="no" />
            <button onClick={()=>onSet(undefined)}><SendIcon/></button>
            :null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate information, including about peopel,
            so double-check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AiMain