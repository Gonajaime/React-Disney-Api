import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Gallery from '../../components/Gallery/Gallery';
import axios from 'axios';

const CharactersPageDetail = () => {

  let { id } = useParams();


  const [characters, setCharDetails] = useState([]);
  const getCharacters = async () => {
  const res = await axios.get(`https://api.disneyapi.dev/characters/${id}`)
  console.log(res);
  setCharDetails([res.data])
}

useEffect( ()=> {getCharacters()}, [])
  
  
  
  
  
  return (
    <div>
      <Gallery list={characters}></Gallery>
    </div>
  )
}

export default CharactersPageDetail
