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

  // tambahan untuk menampilkan keyboard angka pada handphone Android
  input.setAttribute('inputmode', 'numeric');
  input.setAttribute('pattern', '\\d*');
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

function clearDeskripsi() {
		document.getElementById("deskripsi").value = "";
	}
	
	function clearHarga() {
		document.getElementById("harga").value = "";
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
    
    let deskripsiText = document.createElement('div');
    deskripsiText.style.textAlign = 'left'; // menambahkan style untuk align text menjadi center
    deskripsiText.appendChild(document.createTextNode(belanja.deskripsi)); // mengappend text node pada div
    let hargaText = document.createTextNode(belanja.harga.toLocaleString());
    let aksiBtn = document.createElement('button');
    let aksiIcon = document.createElement('i'); // membuat elemen <i> untuk icon
    aksiIcon.classList.add('fas', 'fa-trash-alt'); // menambahkan class untuk icon
    aksiBtn.appendChild(aksiIcon); // mengappend elemen <i> ke dalam tombol hapus
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



function kirimWhatsApp() {
  let nomorUrut = 1;
  let text = "Catatan Belanjaan:\n";
  let tabelBelanja = document.getElementById("tabel-belanja");
  let rowLength = tabelBelanja.rows.length;
  for (let i = 1; i < rowLength - 1; i++) {
    let tanggal = tabelBelanja.rows[i].cells[0].innerText;
    let deskripsi = tabelBelanja.rows[i].cells[1].innerText;
    let harga = tabelBelanja.rows[i].cells[2].innerText;
    text += `${nomorUrut}. ${tanggal} - ${deskripsi} - ${harga}\n`;
    nomorUrut++;
  }
  let encodedText = encodeURIComponent(text);
  let phoneNumber = "6285247502344";
  let link = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

  window.open(link, "_blank");
}

feather.replace();