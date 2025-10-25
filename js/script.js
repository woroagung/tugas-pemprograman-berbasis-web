// Fungsi untuk validasi dan submit form
function submitForm(event) {
    event.preventDefault(); // mencegah reload halaman

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const nim = document.getElementById("nim").value.trim();
    const jurusan = document.getElementById("jurusan").value;

    // Validasi sederhana
    if (!nama || !email || !nim || !jurusan) {
        alert("Semua field wajib diisi!");
        return false;
    }

    if (isNaN(nim)) {
        alert("NIM harus berupa angka!");
        return false;
    }

    // Tambahkan data ke tabel
    const tableBody = document.querySelector("#tabelMahasiswa tbody");
    const newRow = tableBody.insertRow();

    newRow.insertCell(0).innerText = nama;
    newRow.insertCell(1).innerText = email;
    newRow.insertCell(2).innerText = nim;
    newRow.insertCell(3).innerText = jurusan;

    // Bersihkan form
    document.getElementById("formPendaftaran").reset();

    // Beri notifikasi
    alert(`Data mahasiswa ${nama} berhasil disimpan!`);

    return true;
}
