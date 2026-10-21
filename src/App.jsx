import KartuNama from "./components/KartuMenu";
import Panel from "./components/Panel";

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

      
    <Panel judul="Menu Hari Ini" >
      <KartuNama nama="Nasi Ayam Geprek" harga={10000 + (45 * 100)}/>
      <KartuNama nama="Es Teh Lemon" harga={6000} kategori="minuman"/>
      <KartuNama nama="Mie Goreng" harga={120000}/>
    </Panel>
    </>
  );
}

export default App
