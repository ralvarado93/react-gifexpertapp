import React, {useState} from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['One piece',' Samurai X','Dragon ball Z'];

    const [categories, setCategories] = useState(['Dragon ball Z'])


    // const handleAdd = () =>{
    //     //setcategories( ['HunterXHunter', ...categories] );
    //     setcategories( cat => [...cat, 'HunterXHunter'] )
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= {setCategories}/>
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key = { category } 
                            category = { category } />
                    ))
                }
            </ol>
        </>
    )
}
