import { Configuration, OpenAIApi } from "openai"
import { useState } from "react";
import { InputBox, SelectBox } from "./components/InputBox";
import LoadIcon from './assets/loading.svg'

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_API_KEY,
});

const openai = new OpenAIApi(configuration);

function App() {

  const [userPrompt, setUserPrompt] = useState('');
  const [size, setSize] = useState('256x256');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {

    const imageParams = {
      prompt: userPrompt,
      n: 1,
      size: size,
    }

    setLoading(true);

    const res = await openai.createImage(imageParams);
    
    const urlData = res.data.data[0].url;
    
    setImageUrl(urlData);

    setLoading(false);

  }


  return (
    <div className="grid place-items-center h-screen p-16" >
      <div className="w-4/12 mx-auto sm:w-full">
        {loading && <div className="h-full flex flex-col gap-4 items-center justify-center animate-pulse">
          <img className="w-16" src={LoadIcon} alt="Loading Icon" />
          <h1>Loading...</h1>
        </div>}
        {imageUrl && <img className="rounded" src={imageUrl} alt={'image openai'} />}
        <InputBox placeholder={'Un Samurai montando un caballo en Marte, lomografía.'} label={'Description'} setAttribute={setUserPrompt} description={'Una descripción de texto de la(s) imagen(es) deseada(s). La longitud máxima es de 1000 caracteres.'} />
        <SelectBox label={'Size'} setAttribute={setSize} description={'El tamaño de las imágenes generadas debe ser uno de 256x256, 512x512, o 1024x1024.'} />
        <button className="py-2 px-3 bg-gray-50 text-zinc-500 rounded uppercase font-bold text-sm hover:bg-gray-100 transition mb-8" onClick={generateImage}>Generate</button>
      </div>

    </div>
  )
}

export default App
