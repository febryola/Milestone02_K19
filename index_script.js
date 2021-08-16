let fullname = localStorage.getItem("user")
fullname = fullname.substr(0,6)

document.getElementById("username").innerHTML = fullname

status = localStorage.getItem("Status_User")

function prosesPesanan() {
    var durasi = null;
    if (document.getElementById("one_hour").checked == true) {
        durasi = "1 Jam";
    } else if (document.getElementById("two_hour").checked == true) {
        durasi = "2 Jam";
    } else if (document.getElementById("three_hour").checked == true) {
        durasi = "3 Jam";
    } else if (document.getElementById("four_hour").checked == true) {
        durasi = "4 Jam";
    } else if (document.getElementById("five_hour").checked == true) {
        durasi = "5 Jam";
    } else if (document.getElementById("six_hour").checked == true) {
        durasi = "6 Jam";
    }

    var tanggal = document.getElementById("form1").value;
    var jam = document.getElementById("form2").value;
    var alamat = document.getElementById("form3").value;

    listPesanan.push({nama_pemesan: fullname, durasi_pesanan: durasi, tanggal_pesanan: tanggal, jam_pesanan: jam, alamat_pesanan: alamat});
    if (status == "Confirmed") {
        localStorage.setItem("list_pesanan", JSON.stringify(listPesanan));
        alert("Terima kasih atas pesanan anda, " + fullname)
    } else
        alert("Untuk menyelesaikan pesanan ini, anda harus melakukan login terlebih dahulu!")
        
}
