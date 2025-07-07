import React from 'react'

function Card({ name, author ,img}) {
    return (

        <div class="flex flex-col items-center p-7 rounded-2xl"
             style={{ border: '1px solid #ccc' }}
             >
            <div>
                <img class="size-100 shadow-xl "  alt=""  src={img}  />
            </div>
            <div class="flex">
                <span>{name}</span>
                <span><br/>{author}</span>                
            </div>  
        </div>
    )
}

export default Card