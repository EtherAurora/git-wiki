import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveItem}) {
  
  const handleRemove = () =>{
    handleRemoveItem(repo.id)
  }
  return (
    <ItemContainer onClick={handleRemove} id={repo.id}>
      <h3> {repo.name} </h3>
      <p> {repo.full_name} </p>
      <a href={repo.html_url} target='_blank' rel='noreferrer'> Go to Repository </a><br />
      <a href='#' className='remove' rel='noreferrer'>Remove</a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;