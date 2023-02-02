import axios from "axios";
import {useEffect, useState} from "react";
import Gallery from "../../components/Gallery/Gallery";
import Paginator from "../../components/Paginator/Paginator";



export default function CharactersPage() {
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)
  const [characters, setCharacters] = useState([]);

  const getCharacters = async (page) => {
    const res = await axios.get(
      `https://api.disneyapi.dev/characters?page=${page}`);
    console.log(res);
    setMaxPage(res.data.totalPages)
    setCharacters(res.data.data)
  };

  useEffect(() => {getCharacters(page)}, [page]);

  return (
    <div>
    <Paginator page={page} setPage={setPage} maxPage={maxPage}/>
    <Gallery list={characters}></Gallery>
    <Paginator page={page} setPage={setPage} maxPage={maxPage}/>
    </div>
  )
}

