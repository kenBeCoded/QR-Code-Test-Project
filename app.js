const qrCode = document.querySelector('.qrCode');
const textBox = document.querySelector('#textBox');
const btnGnr = document.querySelector('.btnGnr');
const btnDwn = document.querySelector('.btnDwn');
const selectSize = document.querySelector('.selectSize');


btnGnr.addEventListener('click', function () {
    if (textBox.value === '') {
        qrCode.style.display = 'none';
        textBox.placeholder = 'You didnt put anything.';
        textBox.classList.add('textBoxShake');
        setTimeout(() => {
            textBox.classList.remove('textBoxShake');
        }, 600);
    } else {
        qrCode.style.display = 'block';
        const data = encodeURIComponent(textBox.value);
        qrCode.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + data;
        textBox.placeholder = 'Text Here';
    }
})

btnDwn.addEventListener('click', function () {
    const data = encodeURIComponent(textBox.value);
    if (textBox.value === '') {
        qrCode.style.display = 'none';
        textBox.placeholder = 'nothing to download.';
        textBox.classList.add('textBoxShake');
        setTimeout(() => {
            textBox.classList.remove('textBoxShake');
        }, 600);
    } else {
        async function downloadImage(imageSrc) {
            const image = await fetch(imageSrc);
            const imageBlog = await image.blob();
            const imageURL = URL.createObjectURL(imageBlog);

            const link = document.createElement('a');
            link.href = imageURL;
            link.download = 'QR_CODE';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        downloadImage(`https://api.qrserver.com/v1/create-qr-code/?size=${selectSize.value}x${selectSize.value}&data=${data}`);
    }


})

// update with this to read "#" and "&"
// const data = encodeURIComponent(textBox.value);

