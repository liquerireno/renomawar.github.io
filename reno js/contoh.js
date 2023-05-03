const form = document.querySelector('form');
const data = [
  { deskripsiBelanja:'Sayur', harga:'7.000'},
{ deskripsiBelanja:'Belanja Alfamart', harga:'112.000'},
{ deskripsiBelanja:'Nasi Kuning', harga:'8.000'},
{ deskripsiBelanja:'Belanja Alfamart', harga:'15.400'},
{ deskripsiBelanja:'Sayur', harga:'2.000'},
{ deskripsiBelanja:'Bensin', harga:'25.000'},
{ deskripsiBelanja:'Lauk dan Sayur', harga:'36.000'},
{ deskripsiBelanja:'Persembahan', harga:'20.000'},
{ deskripsiBelanja:'Sayur', harga:'26.000'},
{ deskripsiBelanja:'Roti Tawar', harga:'9.000'},
{ deskripsiBelanja:'Kaos Kaki', harga:'12.000'},
{ deskripsiBelanja:'Lauk dan Sayur', harga:'26.000'},
{ deskripsiBelanja:'Bensin', harga:'25.000'},
{ deskripsiBelanja:'Jojo Jus', harga:'13.500'},
{ deskripsiBelanja:'Sayur dan Jajan', harga:'22.000'},
{ deskripsiBelanja:'Belanja Pasar', harga:'191.000'},
{ deskripsiBelanja:'Persembahan', harga:'12.000'},
{ deskripsiBelanja:'Bubur kacang Hijau', harga:'10.000'},
{ deskripsiBelanja:'Jamur', harga:'10.000'},
{ deskripsiBelanja:'Lubrican Durex Play', harga:'70.000'},
{ deskripsiBelanja:'Jeruk', harga:'60.000'},
{ deskripsiBelanja:'Rocket Chiken', harga:'26.000'},
{ deskripsiBelanja:'Mesin Pompa Air Mini', harga:'150.000'},
{ deskripsiBelanja:'Adapter 5 Volt', harga:'60.000'},
{ deskripsiBelanja:'Parkir', harga:'4.000'},
{ deskripsiBelanja:'Selang dan alat lengkap', harga:'105.000'},
{ deskripsiBelanja:'Perlengkapan Mesin Tambahan', harga:'75.000'},
{ deskripsiBelanja:'Gorengan', harga:'2.000'},
{ deskripsiBelanja:'Ikan Merah', harga:'39.000'},
{ deskripsiBelanja:'Galon', harga:'6.000'},
{ deskripsiBelanja:'Bensin Mio', harga:'25.000'},
{ deskripsiBelanja:'Teh Hangat', harga:'10.000'},
{ deskripsiBelanja:'Ayam Kampung', harga:'105.000'},
{ deskripsiBelanja:'Toge', harga:'4.000'},
{ deskripsiBelanja:'Susu Kental Manis', harga:'12.000'},
{ deskripsiBelanja:'Jagung', harga:'10.000'},
{ deskripsiBelanja:'Sahang', harga:'7.000'},
{ deskripsiBelanja:'Bumbu Liak', harga:'2.000'},
{ deskripsiBelanja:'Kouta Bapak Telkomsel', harga:'45.000'},
{ deskripsiBelanja:'Belanja Xing Mart', harga:'268.000'},
{ deskripsiBelanja:'Belanja Jajan ( Pantang )', harga:'63.000'},
{ deskripsiBelanja:'Tabungan Credit Union', harga:'650.000'},
{ deskripsiBelanja:'Belanja', harga:'202.000'},
{ deskripsiBelanja:'Kouta Reno', harga:'100.000'},
{ deskripsiBelanja:'Sampah dan Keamanan', harga:'95.000'},
{ deskripsiBelanja:'Potong Rambut', harga:'52.000'},
{ deskripsiBelanja:'Kamala & Parfum', harga:'376.000'},
{ deskripsiBelanja:'Tahu', harga:'10.000'},
{ deskripsiBelanja:'Udang', harga:'40.000'},
{ deskripsiBelanja:'Ikan Bawal', harga:'34.000'},
{ deskripsiBelanja:'Ikan Sarden', harga:'18.000'},
{ deskripsiBelanja:'Bayi Jagung', harga:'5.000'},
{ deskripsiBelanja:'Kentang', harga:'10.000'},
{ deskripsiBelanja:'Buncis', harga:'9.000'},
{ deskripsiBelanja:'Hekeng', harga:'17.000'},
{ deskripsiBelanja:'Ikan Asin', harga:'8.000'},
{ deskripsiBelanja:'Parkir', harga:'2.000'},
{ deskripsiBelanja:'Alpukat', harga:'36.000'},
{ deskripsiBelanja:'Bawang Putih', harga:'11.000'},
{ deskripsiBelanja:'Studio Bangunan', harga:'105.000'},
{ deskripsiBelanja:'Mesin Bor', harga:'420.000'},
{ deskripsiBelanja:'Parkir', harga:'2.000'},
{ deskripsiBelanja:'Kunci Pintu WC', harga:'5.000'},
{ deskripsiBelanja:'Snack', harga:'25.000'},
{ deskripsiBelanja:'Listrik', harga:'100.000'},
{ deskripsiBelanja:'Potong Celana Panjang', harga:'10.000'},
{ deskripsiBelanja:'Susu Uht', harga:'8.300'},
{ deskripsiBelanja:'Semangka & Salak', harga:'32.000'},
{ deskripsiBelanja:'Persembahan', harga:'32.000'},
{ deskripsiBelanja:'Kebab Habib 2 pcs', harga:'50.000'},
{ deskripsiBelanja:'Kopi Aming', harga:'11.000'},
{ deskripsiBelanja:'Kue', harga:'3.000'},
{ deskripsiBelanja:'Sayur', harga:'3.000'},
{ deskripsiBelanja:'Parkir', harga:'2.000'},
{ deskripsiBelanja:'Pare', harga:'5.000'},
{ deskripsiBelanja:'Bensin motor mio jt', harga:'30.000'},
{ deskripsiBelanja:'Bensin motor vxion', harga:'120.000'},
{ deskripsiBelanja:'Sayur pak coy', harga:'3.000'},
{ deskripsiBelanja:'Ngupi', harga:'7.000'},
{ deskripsiBelanja:'Parkir', harga:'2.000'},
{ deskripsiBelanja:'Galon', harga:'6.000'},
{ deskripsiBelanja:'Kue', harga:'3.000'},
{ deskripsiBelanja:'Sate dan parkir', harga:'73.000'},
{ deskripsiBelanja:'Kacang Panjang', harga:'3.000'},
{ deskripsiBelanja:'Telor 30 butir', harga:'55.500'},
{ deskripsiBelanja:'Ikan', harga:'35.000'},
{ deskripsiBelanja:'Semangka', harga:'9.000'},
{ deskripsiBelanja:'Obat', harga:'43.000'},
{ deskripsiBelanja:'Buah naga', harga:'20.000'},
{ deskripsiBelanja:'Snack Nabati', harga:'5.000'},
{ deskripsiBelanja:'Pop mie', harga:'4.900'},
{ deskripsiBelanja:'Pop mie soto', harga:'4.900'},
{ deskripsiBelanja:'Royal palmia mentega', harga:'9.500'},
{ deskripsiBelanja:'Kue pia', harga:'9.000'},
{ deskripsiBelanja:'Snack saltcheese', harga:'11.000'},
{ deskripsiBelanja:'Snack saltcheese khong guan', harga:'5.500'},
{ deskripsiBelanja:'Happydent', harga:'11.500'},
{ deskripsiBelanja:'Kantong jerapah', harga:'9.500'},
{ deskripsiBelanja:'Dus plastik', harga:'20.000'},
{ deskripsiBelanja:'Kantong sampah', harga:'24.000'},
{ deskripsiBelanja:'Koepoe pasta kue', harga:'5.500'},
{ deskripsiBelanja:'Keamanan maret 2023', harga:'35.000'},
{ deskripsiBelanja:'Tempe, asam dayak, cabe merah kering, tomat', harga:'9.000'},
{ deskripsiBelanja:'Isi kouta mawar', harga:'100.000'},
{ deskripsiBelanja:'Sangobion', harga:'17.500'},
{ deskripsiBelanja:'Gas', harga:'19.000'},
{ deskripsiBelanja:'Keripik ubi', harga:'5.000'},
{ deskripsiBelanja:'Sukro', harga:'11.000'},
{ deskripsiBelanja:'Skm', harga:'4.500'},
{ deskripsiBelanja:'Bensin', harga:'30.000'},
{ deskripsiBelanja:'Beli baut 2 pcs', harga:'6.000'},
{ deskripsiBelanja:'Matabor merk ryu ukuran 2 mm', harga:'11.000'},
{ deskripsiBelanja:'Oli Motor yamaha sport', harga:'60.000'},
{ deskripsiBelanja:'Sprite', harga:'9.800'},
{ deskripsiBelanja:'Buah mangga 1 kg', harga:'35.000'},
{ deskripsiBelanja:'Sendal', harga:'45.000'},
{ deskripsiBelanja:'Aqua', harga:'5.000'},
{ deskripsiBelanja:'Penyambung & oli sock depan', harga:'135.000'},
{ deskripsiBelanja:'Lampu motor philips', harga:'45.000'},
{ deskripsiBelanja:'Ayam', harga:'44.000'},
{ deskripsiBelanja:'Sayur', harga:'9.000'},
{ deskripsiBelanja:'Kwh listrik', harga:'40.000'},
{ deskripsiBelanja:'Sayur', harga:'11.500'},
{ deskripsiBelanja:'Susu mamak', harga:'116.400'},
{ deskripsiBelanja:'Bensin', harga:'25.000'},
{ deskripsiBelanja:'Sayur', harga:'8.000'},
{ deskripsiBelanja:'Bakso+mi', harga:'10.000'},
{ deskripsiBelanja:'Tissu', harga:'52.000'},
{ deskripsiBelanja:'Malkist', harga:'6.500'},
{ deskripsiBelanja:'Masako', harga:'4.500'},
{ deskripsiBelanja:'Mie', harga:'5.500'},
{ deskripsiBelanja:'Wafer', harga:'11.500'},
{ deskripsiBelanja:'Sambel', harga:'10.600'},
{ deskripsiBelanja:'Nuvo', harga:'5.000'},
{ deskripsiBelanja:'Sikat gig', harga:'3.400'},
{ deskripsiBelanja:'Baby oil', harga:'12.500'},
{ deskripsiBelanja:'Uang kas', harga:'60.000'},
{ deskripsiBelanja:'Jeruk dan pir', harga:'18.000'},
{ deskripsiBelanja:'Jahe', harga:'3.000'},
{ deskripsiBelanja:'pisang', harga:'10.000'},
{ deskripsiBelanja:'jus', harga:'7.000'},
{ deskripsiBelanja:'sosis', harga:'5.000'},
{ deskripsiBelanja:'gorengan', harga:'5.000'},
{ deskripsiBelanja:'es buah', harga:'10.000'},
{ deskripsiBelanja:'Berobat', harga:'50.000'},
{ deskripsiBelanja:'Pulsa pak su', harga:'100.000'},
{ deskripsiBelanja:'Obat siladex', harga:'15.500'},
{ deskripsiBelanja:'Ayam bakar', harga:'30.000'},
{ deskripsiBelanja:'Bering motor', harga:'30.000'},
{ deskripsiBelanja:'Sayur nugget', harga:'12.000'},
{ deskripsiBelanja:'Motor pak su mangkok stang', harga:'220.000'},
{ deskripsiBelanja:'Buah salak', harga:'12.000'},
{ deskripsiBelanja:'Buah mangga', harga:'22.000'},
{ deskripsiBelanja:'Madu Tj', harga:'26.500'},
{ deskripsiBelanja:'Makan simpang ampar', harga:'25.000'},
{ deskripsiBelanja:'Belanja alfa', harga:'30.800'},
{ deskripsiBelanja:'Belanja igr', harga:'55.000'},
{ deskripsiBelanja:'Persembahan', harga:'30.000'},
{ deskripsiBelanja:'Nasgor', harga:'30.000'},
{ deskripsiBelanja:'Roti tawar', harga:'27.000'},
{ deskripsiBelanja:'Isi bensin', harga:'100.000'},
{ deskripsiBelanja:'Bubur kacang hijau', harga:'10.000'},
{ deskripsiBelanja:'Persembahan', harga:'7.000'},
{ deskripsiBelanja:'Persembahan', harga:'10.000'},
{ deskripsiBelanja:'Booter casis belakang motor', harga:'150.000'},
{ deskripsiBelanja:'Nyantai dibukit', harga:'8.000'},
{ deskripsiBelanja:'Ayam bakar', harga:'15.000'},
{ deskripsiBelanja:'Capcai', harga:'20.000'},
{ deskripsiBelanja:'Persembahan', harga:'32.000'},
{ deskripsiBelanja:'Naskun', harga:'30.000'},
{ deskripsiBelanja:'Angin ban', harga:'2.000'},
{ deskripsiBelanja:'Persembahan', harga:'22.000'},
{ deskripsiBelanja:'Air mineral', harga:'4.000'},
{ deskripsiBelanja:'Mkn simpang ampar', harga:'30.000'},
{ deskripsiBelanja:'Nila', harga:'20.000'},
{ deskripsiBelanja:'Sarden', harga:'15.000'},
{ deskripsiBelanja:'Sayur', harga:'11.000'},
{ deskripsiBelanja:'Telur', harga:'19.000'},
{ deskripsiBelanja:'Uang keamanan', harga:'35.000'},
{ deskripsiBelanja:'Sayur', harga:'16.000'},
{ deskripsiBelanja:'Galon', harga:'6.000'},
{ deskripsiBelanja:'Beras merah', harga:'360.000'},
{ deskripsiBelanja:'Udang', harga:'20.000'},
{ deskripsiBelanja:'Sotong', harga:'20.000'},
{ deskripsiBelanja:'Ikan', harga:'12.000'},
{ deskripsiBelanja:'Listrik mamak', harga:'100.000'},
{ deskripsiBelanja:'Alat TV', harga:'246.000'},
{ deskripsiBelanja:'Cuci pelak motor', harga:'15.000'},
{ deskripsiBelanja:'Mixue ice cream 2 pcs', harga:'16.000'},
{ deskripsiBelanja:'Mixue sundae boba', harga:'16.000'},
{ deskripsiBelanja:'Parkir mixue', harga:'2.000'},
{ deskripsiBelanja:'Bakmi goreng', harga:'27.000'},
{ deskripsiBelanja:'Kwitau goreng', harga:'27.000'},
{ deskripsiBelanja:'Bakmi parkir', harga:'2.000'},
{ deskripsiBelanja:'Air putih es', harga:'2.000'},
{ deskripsiBelanja:'Loreal facial wash', harga:'51.200'},
{ deskripsiBelanja:'Loreal serum', harga:'88.000'},
{ deskripsiBelanja:'Cotonbat', harga:'8.000'},
{ deskripsiBelanja:'Deadoran nivea', harga:'15.200'},
{ deskripsiBelanja:'Jedai', harga:'7.000'},
{ deskripsiBelanja:'Wardah with blam bibir', harga:'22.900'},
{ deskripsiBelanja:'Minyak kayu putih', harga:'6.000'},
{ deskripsiBelanja:'Truvt wash face', harga:'100.000'},
{ deskripsiBelanja:'Masker biaqua', harga:'5.000'},
{ deskripsiBelanja:'Susu dancow agui', harga:'92.500'},
{ deskripsiBelanja:'Softteck', harga:'13.500'},
{ deskripsiBelanja:'Baygon', harga:'4.500'},
{ deskripsiBelanja:'Momogi', harga:'5.000'},
{ deskripsiBelanja:'Parfum pocket', harga:'10.000'},
{ deskripsiBelanja:'Deodoran parfum napoleon', harga:'29.500'},
{ deskripsiBelanja:'Selsun', harga:'23.000'},
{ deskripsiBelanja:'Angin ban nitrogen', harga:'10.000'},
{ deskripsiBelanja:'Parkir', harga:'3.000'},
{ deskripsiBelanja:'Ikan sarden', harga:'20.000'},
{ deskripsiBelanja:'Udang', harga:'40.000'},
{ deskripsiBelanja:'Ayam', harga:'50.000'},
{ deskripsiBelanja:'Kangkung', harga:'7.000'},
{ deskripsiBelanja:'Tempe', harga:'5.000'},
{ deskripsiBelanja:'Sprite', harga:'10.000'},
{ deskripsiBelanja:'Sikat gigi', harga:'4.500'},
{ deskripsiBelanja:'Telor asin 3 pcs', harga:'12.000'},
{ deskripsiBelanja:'Kopi lampung 2 pcs', harga:'25.000'},
{ deskripsiBelanja:'Kacang panjang', harga:'5.000'},
{ deskripsiBelanja:'Oli motor vixion april 2023', harga:'60.000'},
{ deskripsiBelanja:'Oli motor mio april 2023', harga:'63.000'},
{ deskripsiBelanja:'Arang dinamo starter', harga:'75.000'},
{ deskripsiBelanja:'Bensin mio', harga:'30.000'},
{ deskripsiBelanja:'Galon', harga:'6.000'},
{ deskripsiBelanja:'Bensin vixion', harga:'100.000'},
{ deskripsiBelanja:'Belacan dan kunyit bubuk', harga:'2.000'},
{ deskripsiBelanja:'Kapas', harga:'10.700'},
{ deskripsiBelanja:'Aiken', harga:'9.000'},
{ deskripsiBelanja:'Larisst cuci tangan', harga:'6.100'},
{ deskripsiBelanja:'Minyak goreng', harga:'14.000'},
{ deskripsiBelanja:'Bensin', harga:'30.000'},
{ deskripsiBelanja:'Masker', harga:'50.000'},
{ deskripsiBelanja:'Sampah april', harga:'25.000'},
{ deskripsiBelanja:'Sayur dan lauk', harga:'59.000'},
{ deskripsiBelanja:'Belanja alfa m.gor,skm, marjan', harga:'63.200'},
{ deskripsiBelanja:'Telur', harga:'20.000'},
{ deskripsiBelanja:'Persembahan', harga:'12.000'},
{ deskripsiBelanja:'Kerupuk+tahu', harga:'10.000'},
{ deskripsiBelanja:'Belanja pasar', harga:'73.500'},
{ deskripsiBelanja:'Jeruk madu 2kg & matoa', harga:'75.000'},
{ deskripsiBelanja:'Persembahan', harga:'22.000'},
{ deskripsiBelanja:'Babi', harga:'200.000'},
{ deskripsiBelanja:'Indomiea dan telur', harga:'28.500'},
{ deskripsiBelanja:'Sayur', harga:'2.000'},
{ deskripsiBelanja:'Pisang', harga:'5.000'},
{ deskripsiBelanja:'Tomat dan teri', harga:'15.000'},
{ deskripsiBelanja:'Ayam', harga:'50.000'},
{ deskripsiBelanja:'Sayur mayur', harga:'19.500'},
{ deskripsiBelanja:'Perlengkapan rumah kemuning', harga:'51.500'},
{ deskripsiBelanja:'Garam dutergen', harga:'3.500'},
{ deskripsiBelanja:'Bensin motor mio', harga:'32.000'},
{ deskripsiBelanja:'Gas 12 kg', harga:'230.000'},
{ deskripsiBelanja:'Pentol kuah', harga:'10.000'},
{ deskripsiBelanja:'Sayur', harga:'5.000'},
{ deskripsiBelanja:'Obat salep kaki', harga:'35.900'},
{ deskripsiBelanja:'Kouta mawar', harga:'100.000'},
{ deskripsiBelanja:'Nabung cu', harga:'650.000'},
{ deskripsiBelanja:'Telor 10 butir', harga:'20.000'},
{ deskripsiBelanja:'Kouta Bapak', harga:'50.000'},
{ deskripsiBelanja:'Galon', harga:'6.000'},
{ deskripsiBelanja:'Potong rambut', harga:'25.000'},
{ deskripsiBelanja:'Ayam junior', harga:'9.000'},
{ deskripsiBelanja:'Martabak', harga:'25.000'},
{ deskripsiBelanja:'Cabe dan kacang', harga:'7.000'},
{ deskripsiBelanja:'Fresh care, kue kuean', harga:'29.400'},
{ deskripsiBelanja:'Sayur', harga:'19.500'},
{ deskripsiBelanja:'Susu dancaow', harga:'94.000'},
{ deskripsiBelanja:'Website niag hoster', harga:'22.000'},
{ deskripsiBelanja:'Ikan mata besar', harga:'33.000'},
{ deskripsiBelanja:'Udang', harga:'20.000'},
{ deskripsiBelanja:'B. Putih', harga:'16.000'},
{ deskripsiBelanja:'Sayur 3ikat', harga:'10.000'},
{ deskripsiBelanja:'Ikan teri', harga:'9.000'},
{ deskripsiBelanja:'Telur asin, kemiri', harga:'9.000'},
{ deskripsiBelanja:'Baby corn', harga:'5.000'},
{ deskripsiBelanja:'Indomi 2,sprite 1,bayclin, wipol, parkir', harga:'33.600'},
{ deskripsiBelanja:'Persembahan', harga:'12.000'},

];

