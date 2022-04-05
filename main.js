const navList = document.querySelector('#nav__items');
const openBtn = document.querySelector('#open__nav-btn');
const closeBtn = document.querySelector('#close__nav-btn');

openBtn.addEventListener('click',()=>{
    navList.style.display = 'flex';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});
closeBtn.addEventListener('click',()=>{
    navList.style.display = 'none';
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
});

// sticky navbar


