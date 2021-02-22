function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove)

    function onMove(event) {
        let distance = event.pageX - event.target.offsetLeft;
        let width = event.target.clientWidth
        let percent = Math.floor(distance / width * 100);

        document.getElementById('result').textContent = `${percent}%`
    }
}