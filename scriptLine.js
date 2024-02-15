fetch('data.json')
    .then(response => response.json())
    .then(data => {
        var labels = data.kinerjaBulanan.bulan;
        var dataKinerja = data.kinerjaBulanan.dataKinerja.map(Number);
        var judul = data.kinerjaBulanan.judulLabel;

        var totalPerubahan = dataKinerja[dataKinerja.length - 1] - dataKinerja[0];

        dataKinerja.push(totalPerubahan);

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
