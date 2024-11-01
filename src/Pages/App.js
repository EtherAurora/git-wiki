import gitlogo from '../Assets/github-mark-white.png'
import Input from '../Components/Input';
import {Container} from './styles';
import ItemRepo from '../Components/ItemRepo';
import Button from '../Components/Button';
import { useState } from 'react';
import {api} from '../services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([]);
  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`);
    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id)
      if(!isExist){
        setRepos(prev => [...prev, data]); 
        setCurrentRepo('')
        return
      }
    }
    alert('Repository not Found');
  }

  const handleRemoveItem = (itemId) =>{
    console.log("Removing Repository:" + itemId)
    document.getElementById(itemId).remove();
  }

  return (
      <Container>
        <img src={gitlogo} width={72} height={72} alt='github logo'/>
        <Input value={currentRepo} onChange={(event) => setCurrentRepo(event.target.value)}/>
        <Button onClick={handleSearchRepo}/>
        {repos.map(repo => <ItemRepo handleRemoveItem={handleRemoveItem} repo={repo}/>)}
      </Container>
  );
}

export default App;
