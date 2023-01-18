import { Configuration, OpenAIApi } from "openai"
import { useState } from "react";
import { InputBox, SelectBox } from "./components/InputBox";
import axios from "axios";
import LoadIcon from './assets/loading.svg'
import fileDownload from "js-file-download";
import { Footer } from "./components/Footer";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_API_KEY,
});

const openai = new OpenAIApi(configuration);

function App() {

  const [userPrompt, setUserPrompt] = useState('');
  const [size, setSize] = useState('256x256');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const generateImage = async () => {

    const imageParams = {
      prompt: userPrompt,
      n: 1,
      size: size,
    }

    if(userPrompt.trim().length !== 0) {

      setLoading(true);
      setError(false);
      const res = await openai.createImage(imageParams);
      
      const urlData = res.data.data[0].url;
      
      setImageUrl(urlData);

      setLoading(false);

    } else {
      setError(true);
    }

  }

  const handleDownload = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then(res => fileDownload(res.data, filename));
  }


  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen p-16" >
      <div className="w-4/12 mx-auto sm:w-full">

        <div className="mb-8">
          <h1 className="text-3xl font-black dark:text-gray-100">Genera imagenes con Inteligencia Artificial</h1>
        </div>

        {loading && <div className="h-full flex flex-col gap-4 items-center justify-center animate-pulse">
          <img className="w-16" src={LoadIcon} alt="Loading Icon" />
          <h1 className="text-sm dark:text-gray-400">Cargando...</h1>
        </div>}

        {imageUrl && 
        <div className="flex flex-col gap-4">
          <img className="rounded w-full" src={imageUrl} alt={'image openai'} />
          <a onClick={()=>{handleDownload(imageUrl, userPrompt)}} href={imageUrl} className="max-w-min py-2 px-3 bg-gray-50 dark:bg-zinc-900 text-gray-500 rounded uppercase font-bold text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition mb-8">Descargar</a>
        </div>}
        
        <InputBox error={error} placeholder={'Un Samurai montando un caballo en Marte, lomografía.'} label={'Descripción'} setAttribute={setUserPrompt} description={'Una descripción de texto de la(s) imagen(es) deseada(s). La longitud máxima es de 1000 caracteres.'} />
        <SelectBox label={'Tamaño'} setAttribute={setSize} description={'El tamaño de las imágenes generadas debe ser uno de 256x256, 512x512, o 1024x1024.'} />
        <button className="py-2 px-3 bg-gray-50 dark:bg-zinc-900 text-gray-500 rounded uppercase font-bold text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition mb-8" onClick={generateImage}>Generar</button>
      </div>
      <Footer />
    </div>

  
  </>
  )
}

export default App
