// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
    // ! JANGAN DIMODIFIKASI
    let dataYangAkanDilooping = arrPegawai;

    /*
      TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
        yang berisi gabungan nama depan dan belakang dari masing masing pegawai

        Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
    */
    let hasilLooping = [];

    /*
      TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
        yang berisi jumlah pria dari masing masing pegawai
    */
    let jumlahPria = null;

    /*
      TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
        yang berisi jumlah wanita dari masing masing pegawai
    */
    let jumlahWanita = null;

    /*
      TODO 4: Buatlah sebuah variabel bernama "komentar"
        yang akan mengomentari apakah lebih banyak Pria atau Wanita
        
        Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
          "Jumlah Pria lebih banyak dari Wanita"
        Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
          "Jumlah Wanita lebih banyak dari Pria"
        Apabila imbang, maka komentar akan berisi:
          "Jumlah Pria dan Wanita berimbang"
    */
    let komentar = null;

    /* looping untuk ambil data dari data-customer.json */
    dataYangAkanDilooping.forEach(element => {

        /* TODO 1 */
        let setData = element.namaDepan + ' ' + element.namaBelakang; // buat variabel lokal untuk set nama depan dan nama belakang 
        hasilLooping.push(setData); // push data gabungan nama ke variabel hasilLooping

        /* TODO 2 dan TODO 3 */
        if (element.jenisKelamin == 'M') jumlahPria++; // data nilai jumlah pria jika data kelamin 'M'
        else jumlahWanita++; // tambah data jumlah wanita jika data jenis kelamin selain 'M'

    });

    /* TODO 4 */
    if (jumlahPria > jumlahWanita) komentar = 'Jumlah Pria lebih banyak dari Wanita'; // kondisi apabila jumlah pria lebih banyak dari wanita
    else if (jumlahWanita > jumlahPria) komentar = 'Jumlah Wanita lebih banyak dari Pria'; // kondisi apabila jumlah wanita lebih banyak dari pria
    else if (jumlahPria == jumlahWanita) komentar = 'Jumlah Pria dan Wanita berimbang'; // kondisi apabila jumlah pria dan wanita berimbang
    else komentar = 'Data Tidak Valid ;)'; // kondisi apabila data tidak sesuai dengan kondisi yang telah dikondisikan diatas

    // ! JANGAN DIMODIFIKASI
    return {
        hasilLooping,
        jumlahPria,
        jumlahWanita,
        komentar,
    };
}

function main(data) {
    const hasil = lakukanLooping(data || arrayObjectPegawai);

    console.log(hasil.hasilLooping);
    console.log('Jumlah Data Pegawai Berkelamin Pria ' + hasil.jumlahPria); // sedikit modifikasi untuk penambahan penjelasan data
    console.log('Jumlah Data Pegawai Berkelamin Wanita ' + hasil.jumlahWanita); // sedikit modifikasi untuk penambahan penjelasan data
    console.log(hasil.komentar); // print hasil dari komnentar

    return hasil;
}

main(arrayObjectPegawai);

module.exports = main;