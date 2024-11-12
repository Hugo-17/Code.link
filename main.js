import './style.css'

const $ = selector => document.querySelector(selector);

const $html = $('#html');
const $css = $('#css');
const $js = $('#js');

$html.addEventListener('input', update);
$css.addEventListener('input', update);
$js.addEventListener('input', update);

function update() {
    const html = createHTML();
    $('iframe').setAttribute('srcdoc', html);
}

const createHTML = () => {
    const html = $html.value;
    const css = $css.value;
    const js = $js.value;

    return `
    <!doctype html>
    <html lang="en">
        <head>
            <style>
                ${css}
            </style>
        </head>
        <body>
            ${html}
            <script>
                ${js}
            </script>
        </body>
    </html>
    `
}