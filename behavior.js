var thumbnailElement=document.getElementById("smart_thumbnail");

function enlargeImg(){
    thumbnailElement.style.transform="scale(1.5)";
    thumbnailElement.style.transition="transform 0.25s ease";
function resetImg(){
    thumbnailElement.style.transform="scale(1)";
    thumbnailElement.style.transition="transform 0.25s ease";