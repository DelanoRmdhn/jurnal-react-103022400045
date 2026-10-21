
import { useState } from "react";
import KartuNama from "./components/KartuMenu";
import Panel from "./components/Panel";

function App() {
  const jam = 9;
  const elemen = <h1>Kantin Delano</h1>;
  const elemen1 = jam < 12 ? "Selamat Pagi" : "Selamat Siang";

  const n = 45 * 1000;
  const elemen2 = `Saldo awal kartu kantin: Rp ${n}`;

  const [menu, setMenu] = useState([
    {
      id: 1,
      nama: "Nasi Ayam Geprek",
      harga: 13700,
      kategori: "Makanan",
      jumlah: 2,
      catatan: "Pedas sedang",
    },
    {
      id: 2,
      nama: "Es Teh Lemon",
      harga: 6000,
      kategori: "Minuman",
      jumlah: 3,
      catatan: "Es sedikit",
    },
    {
      id: 3,
      nama: "Mie Goreng Telor",
      harga: 12000,
      kategori: "Makanan",
      jumlah: 1,
      catatan: "Tidak pedas",
    },
  ]);

  const hapusMenu = (id) => {
    setMenu((menuSebelumnya) =>
      menuSebelumnya.filter((item) => item.id !== id)
    );
  };

  const balikUrutan = () => {
    setMenu((menuSebelumnya) => [...menuSebelumnya].reverse());
  };

  return (
    <>
      <div className="App">
        {elemen}
        <p>{elemen1}</p>
        <p>{elemen2}</p>
        <button disabled={true}>Bayar</button>
      </div>

      <Panel judul="Menu Hari Ini">
        <button onClick={balikUrutan}>Balik Urutan</button>

        {menu.length === 0 ? (
          <p>Semua menu habis terjual</p>
        ) : (
          menu.map((item) => (
            <KartuNama
              key={item.id}
              id={item.id}
              nama={item.nama}
              harga={item.harga}
              kategori={item.kategori}
              jumlah={item.jumlah}
              catatan={item.catatan}
              onHapus={hapusMenu}
            />
          ))
        )}
      </Panel>
    </>
  );
}

export default App;
