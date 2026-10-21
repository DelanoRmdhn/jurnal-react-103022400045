import LabelHarga from "./LabelHarga";
import { useState } from "react";

function KartuMenu({ nama, harga, kategori = "makanan" }) {
  const [jumlah, setJumlah] = useState(0);
  const [catatan, setCatatan] = useState("");

  function tambah() {
    setJumlah(jumlah + 1);
  }

  return (
    <div className="kartu">
      <h3>{nama}</h3>
      <p>{kategori}</p>

      <LabelHarga nilai={harga} />

      <div className="kontrol">
        <button onClick={tambah}>+</button>

        <p>{jumlah}</p>

        <button onClick={() => setJumlah(jumlah - 1)} disabled={jumlah === 0}>
          -
        </button>

        <p>
          {jumlah === 0
            ? "Belum dipesan"
            : `Subtotal: Rp ${(harga * jumlah).toLocaleString("id-ID")}`}
        </p>
        {jumlah >= 5 && <span className="badge">Pesanan banyak</span>}
      </div>
      <div>
        <label htmlFor="catatan">Catatan pesanan:</label>
        <input
          id="catatan"
          type="text"
          value={catatan}
          onChange={(e) => setCatatan(e.target.value)}
          placeholder="Masukkan catatan pesanan"
        />
      </div>
      {catatan !== "" && <p>Catatan: {catatan}</p>}
    </div>
  );
}

export default KartuMenu;
