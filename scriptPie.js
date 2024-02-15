let donat; // Variabel donat didefinisikan di luar blok fetch

fetch('data.json')
    .then(response => response.json())
    .then(data => {

        donat = Object.values(data.kepemilikan.dataDonat).map(Number);
        var judul = data.kepemilikan.ketDonat;
        var title = Object.values(judul);

        console.log(donat); 
        console.log(title); 

        const pieData = {
            labels: title ,
            datasets: [{
                data: donat,
                backgroundColor: [
                    '#4f81bc', // warna 1
                    '#c14f4e', // warna 2
                    '#9bbb58', // warna 3
                    '#8064a1', // warna 4
                    '#4aacc5', // warna 5
                    '#f79647', // warna 6
                    '#2c4d76', // warna 7
                    '#772c29', // warna 8
                    '#607530', // warna 9
                    '#2c4d76', // warna 10
                    '#276a7b', // warna 11
                    '#b65707'  // warna 12
                ],
                hoverOffset: 4
            }]
        };

        const config = {
            type: 'pie',
            data: pieData,
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };
        

        var myPieChart = new Chart(
            document.getElementById('pieChart'),
            config
        );
    });