// Function to add a new item to the data array
function addItem(deskripsi, harga) {
  const existingItem = data.find(item => item.deskripsiBelanja.toLowerCase() === deskripsi.toLowerCase());
  if (existingItem) {
    existingItem.harga = harga;
  } else {
    data.push({ deskripsiBelanja: deskripsi, harga: harga });
  }
}

// Function to display the list of items in the data array
function displayItems() {
  const table = document.querySelector('#daftar-belanjaan tbody');
  table.innerHTML = '';
  data.forEach((item) => {
    const row = table.insertRow();
    const deskripsiCell = row.insertCell(0);
    deskripsiCell.textContent = item.deskripsiBelanja;
    const hargaCell = row.insertCell(1);
    hargaCell.textContent = `Rp. ${item.harga.toLocaleString('id-ID')}`;
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchQuery = document.querySelector('#search').value.toLowerCase();
  let foundItems = data.filter((item) => item.deskripsiBelanja.toLowerCase().includes(searchQuery));
  if (foundItems.length > 0) {
    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = '';
    const resultTable = document.createElement('table');
    const resultHeader = resultTable.insertRow();
    const deskripsiHeader = resultHeader.insertCell(0);
    const hargaHeader = resultHeader.insertCell(1);
    deskripsiHeader.textContent = 'Deskripsi Belanja';
    hargaHeader.textContent = 'Harga';
    foundItems.forEach((item) => {
      const resultRow = resultTable.insertRow();
      const deskripsiCell = resultRow.insertCell(0);
      deskripsiCell.textContent = item.deskripsiBelanja;
      const hargaCell = resultRow.insertCell(1);
      hargaCell.textContent = 'Rp. ' + item.harga.toLocaleString('id-ID');
    });
    resultDiv.appendChild(resultTable);
    resultDiv.style.display = 'block';
    document.querySelector('#daftar-belanjaan').style.display = 'none';
  } else {
    document.querySelector('#result').style.display = 'none';
    document.querySelector('#daftar-belanjaan').style.display = 'block';
    alert('Item Belanja tidak ditemukan.');
  }

  const h2 = document.querySelector('h2');
  h2.style.display = 'none';
  
});

const buttonRefresh = document.querySelector('button[type="reset"]');
buttonRefresh.addEventListener('click', () => {
  location.reload();
});


document.querySelector('#result').addEventListener('click', (event) => {
  document.querySelector('#search').value = event.target.dataset.deskripsiBelanja;
  document.querySelector('form').submit();
});

const formAdd = document.querySelector('#form-add');
formAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  const deskripsi = document.querySelector('#deskripsi-belanja').value;
  const harga = document.querySelector('#harga').value;
  addItem(deskripsi, harga);
  displayItems();
  formAdd.reset();
});

// Display the initial list of items
displayItems();


