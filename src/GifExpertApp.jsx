import { useState } from "react"
import { GifGrid, AddCategory} from "./components"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch'])

    const onAddCategoria = (newCategory) =>{

        if (categories.includes(newCategory) )   return;
        setCategories([newCategory, ...categories]);
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            onNewCategory={ onAddCategoria }

        />

        {/* Listado de GIF */}
            { categories.map( (category) => (
                    <GifGrid 
                    key={category}
                    category={category}/>
                )) 
             }

            {/* Gif Items */}

    </>

  )
}
