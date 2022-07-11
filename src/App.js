import './App.css';
import emojiss from './component/emojis';
import Card from './component/Card';
function emoj(emo){
return (<Card
  key={emo.id}
  emoji={emo.emoji}
  name={emo.name}
  description={emo.meaning}
/>);
}
function App() {
  return (
    <div className="App d-flex row justify-content-center">
      <h1 className='fw-bold fs-1 text-white mt-5'>Emojipedia</h1>
      {emojiss.map(emoj)}
    </div>
  );
}

export default App;