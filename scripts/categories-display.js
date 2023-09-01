const displayCategories = async() => {

    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    const categories = data.data;

    const categoriesContainer = document.getElementById('categories-container');
    categories.forEach(item => {
        const button = document.createElement('button');
        button.classList = `bg-[#25252526] text-[#252525b3] text-sm md:text-base font-medium py-1 px-5 rounded`;
        button.innerText = item.category;
        categoriesContainer.appendChild(button);
    });
    
}

displayCategories();