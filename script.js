document.addEventListener('DOMContentLoaded', function () {
    const elasticMan = document.getElementById('elasticMan');
    let isStretching = false;

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowUp' && !isStretching) {
            stretch();
        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.key === 'ArrowUp') {
            release();
        }
    });

    function stretch() {
        isStretching = true;
        elasticMan.style.height = '300px'; // Adjust the stretched height as needed
    }

    function release() {
        isStretching = false;
        elasticMan.style.height = '150px'; // Set the original height
    }
});
