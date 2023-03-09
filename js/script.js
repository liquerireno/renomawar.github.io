let belanjaan = [];

// Function untuk mengubah format angka menjadi format ribuan
function formatNumber(input) {
  var num = input.value.replace(/\./g,'');
  if (!isNaN(num)) {
    num = Number(num).toLocaleString('id-ID');
    input.value = num;
  } else {
    alert('Mohon masukkan angka saja');
    input.value = input.value.replace(/[^\d\.]*/g,'');
  }
}


function tambah() {
  let tanggal = document.getElementById('tanggal').value;
  let deskripsi = document.getElementById('deskripsi').value;
  let harga = parseInt(document.getElementById('harga').value.replaceAll(".", ""));
  if (tanggal && deskripsi && harga) {
    belanjaan.push({
      tanggal: tanggal,
      deskripsi: deskripsi,
      harga: harga
    });
    tampilkanTabelBelanja();
    document.getElementById('tanggal').value = '';
    document.getElementById('deskripsi').value = '';
    document.getElementById('harga').value = '';
  } else {
    alert('Sayang isi dulu yang lengkap {-_-}');
  }
}

function hapus(index) {
  belanjaan.splice(index, 1);
  tampilkanTabelBelanja();
}

// Function untuk menampilkan tabel belanjaan
function tampilkanTabelBelanja() {
  let tabelBelanja = document.getElementById('tabel-belanja').getElementsByTagName('tbody')[0];
  let totalHarga = 0;
  tabelBelanja.innerHTML = '';
  belanjaan.forEach((belanja, index) => {
    let row = tabelBelanja.insertRow();
    let tanggalCell = row.insertCell(0);
    let deskripsiCell = row.insertCell(1);
    let hargaCell = row.insertCell(2);
    let aksiCell = row.insertCell(3);
    
    let tanggalArray = belanja.tanggal.split('-');
    let tanggalText = '';
    if (tanggalArray.length === 3) {
      tanggalText = document.createTextNode(`${tanggalArray[2]}-${tanggalArray[1]}-${tanggalArray[0]}`);
    } else {
      tanggalText = document.createTextNode(belanja.tanggal);
    }
    
    let deskripsiText = document.createTextNode(belanja.deskripsi);
    let hargaText = document.createTextNode(belanja.harga.toLocaleString());
    let aksiBtn = document.createElement('button');
    let aksiText = document.createTextNode('Hapus');
    aksiBtn.appendChild(aksiText);
    aksiBtn.setAttribute('onclick', 'hapus(' + index + ')');
    tanggalCell.appendChild(tanggalText);
    deskripsiCell.appendChild(deskripsiText);
    hargaCell.appendChild(hargaText);
    aksiCell.appendChild(aksiBtn);
    totalHarga += belanja.harga;
  });
  let totalHargaElem = document.getElementById('total-harga');
  totalHargaElem.innerHTML = totalHarga.toLocaleString();

  let downloadBtn = document.getElementById('download');
  downloadBtn.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(belanjaan)));
  downloadBtn.setAttribute('download', 'belanjaan.txt');
}



function download() {
  let rows = [];
  let headers = ["Tanggal", "Deskripsi Belanja", "Harga"];
  rows.push(headers);
  belanjaan.forEach((belanja) => {
    // Format tanggal menjadi format Indonesia
    let formattedDate = new Date(belanja.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "numeric", year: "numeric" });
    let row = [formattedDate, belanja.deskripsi, belanja.harga];
    rows.push(row);
  });
  let csvContent = "data:text/csv;charset=utf-8,"
                   + rows.map(e => e.join(",")).join("\n");

  let encodedUri = encodeURI(csvContent);
  let link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "lap Mawar.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


function kirimWhatsApp() {
  let text = "Catatan:\n";
  belanjaan.forEach((belanja) => {
    // Parse tanggal dari string ke objek Date
    let tanggalObj = new Date(belanja.tanggal);
    // Periksa apakah tanggal valid, jika ya, format tanggal menjadi format Indonesia
    if (!isNaN(tanggalObj.getTime())) {
      let formattedDate = tanggalObj.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      });
      text += `${formattedDate} - ${belanja.deskripsi}: ${belanja.harga.toLocaleString()}\n`;
    }
  });
  let encodedText = encodeURIComponent(text);
  window.open(`https://api.whatsapp.com/send?phone=6285247502344&text=${encodedText}`);

  // Atur format tanggal menjadi format Indonesia
  var date = new Date();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Asia/Jakarta",
  };
  var formattedDate = date.toLocaleDateString("id-ID", options);

  // Tambahkan tanggal ke pesan
  var fullMessage = pesan + "%0A%0A" + formattedDate;

  // Tambahkan pesan ke link WhatsApp
  link += encodeURIComponent(fullMessage);

  // Buka link WhatsApp pada tab baru
  window.open(link);
}



$(document).ready(function(){
  $('#tanggal').datepicker({
    format: 'dd/mm/yyyy', // format tanggal yang diinginkan
    autoclose: true, // kalender akan tertutup setelah memilih tanggal
    todayHighlight: true // menyoroti tanggal hari ini
  });
});
