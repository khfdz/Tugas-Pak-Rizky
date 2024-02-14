fetch('data.json')
    .then(response => response.json())
    .then(data => {
        var labels = data.kinerjaBulanan.bulan;
        var dataKinerja = data.kinerjaBulanan.dataKinerja.map(Number);
        var judul = data.kinerjaBulanan.judulLabel;

        // Menghitung persentase perubahan kinerja bulanan
        var persentasePerubahan = [];
        for (let i = 1; i < dataKinerja.length; i++) {
            var perubahan = ((dataKinerja[i] - dataKinerja[i - 1]) / dataKinerja[i - 1]) * 100;
            persentasePerubahan.push(perubahan);
        }

        // Menjumlahkan persentase perubahan
        var totalPerubahan = persentasePerubahan.reduce((total, amount) => total + amount, 0);

        // Menambahkan total perubahan ke dataKinerja
        dataKinerja.push(totalPerubahan);

        // Menyimpan label total pada bulan terakhir
        labels.push('Total Perubahan');

        var Linectx = document.getElementById('lineChart').getContext('2d');

        var myChart1 = new Chart(Linectx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: judul + totalPerubahan.toFixed(2) + '%',
                    data: dataKinerja,
                    fill: false,
                    backgroundColor: '#189a5a',
                    borderColor: '#189a5a',
                    tension: 0.5
                }]
            },
            options: {
                scales: {
                    y: {
                        ticks: {
                            callback: function(value) {
                                return value;
                            }
                        }
                    }
                }
            }
        });
    })
    .catch(error => {
        console.error('Error loading data:', error);
    });
