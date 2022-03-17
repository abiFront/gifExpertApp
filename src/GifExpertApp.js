import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{

  

    const [categories, setCategories] = useState(['ikea']);


    return(
        <>
        <h2>Gif Expert App</h2>
        <AddCategory setCategories = {setCategories}/>
        <hr/>

        <ol>
            
        {
            //es necesario especificar un key en cada hijo del map, usamos "e", que es cada categoria, no usamos el index porque puede dar problemas
            categories.map( (category) =>(
            <GifGrid 
             key={category}
             category={category}
             />
            ))
        }
        </ol>
        </>
    );
}

export default GifExpertApp;