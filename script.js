(() => {

    // create header and ul
    const header = document.createElement('header');
    document.body.prepend(header);
    const ul = document.createElement('ul');
    header.prepend(ul);

    const createLi = () => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        li.prepend(link);
        ul.appendChild(li);
    };

    // create 6 li elements with a link inside and append them inside the ul element
    for(let i = 0; i < 6; i++) {
        createLi();
    };

    // this is the array of li elements
    const listOfItems = document.querySelectorAll('li');

    // create innerText and link address for each a element
    listOfItems.forEach((item, i) => {
        let text;
        switch (i) {
            case 0:
                item.children[0].innerText = 'Home';
                item.children[0].setAttribute('href', '#home');
                break;
            case 1:
                item.children[0].innerText = 'About';
                item.children[0].setAttribute('href', '#about');
                break;
            case 2:
                item.children[0].innerText = 'Services';
                item.children[0].setAttribute('href', '#services');
                break;
            case 3:
                item.children[0].innerText = 'Products';
                item.children[0].setAttribute('href', '#products');
                break;
            case 4:
                item.children[0].innerText = 'Newsletter';
                item.children[0].setAttribute('href', '#newsletter');
                break;
            case 5:
                item.children[0].innerText = 'Contact';
                item.children[0].setAttribute('href', '#contact');
                break;
        }
    });
})();
