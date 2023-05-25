import {useEffect, useState} from 'react';
import api from '../../services/api';

///movie/550?api_key=dde37cf6e1bf29ee3e7ba153b8fea918&language=pt-BR

function Home(){
    const [filmes,setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get('movie/now_playing',{
                params:{
                    api_key:'dde37cf6e1bf29ee3e7ba153b8fea918',
                    language: 'pt-BR',
                    page:1,
                }
            })
            console.log(response.data.results.slice(0,10));
            setFilmes(response.data.results.slice(0,10));
        }
        loadFilmes();
    }, [])

    return(
        <div className='conteiner'>
        <div className='lista-filmes'>
         {filmes.map((filme) =>{
             return(
                <article key={filme.id}>
                    <strong>{filme.title}</strong>
                </article>
             )   
         })}   
        </div>

        </div>
    )
}

export default Home;