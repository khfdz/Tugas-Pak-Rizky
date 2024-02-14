// script.js
var labels = ['Dec-20', 'Jun-21', 'Dec-21', 'Jun-22', 'Dec-22', 'Jun-23', 'Dec-23'];
var data = [6, 1, 3, -3, 1, -1, -2, 2, 2.5,
            3, 3.2, -3, -2, -1, 3, 2.8, 2.5,
            2.8, 3, 2, 3, -1, 2, 1, 3.5, 2, 0,
            1, 2, -1, 1.8, 2, 1, -1, 4, 2, 2
            ];

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Persentase Perubahan Kinerja Bulanan',
            data: data,
            fill: false,
            backgroundColor: '#189a5a', // Ganti warna latar belakang batang dengan warna yang diinginkan
            borderColor: '#189a5a', // Ganti warna garis batang dengan warna yang diinginkan
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        return value + '%'; // Menambahkan simbol persentase ke sumbu Y
                    }
                }
            }
        }
    }
});
