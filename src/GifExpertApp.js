import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//rafc < crear el componente de 0 con un snipet

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball Z'];
    const [categories, setCategories] = useState(['Batman']);

    // const handleAdd = () => {

    //     setCategories([...categories, 'Hunter X Hunter']);

    // }

    // console.log(categories);

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                { 
                    categories.map( category =>
                    (    
                         <GifGrid 
                        key={ category }
                        category={ category } 
                        />
                    ))
                }
            </ol>

        </>

    );

}

export default GifExpertApp;