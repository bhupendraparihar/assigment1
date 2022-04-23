function drawChart(canvasElement) {
    const ctx = canvasElement;
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        options: {
            cutout: 140
        },
        data: {
            datasets: [{
                label: 'My First Dataset',
                data: [89, 11],
                backgroundColor: [
                    '#CCC',
                    '#FFF'
                ],
                hoverOffset: 4
            }]
        }
    });
}

