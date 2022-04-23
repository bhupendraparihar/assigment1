function incrementThumbsCount(el) {
    const countSpan = el.getElementsByTagName('span')[0];
    let count = countSpan.innerText;
    
    if(count) {
        countSpan.innerText = +count + 1;
    } else {
        countSpan.innerText = 1;
    }
}

function drawCharts() {
    [...document.getElementsByClassName('percentage-chart')]
        .forEach(element => {
            drawChart(element);
        });
}

drawCharts();

