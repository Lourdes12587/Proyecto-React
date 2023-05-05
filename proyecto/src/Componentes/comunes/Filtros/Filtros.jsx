import React, { useState } from 'react'
import ArticleList from '../Filtros/ArticleList';
import ButtonList from '../Filtros/ButtonList';
import { noticias } from '../../../data/NoticiasData';


const Filtros = () => {

  const allSecciones = ['TODAS',...new Set(noticias.map(secciones => secciones.seccion))]

  const [ categories, setCategories ] = useState(allSecciones);

  const [ articles, setArticles ] = useState(noticias);

  const filterCategory = (seccion) =>{
    if (seccion === 'TODAS'){
      setArticles(noticias)
      return
    }
    const filterData = noticias.filter (article =>article.seccion === seccion);
    setArticles(filterData)
  }

  return (
    <>
        <div className ='title' style={{display: 'flex', flexDirection: 'column',
          justifyContent: 'center',  alignItems: 'center'}}>

          <ButtonList categories={categories} filterCategory={filterCategory}/>
          <ArticleList articles ={articles}/>

        </div>
        
    </>
  )
}

export default Filtros
