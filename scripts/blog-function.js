const cardContainer = document.getElementById('card-container');

const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');
const card3 = document.getElementById('card-3');

const blog1 = document.getElementById('blog-1');
const blog2 = document.getElementById('blog-2');
const blog3 = document.getElementById('blog-3');

const goBack = document.getElementsByClassName('go-back');

card1.addEventListener('click',() => {
    cardContainer.classList.add('hidden');
    blog1.classList.remove('hidden');
})

card2.addEventListener('click',() => {
    cardContainer.classList.add('hidden');
    blog2.classList.remove('hidden');
})

card3.addEventListener('click',()=> {
    cardContainer.classList.add('hidden');
    blog3.classList.remove('hidden');
})

for(const item of goBack){
    item.addEventListener('click',() => {
        blog1.classList.add('hidden');
        blog2.classList.add('hidden');
        blog3.classList.add('hidden');

        cardContainer.classList.remove('hidden');
    })
}