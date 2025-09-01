import { useEffect, useState } from 'react';
export default function Home() {
  const [pong, setPong] = useState('loading…');
  useEffect(() => {
    fetch('http://localhost:4000/api/ping')
      .then(r => r.json())
      .then(d => setPong(`${d.message} @ ${d.time}`))
      .catch(e => setPong('error: ' + e.message));
  }, []);
  return (
    <main style={{padding: 24}}>
      <h1>Hello Intern 👋</h1>
      <p>Backend ping: {pong}</p>
    </main>
  );
}
