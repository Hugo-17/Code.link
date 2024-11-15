import './style.css'
import * as monaco from 'monaco-editor';

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
    const html = html_editor.getValue();
    const css = css_editor.getValue()
    const js = js_editor.getValue();

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


const html_editor = monaco.editor.create($html, {
    value: "",
    language: 'html',
    automaticLayout: true,
    lineNumbers: "off",
    minimap: {enabled: false},
    padding: { top: 12, right: 15, bottom: 12, left: 15 },
    overviewRulerLanes: 0,
    overviewRulerBorder: false,
    theme: 'vs-dark'
});

const css_editor = monaco.editor.create($css, {
    value: "",
    language: 'css',
    automaticLayout: true,
    lineNumbers: "off",
    minimap: {enabled: false},
    padding: { top: 12, right: 15, bottom: 12, left: 15 },
    overviewRulerLanes: 0,
    overviewRulerBorder: false,
    theme: 'vs-dark'
});
const js_editor = monaco.editor.create($js, {
    value: "",
    language: 'javascript',
    automaticLayout: true,
    lineNumbers: "off",
    minimap: {enabled: false},
    padding: { top: 12, right: 15, bottom: 12, left: 15 },
    overviewRulerLanes: 0,
    overviewRulerBorder: false,
    theme: 'vs-dark'
});