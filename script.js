function handleRegister() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
  
    // Validasi jika form kosong
    if (!nama || !email) {
      alert("Harap isi semua data sebelum mendaftar!");
      return;
    }
  
    // Menampilkan pesan terima kasih
    alert(`Terima kasih telah mendaftar, ${nama}!`);
    
    // Mengosongkan form setelah berhasil
    document.getElementById("registerForm").reset();
  }
  