console.log("---Tiket Masuk Zoo---");

let pengunjung = [
    { nama: "Juddy", umur: 4 },
    { nama: "Joko", umur: 35 },
    { nama: "Sela", umur: 65 },
    { nama: "Zell", umur: 10 }
];

let hargaTiket = 50000;

for (let i = 0; i < pengunjung.length; i++) {
    let namaPengunjung = pengunjung[i].nama;
    
    let umur = pengunjung[i].umur;
    let pesan = "";

    if (umur < 5) {
        pesan = "Free! untuk balita";
    } else if (umur <= 12) {
        pesan = "Diskon 50% harga tiket: " + (hargaTiket / 2);
    } else if (umur >= 60) {
        pesan = "Diskon 30% harga tiket: " + (hargaTiket * 0.7);
    } else {
        pesan = "Harga normal: " + hargaTiket;
    }

    console.log("Nama Pengunjung:", namaPengunjung);
    console.log("Umur:", umur + " tahun");
    console.log("Keterangan:", pesan);
    console.log("-------------------------");
}

