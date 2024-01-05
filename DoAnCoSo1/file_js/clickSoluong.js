let buyinggElement = document.getElementById('buyingg');
let buy = buyinggElement.value;
let render = (buy) => {
    buyinggElement.value = buy;
}

let handlePlus = () => {
    buy++;
    render(buy);
}
let handleMinus = () => {
    if (buy > 1) {
        buy--;
        render(buy);
    }
    buyinggElement.addEventListener('input', () => {
        buy = buyinggElement.value;
        buy = parseInt(buy);
        buy = (isNaN(buy) || buy == 0) ? 1 : buy;
        render(buy);

    })
}
