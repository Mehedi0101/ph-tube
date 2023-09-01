let currentId = 1000;
const sortBtn = document.getElementById('sort-btn');

const sortingData = (data) =>{
    const sortedData = [];
    
    data.forEach((item, index) => {
        let entered = false;
        const currentViews = Number(item?.others?.views.split('K')[0]);
        if(index === 0){
            sortedData.push(item);
        }
        else{
            for(let i = 0; i < sortedData.length; i++){
                const previousViews = Number(sortedData[i].others.views.split('K')[0]);
                if(currentViews > previousViews){
                    sortedData.splice(i, 0, item);
                    entered = true;
                    break;
                }
            }
            if(!entered){
                sortedData.push(item);
            }
        }
    })
    return sortedData;
}

sortBtn.addEventListener('click',() => {
    sort = true;
    loadContents(currentId,true);
})