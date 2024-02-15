fetch('data.json')
    .then(response => response.json())
    .then(data => {
        var labels = data.kinerjaAwal.bulan;
        var dataKinerja = data.kinerjaAwal.dataKinerja.map(Number);
        var judul = data.kinerjaAwal.judulLabel;

        var Barctx = document.getElementById('barChart').getContext('2d');
        var myChart = new Chart(Barctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: judul,
                    data: dataKinerja,
                    fill: false,
                    backgroundColor: '#189a5a',
                    borderColor: '#189a5a',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: {
                        ticks: {
                            callback: function(value) {
                                return value + '%';
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

    