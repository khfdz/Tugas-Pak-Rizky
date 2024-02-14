// script.js
var labels = ['Jul-07', 'Apr-10', 'Jan-13', 'Oct-15', 'Jun-18', 'Mar-21', 'Dec-23'];
var data = [925.00, 1075.00, 1275.00, 1625.00, 2325.00, 2425.00, 2675.00];

var Linectx = document.getElementById('lineChart').getContext('2d');
var myChart1 = new Chart(Linectx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Total Perkembangan Dana: 141.31%',
            data: data,
            fill: false,
            backgroundColor: '#189a5a', // Ganti warna latar belakang batang dengan warna yang diinginkan
            borderColor: '#189a5a', // Ganti warna garis batang dengan warna yang diinginkan
            tension: 0.5
        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        return value; // Mengembalikan nilai tanpa simbol persentase
                    }
                }
            }
        }
    }
});
