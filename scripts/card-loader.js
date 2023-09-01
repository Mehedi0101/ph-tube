const cardContainer = document.getElementById('card-container');
let sort = false;

const cardLoader = content =>{
    // card-div
    const outerDiv = document.createElement('div');
    outerDiv.classList = `card rounded-none`;

    // figure
    const figure = document.createElement('figure');
    figure.classList = `h-48 bg-[#000000ef] rounded-lg relative`;

    // figure -> img
    const cardImage = document.createElement('img');
    cardImage.classList = `w-full`;
    cardImage.setAttribute('src',`${content?.thumbnail}`);
    figure.appendChild(cardImage);

    // figure -> time-stamp
    if(content?.others?.posted_date){
        const seconds = Number(content.others.posted_date);
        const hours = parseInt(seconds/3600);
        const minutes = parseInt((seconds%3600)/60);
        const timeStamp = document.createElement('p');
        timeStamp.classList = `bg-[#171717] text-white absolute px-2 py-1 bottom-1 right-1 text-xs rounded`;
        timeStamp.innerText = `${hours}hrs ${minutes}min ago`;
        figure.appendChild(timeStamp);
    }

    outerDiv.appendChild(figure);

    // card title div
    const titleDiv = document.createElement('div');
    titleDiv.classList = `flex items-center gap-2 mt-4`;

    // card title div -> author's image
    const authorImage = document.createElement('img');
    authorImage.classList = `rounded-full w-10 h-10`;
    authorImage.setAttribute('src',`${content?.authors?.[0]?.profile_picture}`);
    titleDiv.appendChild(authorImage);

    // card title div -> title
    const cardTitle = document.createElement('h2');
    cardTitle.classList = `text-base font-bold`;
    cardTitle.innerText = content.title;
    
    titleDiv.appendChild(cardTitle);
    outerDiv.appendChild(titleDiv);

    // author div
    const authorDiv = document.createElement('div');
    authorDiv.classList = `flex items-center gap-1 ml-12 text-[#171717b3] text-sm`;

    // author div -> author name
    const authorName = document.createElement('h3');
    authorName.innerText = content?.authors?.[0]?.profile_name;
    authorDiv.appendChild(authorName);

    // author div -> verified
    if(content?.authors?.[0]?.verified){
        const verification = document.createElement('img');
        verification.setAttribute('src','assets/images/verified.svg');
        authorDiv.appendChild(verification);
    }

    outerDiv.appendChild(authorDiv);

    // view count
    const viewCount = document.createElement('h3');
    viewCount.classList = `ml-12 text-[#171717b3] text-sm`;
    viewCount.innerText = `${content?.others?.views} views`;
    
    outerDiv.appendChild(viewCount);

    cardContainer.appendChild(outerDiv);
}