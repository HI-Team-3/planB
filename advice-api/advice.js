function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            if (!response.ok) {
                throw Error("Promise rejected");
            }
            return response.json();
        })
        .then(data => {
            console.log(data.slip);

            const html = `
            <div class="stitch-board">
                <p class="advice">${data.slip.advice}</p>
                <div class="cross-stitch"></div>
            </div>
            `
            console.log(html);
            document.querySelector('#getAdviceData').insertAdjacentHTML('afterend', html);

        })
        .catch(err => console.log(err));
}

fetchAdvice();