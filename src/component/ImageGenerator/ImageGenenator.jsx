import React,{useState,useRef} from 'react'
import  './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'

const ImageGenenator = () => {
  const[image_url,setImage_url] = useState('/')
  let inputRef=useRef(null);
  const imageGenerator= async () => {
    if(inputRef.current.value=== '0'){
      return(0)}
      const response = await fetch('https://api.openai.com/v1/images/generations', {method:'post',
    headers: {'content-type': 'application/json',
    Authorization:'bearer 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',
    'user-agent':'chrome'},
    body: JSON.stringify({
      prompt: `${inputRef.current.value}`,
      n:1,
      size:'512x512',})
  }
  
    );
    let data =await response.json();
    console.log(data);
  }
  return (
    <div className='ai-image-generator'>
        <div className="header">Ai Image <span>Generator</span></div>
        <div className="img-loading">
            <div className="image"><img src={image_url==='./'?default_image:image_url} alt="" /></div>
        </div>
        <div className="search-box">
          <input type="text" ref={inputRef} className='search-input' placeholder='Describe What You Want See' />
          <div className="generate-btn" onClick={()=>{
            imageGenerator()
          }}>generate</div>
        </div>
    </div>
  )
}

export default ImageGenenator