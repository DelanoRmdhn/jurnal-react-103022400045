// import './App.css'

function App() {
const jam = 9;

 const elemen = <h1>Kantin Delano</h1>;
  const elemen1 = jam < 12 ? "Selamat Pagi" : "Selamat Siang";
  const n = 45 * 1000;
  const elemen2 = `Saldo awal kartu kantin: Rp ${n}`;

  return (
    <>
      <div className="App">
        {elemen}
        <p>{elemen1}</p>
        <p>{elemen2}</p>
        <button disabled={true}>Bayar</button>
      </div>
    </>
  );
}

export default App
