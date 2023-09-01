const loadContents = async(id) => {
    cardContainer.innerHTML = '';
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await response.json();
    const contents = data.data;
    contents.forEach( item => {
        cardLoader(item);
    })
    const buttons = document.getElementById('categories-container').children;
    for(const button of buttons){
        if(button.id == id){
            button.classList = `bg-[#FF1F3D] text-white text-sm md:text-base font-semibold py-1 px-5 rounded disabled:cursor-pointer`;
            button.setAttribute('disabled','true');
        }
        else{
            button.classList = `bg-[#25252526] text-[#252525b3] text-sm md:text-base font-medium py-1 px-5 rounded disabled:cursor-pointer`;
            button.removeAttribute('disabled');
        }
    }
}

const displayCategories = async() => {

    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    const categories = data.data;

    const categoriesContainer = document.getElementById('categories-container');
    categories.forEach(item => {
        const button = document.createElement('button');
        button.classList = `bg-[#25252526] text-[#252525b3] text-sm md:text-base font-medium py-1 px-5 rounded disabled:cursor-pointer`;
        button.innerText = item.category;
        button.setAttribute('onclick',`loadContents(${item.category_id})`);
        button.setAttribute('id',`${item.category_id}`);
        categoriesContainer.appendChild(button);
    });
  
}

displayCategories();
loadContents(1000);