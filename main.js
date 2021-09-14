const container = document.querySelector('.container');

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
    const data = await response.json();
    
    data.map((item, index) => {
        const htmlData = `
            <div class="subDiv">
                <h4>${postCount++}</h4>
                <h2>${item.title}</h2>
                <p>${item.body}</p>
            </div>
        `
        container.insertAdjacentHTML('beforeend',htmlData)
    })

   
}

getData();

const showData  = () => {
    setTimeout(() => {
        pageCount++;
        getData();
    },100);
}
window.addEventListener('scroll', () => {
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight ) {
        showData();
    }
})