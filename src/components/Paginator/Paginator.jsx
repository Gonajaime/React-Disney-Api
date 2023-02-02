import React from 'react'



export default function Paginator({page, setPage, maxPage}){
  return (
    <div>
      {page > 1 && <button onClick={() => setPage(page - 1)}>-</button>}
      {page}
      {page < maxPage && <button onClick={() => setPage(page + 1)}>+</button>}
    </div>
  )
}
