require.config({
paths: {
vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs"
}
});

require(["vs/editor/editor.main"], function(){

const defaultCode = `<!DOCTYPE html>

<html>
<head>
<title>ModZ Builder</title><style>
body{
    font-family:Arial;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}
</style></head>
<body><h1>Hello World</h1><script>
console.log("Hello");
</script></body>
</html>`;const editor = monaco.editor.create(
    document.getElementById("editor"),
    {
        value:
            localStorage.getItem("current_project")
            || defaultCode,

        language:"html",

        theme:"vs-dark",

        automaticLayout:true,

        minimap:{
            enabled:true
        },

        fontSize:14,

        roundedSelection:true,

        scrollBeyondLastLine:false,

        wordWrap:"on",

        smoothScrolling:true
    }
);

window.editor = editor;

function updatePreview(){

    const code =
        editor.getValue();

    localStorage.setItem(
        "current_project",
        code
    );

    const preview =
        document.getElementById(
            "preview"
        );

    preview.srcdoc = code;

}

updatePreview();

let saveTimeout;

editor.onDidChangeModelContent(() => {

    clearTimeout(saveTimeout);

    saveTimeout =
        setTimeout(() => {

            updatePreview();

        },300);

});

});
