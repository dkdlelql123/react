import {useLocation} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PokemonDetail = () => {
  let query = useQuery();
  const id= query.get('id');

  return <>
  <h1 className="sticky top-0 text-gray-900 mb-4 bg-white text-center py-2 ">{id}번째 포켓몬</h1>
  </>
}

export default PokemonDetail;