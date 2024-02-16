fetch('data.json')
.then(response => response.json())
.then(data => {
    // Access the 'tujuan' and 'risiko' values from the JSON
    const manulifeDana = data.judul;
    const tgl = data.tanggal;
    const judulTujuan = data.tujuanJudul;
    const tujuan = data.tujuanText;
    const judulKlasi = data.risikoJudul;
    const risiko = data.risikoText;

    const informasiDana = data.informasiDana;
    const kolomKiri = informasiDana.kolomKiri;
    const kolomKanan = informasiDana.kolomKanan;

    const alokasiDana = data.alokasi;
    const kolomKiri1 = alokasiDana.kolomKiri;
    const kolomKanan1 = alokasiDana.kolomKanan;

    const porto = data.portofolio;
    const kolomKiri2 = porto.kolomKiri;
    const kolomKanan2 = porto.kolomKanan;

    const ket = data.keterangan;
    const ketText = ket.keteranganText;

    const sejak = data.kinerjaAwal;
    const judulSejak = sejak.judul;

    const bulanan = data.kinerjaBulanan;
    const judulBulanan = bulanan.judul;

    const dana = data.kinerjaDana;
    const judulDana = dana.judul;
    const tabelJudul = dana.judulTabel;
    const time = dana.waktu;
    const row1 = dana.baris1;
    const row2 = dana.baris2;

    const dana1 = data.kinerjaTahunan;
    const judulDana1 = dana1.judul;
    const time1 = dana1.bulan;
    const row3 = dana1.baris1;
    const row4 = dana1.baris2;

    const milik = data.kepemilikan;
    const title = milik.judul;
    const nonAfil = milik.nonAfiliasi;
    const seri = milik.sbsnSeri;
    const donatKet = milik.ketDonat;
    const donatData = milik.dataDonat;

    const review = data.ulasan;
    const ulasan2 = review.ulasanManulife; 




    // Select the HTML elements by their class names and set their innerHTML to the values from the JSON
    document.querySelector('.manuDana').innerHTML = manulifeDana;
    document.querySelector('.des2023').innerHTML = tgl;
    document.querySelector('.tujuanInvest').innerHTML = judulTujuan;
    document.querySelector('.tujuanText').innerHTML = tujuan;
    document.querySelector('.klasiRisiko').innerHTML = judulKlasi;
    document.querySelector('.risikoText').innerHTML = risiko;

    document.querySelector('.tujuanInvest.infoDana').innerHTML = informasiDana.judul;
    document.querySelector('.infoKolom1.tujuan').innerHTML = kolomKiri.satu;
    document.querySelector('.infoKolom1.harga').innerHTML = kolomKiri.dua;
    document.querySelector('.infoKolom1.dana').innerHTML = kolomKiri.tiga;
    document.querySelector('.infoKolom1.unit').innerHTML = kolomKiri.empat;
    document.querySelector('.infoKolom1.nilai').innerHTML = kolomKiri.lima;
    document.querySelector('.infoKolom1.mata').innerHTML = kolomKiri.enam;
    document.querySelector('.infoKolom1.jenis').innerHTML = kolomKiri.tujuh;
    document.querySelector('.infoKolom1.valuasi').innerHTML = kolomKiri.delapan;
    document.querySelector('.infoKolom1.kustodian').innerHTML = kolomKiri.sembilan;
    document.querySelector('.infoKolom1.jasa').innerHTML = kolomKiri.sepuluh;
    document.querySelector('.infoKolom1.kode').innerHTML = kolomKiri.sebelas;
    document.querySelector('.infoKolom1.manajer').innerHTML = kolomKiri.duabelas;

    document.querySelector('.infoKolom3.satu').innerHTML = kolomKanan.satu;
    document.querySelector('.infoKolom3.dua').innerHTML = kolomKanan.dua;
    document.querySelector('.infoKolom3.tiga').innerHTML = kolomKanan.tiga;
    document.querySelector('.infoKolom3.empat').innerHTML = kolomKanan.empat;
    document.querySelector('.infoKolom3.lima').innerHTML = kolomKanan.lima;
    document.querySelector('.infoKolom3.enam').innerHTML = kolomKanan.enam;
    document.querySelector('.infoKolom3.tujuh').innerHTML = kolomKanan.tujuh;
    document.querySelector('.infoKolom3.delapan').innerHTML = kolomKanan.delapan;
    document.querySelector('.infoKolom3.sembilan').innerHTML = kolomKanan.sembilan;
    document.querySelector('.infoKolom3.sepuluh').innerHTML = kolomKanan.sepuluh;
    document.querySelector('.infoKolom3.sebelas').innerHTML = kolomKanan.sebelas;
    document.querySelector('.infoKolom3.duabelas').innerHTML = kolomKanan.duabelas;
    
    document.querySelector('.judulAlo').innerHTML = alokasiDana.judul;
    document.querySelector('.alokasi2 .infoKolom1.satu').innerHTML = kolomKiri1.satu;
    document.querySelector('.alokasi2 .infoKolom1.dua').innerHTML = kolomKiri1.dua;
    document.querySelector('.alokasi2 .infoKolom1.tiga').innerHTML = kolomKiri1.tiga;

    document.querySelector('.alokasi2 .infoKolom3.satu').innerHTML = kolomKanan1.saham;
    document.querySelector('.alokasi2 .infoKolom3.dua').innerHTML = kolomKanan1.obligasi;
    document.querySelector('.alokasi2 .infoKolom3.tiga').innerHTML = kolomKanan1.pasar;

    document.querySelector('.judulPorto').innerHTML = porto.judul;
    document.querySelector('.tabelPortofolio .infoKolom1.satu').innerHTML = kolomKiri2.satu;
    document.querySelector('.tabelPortofolio .infoKolom1.dua').innerHTML = kolomKiri2.dua;
    document.querySelector('.tabelPortofolio .infoKolom1.tiga').innerHTML = kolomKiri2.tiga;
    document.querySelector('.tabelPortofolio .infoKolom1.empat').innerHTML = kolomKiri2.empat;

    document.querySelector('.tabelPortofolio .infoKolom3.satu').innerHTML = kolomKanan2.satu;
    document.querySelector('.tabelPortofolio .infoKolom3.dua').innerHTML = kolomKanan2.dua;
    document.querySelector('.tabelPortofolio .infoKolom3.tiga').innerHTML = kolomKanan2.tiga;
    document.querySelector('.tabelPortofolio .infoKolom3.empat').innerHTML = kolomKanan2.empat;

    document.querySelector('.keterangan').innerHTML = ket.judul;

    const joinedText = Object.values(ketText).join('<br>');
    document.querySelector('.pketerangan').innerHTML = joinedText;

    document.querySelector('.kinerjaSejak').innerHTML = judulSejak;

    document.querySelector('.kinerjaBulanan').innerHTML = judulBulanan;

    document.querySelector('.kinerjaDana').innerHTML = judulDana;
    document.querySelector('.judulKolom').innerHTML = tabelJudul;
    document.querySelector('.kinerjaKolom1').innerHTML = time.satu;
    document.querySelector('.kinerjaKolom2').innerHTML = time.dua;
    document.querySelector('.kinerjaKolom3').innerHTML = time.tiga;
    document.querySelector('.kinerjaKolom4').innerHTML = time.empat;
    document.querySelector('.kinerjaKolom5').innerHTML = time.lima;
    document.querySelector('.kinerjaKolom6').innerHTML = time.enam;
    document.querySelector('.kinerjaKolom7').innerHTML = time.tujuh;
    document.querySelector('.kinerjaKolom8').innerHTML = time.delapan;
    document.querySelector('.kinerjaKolom9').innerHTML = row1.satu;
    document.querySelector('.kinerjaKolom10').innerHTML = row1.dua;
    document.querySelector('.kinerjaKolom11').innerHTML = row1.tiga;
    document.querySelector('.kinerjaKolom12').innerHTML = row1.empat;
    document.querySelector('.kinerjaKolom13').innerHTML = row1.lima;
    document.querySelector('.kinerjaKolom14').innerHTML = row1.enam;
    document.querySelector('.kinerjaKolom15').innerHTML = row1.tujuh;
    document.querySelector('.kinerjaKolom16').innerHTML = row1.delapan;
    document.querySelector('.kinerjaKolom17').innerHTML = row1.sembilan;
    document.querySelector('.kinerjaKolom18').innerHTML = row2.satu;
    document.querySelector('.kinerjaKolom19').innerHTML = row2.dua;
    document.querySelector('.kinerjaKolom20').innerHTML = row2.tiga;
    document.querySelector('.kinerjaKolom21').innerHTML = row2.empat;
    document.querySelector('.kinerjaKolom22').innerHTML = row2.lima;
    document.querySelector('.kinerjaKolom23').innerHTML = row2.enam;
    document.querySelector('.kinerjaKolom24').innerHTML = row2.tujuh;
    document.querySelector('.kinerjaKolom25').innerHTML = row2.delapan;
    document.querySelector('.kinerjaKolom26').innerHTML = row2.sembilan;

    document.querySelector('.tableTahunan .judulKolom').innerHTML = judulDana1;
    document.querySelector('.tableTahunan .kinerjaKolom1').innerHTML = time1.satu;
    document.querySelector('.tableTahunan .kinerjaKolom2').innerHTML = time1.dua;
    document.querySelector('.tableTahunan .kinerjaKolom3').innerHTML = time1.tiga;
    document.querySelector('.tableTahunan .kinerjaKolom4').innerHTML = time1.empat;
    document.querySelector('.tableTahunan .kinerjaKolom5').innerHTML = time1.lima;
    document.querySelector('.tableTahunan .kinerjaKolom6').innerHTML = time1.enam;
    document.querySelector('.tableTahunan .kinerjaKolom7').innerHTML = time1.tujuh;
    document.querySelector('.tableTahunan .kinerjaKolom8').innerHTML = time1.delapan;
    document.querySelector('.tableTahunan .kinerjaKolom9').innerHTML = row3.satu;
    document.querySelector('.tableTahunan .kinerjaKolom10').innerHTML = row3.dua;
    document.querySelector('.tableTahunan .kinerjaKolom11').innerHTML = row3.tiga;
    document.querySelector('.tableTahunan .kinerjaKolom12').innerHTML = row3.empat;
    document.querySelector('.tableTahunan .kinerjaKolom13').innerHTML = row3.lima;
    document.querySelector('.tableTahunan .kinerjaKolom14').innerHTML = row3.enam;
    document.querySelector('.tableTahunan .kinerjaKolom15').innerHTML = row3.tujuh;
    document.querySelector('.tableTahunan .kinerjaKolom16').innerHTML = row3.delapan;
    document.querySelector('.tableTahunan .kinerjaKolom17').innerHTML = row3.sembilan;
    document.querySelector('.tableTahunan .kinerjaKolom18').innerHTML = row4.satu;
    document.querySelector('.tableTahunan .kinerjaKolom19').innerHTML = row4.dua;
    document.querySelector('.tableTahunan .kinerjaKolom20').innerHTML = row4.tiga;
    document.querySelector('.tableTahunan .kinerjaKolom21').innerHTML = row4.empat;
    document.querySelector('.tableTahunan .kinerjaKolom22').innerHTML = row4.lima;
    document.querySelector('.tableTahunan .kinerjaKolom23').innerHTML = row4.enam;
    document.querySelector('.tableTahunan .kinerjaKolom24').innerHTML = row4.tujuh;
    document.querySelector('.tableTahunan .kinerjaKolom25').innerHTML = row4.delapan;
    document.querySelector('.tableTahunan .kinerjaKolom26').innerHTML = row4.sembilan;

    document.querySelector('.textKepemilikan').innerHTML = title;
    const joinKepemilikan1 = Object.values(nonAfil).join('<br>');
    document.querySelector('.textKepemilikan1').innerHTML = joinKepemilikan1;
    const joinKepemilikan2 = Object.values(seri).join('<br>');
    document.querySelector('.textKepemilikan2').innerHTML = joinKepemilikan2;

    const joinKepemilikan4 = Object.entries(donatKet).map(([key, value]) => {
    const percentage = donatData[key];
    return `${percentage}% ${value}`;
    }).join('<br>');

    document.querySelector('.textKepemilikan4').innerHTML = joinKepemilikan4;


    document.querySelector('.ulasanManajer').innerHTML = review.judul;
    document.querySelector('.textUlasan').innerHTML = review.keterangan;
    document.querySelector('.textSanggahan').innerHTML = review.sanggahan;

    document.querySelector('.textAwalSanggahan').innerHTML = review.sanggahanAwal;
    const joinUlasan = Object.values(ulasan2).join('<br>');
    document.querySelector('.textManulife').innerHTML = joinUlasan;

})
.catch(error => console.error('Error loading JSON:', error));