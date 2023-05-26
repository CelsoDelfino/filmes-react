import { useEffect, useState } from "react";
import { useParams, useNavigate, json } from "react-router-dom";
import {toast } from 'react-toastify';

import api from "../../services/api";
import './filme-info.css';


function Filme() {
  const { id } = useParams();
  const navigation = useNavigate();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`movie/${id}`, {
          params: {
            api_key: "dde37cf6e1bf29ee3e7ba153b8fea918",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Filme não encontrado");
          navigation('/', { replace: true })
         return;
        });
    }
    loadFilme();

    return () => {
      console.log("componente foi desmontado");
    };
  }, [navigation,id]);

  function salvarfilme(){
    const minhalista = localStorage.getItem('@narniaflix');

    let filmesSalvos = JSON.parse(minhalista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id);

    if(hasFilme){
      toast.warn('Você já possui esse filme na sua lista');
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem('@narniaflix', JSON.stringify(filmesSalvos));
    toast.success('Salvo com sucesso');

  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes do filme...</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
    <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} />  

      <h3>sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average.toFixed(1)} /10</strong>
      <div className="area-buttons">
          <button onClick={salvarfilme}>Salvar</button>
          <button>
            <a target="blank" href={`https://youtube.com/results?search_query=${filme.title}`}>
              Trailer
            </a>
          </button>
      </div>
    </div>
  );
}

export default Filme;
