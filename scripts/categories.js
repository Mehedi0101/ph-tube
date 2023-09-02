const loadContents = async(id,sortStatus) => {
    currentId = id;
    cardContainer.innerHTML = '';
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await response.json();
    let contents = data.data;
    const noContent = document.getElementById('no-content');
    (contents.length === 0) ? noContent.classList.remove('hidden') : noContent.classList.add('hidden');

    if(sortStatus){
        contents = sortingData(contents);
        sortBtn.classList = `bg-[#FF1F3D] text-white text-base lg:text-lg font-medium py-2 px-5 rounded active:scale-95 transition-all md:-ml-20 disabled:cursor-pointer`;
        sortBtn.setAttribute('disabled','true');
    }else{
        sortBtn.classList = `bg-[#25252533] text-[#252525] text-base lg:text-lg font-medium py-2 px-5 rounded active:scale-95 transition-all md:-ml-20`;
        sortBtn.removeAttribute('disabled');
    }

    contents.forEach( item => {
        cardLoader(item);
    })

    const buttons = document.getElementById('categories-container').children;
    for(const button of buttons){
        if(Number(button.id) !== Number(id)){
            button.classList = `bg-[#25252526] text-[#252525b3] text-sm md:text-base font-medium py-1 px-5 rounded disabled:cursor-pointer`;
            button.removeAttribute('disabled');
        }
        else{
            button.classList = `bg-[#FF1F3D] text-white text-sm md:text-base font-semibold py-1 px-5 rounded disabled:cursor-pointer`;
            button.setAttribute('disabled','true');
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
        button.setAttribute('onclick',`loadContents(${item.category_id},false)`);
        button.setAttribute('id',`${item.category_id}`);
        categoriesContainer.appendChild(button);
    });
  
}

displayCategories();
loadContents(1000);