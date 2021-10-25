import { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import cn from 'classnames';
  
const pokeAPI = 'https://pokeapi.co/api/v2/pokemon';


const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  const pokemonTotal = 1118;
  const maxPokemonInAPage = 20;
  const offset = 0;
  const [limit, setLimit] = useState(20);

  const { isLoading, error, data } = useQuery(`pokeData?offset=${offset}&limit=${limit}`, () =>
  fetch(`${pokeAPI}?offset=${offset}&limit=${limit}`).then(res =>
    res.json()
  )
)

if (error) return 'An error has occurred: ' + error.message

if( !isLoading && pokemons.length < limit ){
  setPokemons([...pokemons, ...data.results]);
}

const getParamsUrl = (url) => {
  let path = url.split('/');
  return parseInt(path[path.length-2]);
}

const btnPokemonMore = () => {
  console.log("more"); 
  setLimit( limit + maxPokemonInAPage >= pokemonTotal ? pokemonTotal : limit + maxPokemonInAPage);
}

  return <>
    <ul className="container max-w-lg mx-auto flex flex-wrap justify-between">
      {pokemons.map(
        (el, idx)=> {
          let id = getParamsUrl(el.url); 
          return <li 
          key={idx}
          className="inline-flex flex-col w-5/12 items-center bg-white rounded bg-opacity-50 mb-2 "
          >
          <Link to={`/pokemon/detail?id=${id}`}>
            <div> 
            <img 
              src={`https://cdn.jsdelivr.net/gh/PokeAPI/sprites/sprites/pokemon/${id}.png`}
              alt={el.name}
              />
            </div>
            <div className="font-bold text-center">
              {el.name}
            </div>
          </Link>
      </li>
        } 
      )}
      
    </ul>
    <button 
    className={cn(
      'btn',
      'btn-block',
      'btn-primary', 
      'sticky', 
      'bottom-0',
      'transition',
      'duration-300',
      {loading : isLoading}
      )} 
    onClick={btnPokemonMore}
    >more</button>
    </>
}

const Pokemon = () => {
  return <>
    <h1 className="sticky top-0 text-gray-900 mb-4 bg-white text-center py-2 ">포켓몬 리스트</h1>
    <ul>
      <li>[o]포켓몬 리스트 가져오기 - react query, npm i react-query</li>
      <li>[o]포켓몬 사진 가져오기 - jsdelivr gh</li>
      <li>[o]tailwind, daisyUI 이용해서 UI</li>
      <li>[o]포켓몬 MORE 버튼, 로딩 바</li>
      <li>[o]상세 페이지 만들기, 연결 - react-router-dom</li>
      <li>[o]tailwind, daisyUI 이용해서 UI</li>
      <li>[]뒤로가기</li>
      <li>[]이미지, 상세 정조 불러오기</li>
      <li>[]검색기능</li>
    </ul>
    
      <PokemonList />
  </>
}

export default Pokemon;