"use client";
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const SpeechToText: React.FC = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={() => SpeechRecognition.startListening()}>Start</button><br/>
      <button onClick={SpeechRecognition.stopListening}>Stop</button><br/>
      <button onClick={resetTranscript}>Reset</button><br/>
      <p>{transcript? transcript : "No text yet"}</p>
    </div>
  );
};

export default SpeechToText;