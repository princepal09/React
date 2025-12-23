import React from 'react'
const Card = (props) => {
    console.log(props.elem);
  return (
    
    <div>
      <a href={props.elem.url} target="_blank">
              <div className=" w-80 bg-white rounded-2xl overflow-hidden ">
                <img
                  loading="lazy"
                  className="h-full w-full object-cover  "
                  src={props.elem.download_url}
                  alt="Photoo"
                />
              </div>
              <h2 className="text-white mt-2 text-2xl font-bold">
                {props.elem.author}
              </h2>
          </a>
    </div>
  )
}

export default Card
