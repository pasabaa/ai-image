import { Configuration, OpenAIApi } from "openai"
import { useState } from "react";
import { InputBox, SelectBox } from "./components/InputBox";
import axios from "axios";
import LoadIcon from './assets/loading.svg'
import fileDownload from "js-file-download";

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
    <div className="grid place-items-center h-screen p-16" >
      <div className="w-4/12 mx-auto sm:w-full">

        <div className="mb-8">
          <h1 className="font-bold text-3xl">Genera imagenes con Inteligencia Artificial</h1>
        </div>

        {loading && <div className="h-full flex flex-col gap-4 items-center justify-center animate-pulse">
          <img className="w-16" src={LoadIcon} alt="Loading Icon" />
          <h1 className="text-sm">Cargando...</h1>
        </div>}

        {imageUrl && 
        <div className="flex flex-col gap-4">
          <img className="rounded w-full" src={imageUrl} alt={'image openai'} />
          <a onClick={()=>{handleDownload(imageUrl, userPrompt)}} href={imageUrl} className="max-w-min py-2 px-3 bg-gray-50 text-zinc-500 rounded uppercase font-bold text-sm hover:bg-gray-100 transition mb-8">Descargar</a>
        </div>}
        
        <InputBox error={error} placeholder={'Un Samurai montando un caballo en Marte, lomografía.'} label={'Descripción'} setAttribute={setUserPrompt} description={'Una descripción de texto de la(s) imagen(es) deseada(s). La longitud máxima es de 1000 caracteres.'} />
        <SelectBox label={'Tamaño'} setAttribute={setSize} description={'El tamaño de las imágenes generadas debe ser uno de 256x256, 512x512, o 1024x1024.'} />
        <button className="py-2 px-3 bg-gray-50 text-zinc-500 rounded uppercase font-bold text-sm hover:bg-gray-100 transition mb-8" onClick={generateImage}>Generar</button>
      </div>
    </div>

    <div className="text-gray-500 px-16 py-8 mt-auto bottom-0 flex flex-col items-start justify-start place-self-end">
      <div className="w-8/12 flex justify-between items-center gap-4 mx-auto sm:w-full">
        <div className="flex items-center gap-4">
          <a href="/">
            <img src="/favicon/android-chrome-192x192.png" className="w-12 rounded" alt="AI Image Logo" />
          </a>
          <a target={'_blank'} rel={'noreferrer noopener'} href="https://portfolio-pasabaa.netlify.app/">
            <img className="w-8 filter-white" src="/logo/logo.png" alt="Logo pasabaa" />
          </a>
        </div>
        <div>
          <div className="text-end flex flex-col items-end gap-2 mb-2">
            <p className="font-bold text-gray-500 text-sm">Hecho con <a target={'_blank'} rel={'noreferrer noopener'} className="font-normal hover:underline" href="https://openai.com/blog/dall-e-api-now-available-in-public-beta/">DALL·E API</a></p>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2 ">
              <i className="bi bi-github"></i>
              <a target={'_blank'} rel={'noreferrer noopener'} className="text-sm hover:underline" href="https://github.com/pasabaa">pasabaa</a>
            </div>
            <div className="flex gap-2 ">
              <i className="bi bi-instagram"></i>
              <a target={'_blank'} rel={'noreferrer noopener'} className="text-sm hover:underline" href="https://www.instagram.com/pasabaaa/">pasabaaa</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default App
