const websiteName = document.getElementById("websiteName");
const websiteLink = document.getElementById("websiteLink");

const copyLinkBtn = document.getElementById("copyLink");

const previewContainer =
    document.getElementById("previewContainer");

const togglePreview =
    document.getElementById("togglePreview");

const preview =
    document.getElementById("preview");

/* ---------------- */
/* PREVIEW TOGGLE   */
/* ---------------- */

let previewVisible = true;

togglePreview.addEventListener("click", () => {

    previewVisible = !previewVisible;

    if(previewVisible){

        previewContainer.style.display = "flex";

        togglePreview.textContent =
            "Hide Preview";

    }else{

        previewContainer.style.display = "none";

        togglePreview.textContent =
            "Show Preview";

    }

});

/* ---------------- */
/* AUTO LINK        */
/* ---------------- */

websiteName.addEventListener("input", () => {

    let clean =
        websiteName.value
        .replace(/[^A-Za-z0-9]/g,"")
        .toLowerCase();

    websiteLink.value = clean;

});

/* ---------------- */
/* COPY LINK        */
/* ---------------- */

copyLinkBtn.addEventListener("click", async () => {

    const link =
        location.origin +
        "/" +
        websiteLink.value;

    try{

        await navigator.clipboard.writeText(link);

        copyLinkBtn.textContent =
            "Copied!";

        setTimeout(() => {

            copyLinkBtn.textContent =
                "Copy Link";

        },1500);

    }catch(err){

        alert(link);

    }

});

/* ---------------- */
/* LIVE PREVIEW     */
/* ---------------- */

function updatePreview(code){

    preview.srcdoc = code;

}

/* ---------------- */
/* DEFAULT PAGE     */
/* ---------------- */

const defaultCode = `
<!DOCTYPE html>
<html>
<head>

<title>Hello</title>

<style>

body{
    background:#0d1117;
    color:white;

    display:flex;
    justify-content:center;
    align-items:center;

    height:100vh;

    font-family:Arial;
}

</style>

</head>
<body>

<h1>Hello World</h1>

</body>
</html>
`;

updatePreview(defaultCode);

/* ---------------- */
/* SAVE PROJECT     */
/* ---------------- */

function saveProject(code){

    localStorage.setItem(
        "current_project",
        code
    );

}

/* ---------------- */
/* LOAD PROJECT     */
/* ---------------- */

function loadProject(){

    return localStorage.getItem(
        "current_project"
    );

}

window.updatePreview = updatePreview;
window.saveProject = saveProject;
window.loadProject = loadProject;
