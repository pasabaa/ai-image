import { Configuration, OpenAIApi } from "openai"
import { useState } from "react";
import { InputBox } from "./components/InputBox";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_API_KEY,
});

const openai = new OpenAIApi(configuration);

function App() {

  const [userPrompt, setUserPrompt] = useState('');
  const [number, setNumber] = useState('');
  const [size, setSize] = useState('256x256');
  const [imageUrl, setImageUrl] = useState('');

  const generateImage = async () => {

    const imageParams = {
      prompt: userPrompt,
      n: parseInt(number),
      size: size,
    }

    const res = await openai.createImage(imageParams);

    const urlData = res.data.data[0].url;
    
    setImageUrl(urlData);
  }

  return (
    <div >
      {imageUrl && <img src={imageUrl} alt={'image openai'} />}
      <InputBox label={'Description'} setAttribute={setUserPrompt} />
      <InputBox label={'Amount'} setAttribute={setNumber} />
      <InputBox label={'Size'} setAttribute={setSize} />
      <button onClick={generateImage}>Generate</button>
    </div>
  )
}

export default App
