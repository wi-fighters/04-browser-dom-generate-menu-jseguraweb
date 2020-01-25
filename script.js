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

    // reset properties for the document before I start styling it
    (reset = () => {
        document.documentElement.style.scrollBehavior = 'smooth';
        [...document.querySelectorAll('a')].forEach(a => {
            a.style.textDecoration = 'none';
            a.style.display = 'block';
            a.style.textAlign = 'center';
            a.style.fontWeight = '600';
            a.style.color = '#8fb59c';
        });
        const allElements = [...document.querySelectorAll('*')];
        allElements.forEach(el => {
            el.style.margin = '0';
            el.style.padding = '0';
            el.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
        });
    })();
    
    // style document
    (bodyStyle = () => {
        document.body.style.backgroundColor = '#eddbc3';
        [...document.body.children].forEach((el, i) => i > 0 ? el.style.padding = '1rem' : false)
    })();

    (navStyle = () => {
        ul.style.width = '100%';
        ul.style.backgroundColor = '#813a26';
        ul.style.display = 'flex';
        ul.style.alignItems = 'center';
        ul.style.justifyContent = 'space-around';
        ul.style.padding = '1rem';
        ul.style.listStyle = 'none';
        listOfItems.forEach(item => {
            item.children[0].style.color = '#eddbc3';
        });
    })();

    (h1Style = () => {
        const h1 = document.querySelector('h1');
        h1.style.textAlign = 'center';
        h1.style.margin = '2rem 0 0';
        h1.style.color = '#813a26';
        h1.nextElementSibling.style.textAlign = 'center';
        h1.nextElementSibling.style.fontStyle = 'italic';
    })();

    (h2sStyle = () => {
        const h2s = [...document.querySelectorAll('h2')];
        h2s.forEach(h2 => {
            h2.style.textAlign = 'center';
            h2.style.margin = '2rem 0 1rem';
            h2.style.color = '#D94C3A';
        });
    })();

})();
