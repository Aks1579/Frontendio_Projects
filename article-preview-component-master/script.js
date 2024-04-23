const shareBtn=document.getElementById('share-btn');
const shareBox=document.getElementById('share-wrap');
const author=document.getElementById('author');
shareBtn.addEventListener('click',()=>{
    shareBox.classList.toggle('show');
    author.classList.toggle('show');
})