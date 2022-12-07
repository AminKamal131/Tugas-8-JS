

// tidak perlu buat baru yang penting paham


function panggilan(){
    var mobil = {
        type : "sedan",
        harga : 9999,
        warna : "hitam",
        tahun : [1999,1998,2001,2002]
    }
    mobil.pencipta = "Amin Kamal"
    mobil.merek = "honda"
    mobil.warna = "putih"
    console.log(mobil)
    console.log(mobil.warna) //<== cara memanggil secara spesifik
    console.log(mobil.tahun[3]) //<== array dalam objek
}

panggilan()