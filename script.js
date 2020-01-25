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
        document.body.style.width = '100%';
        [...document.body.children].forEach((el, i) => i > 0 ? el.style.padding = '1rem' : false)
    })();

    (navStyle = () => {
        ul.style.width = '100%';
        ul.style.display = 'flex';
        ul.style.alignItems = 'center';
        ul.style.justifyContent = 'space-around';
        ul.style.padding = '1rem';
        ul.style.listStyle = 'none';
        listOfItems.forEach(item => item.children[0].style.color = '#eddbc3');
    })();

    const h1 = document.querySelector('h1');
    (h1Style = () => {
        h1.style.textAlign = 'center';
        h1.style.margin = '2rem 0 0';
        h1.nextElementSibling.style.textAlign = 'center';
        h1.nextElementSibling.style.fontStyle = 'italic';
    })();

    const h2s = [...document.querySelectorAll('h2')];
    (h2sStyle = () => {
        h2s.forEach(h2 => {
            h2.style.textAlign = 'center';
            h2.style.margin = '2rem 0 1rem';
        });
    })();

    // light-mode button
    const dayMode = () => {
        document.body.style.backgroundColor = '#eddbc3';
        ul.style.backgroundColor = '#813a26';
        h1.style.color = '#813a26';
        h1.nextElementSibling.style.color = '#000';
        h2s.forEach(h2 => h2.style.color = '#D94C3A');
        listOfItems.forEach(item => item.children[0].style.color = '#05080D');
        [...document.querySelectorAll('p')].forEach(p => p.style.color = '#000');
    };

    const nightMode = () => {
        document.body.style.backgroundColor = '#05080D';
        ul.style.backgroundColor = '#E7E3E2';
        h1.style.color = '#E7E3E2';
        h1.nextElementSibling.style.color = '#fff';
        h2s.forEach(h2 => h2.style.color = '#DEA26C');
        listOfItems.forEach(item => item.children[0].style.color = '#05080D');
        [...document.querySelectorAll('p')].forEach(p => p.style.color = '#fff');
    };

    dayMode();

    (changeModeButton = () => {
        const modeButton = document.createElement('button');
        document.body.insertBefore(modeButton, h1);
        modeButton.innerText = 'Change Light Mode';
        modeButton.style.border = 'none';
        modeButton.style. padding = '1rem';
        modeButton.style.cursor = 'pointer';
        modeButton.style.backgroundColor = 'grey';
        modeButton.style.color = '#fff';
        modeButton.style.fontWeight = '600';
        modeButton.style.display = 'block';
        modeButton.style.margin = '0.5rem auto 0.5rem';
        modeButton.style.borderRadius = '10px';
        modeButton.style.boxShadow = '0px 0px 5px black';
        modeButton.addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'rgb(80, 80, 80)');
        modeButton.addEventListener('mouseout', (e) => e.target.style.backgroundColor = 'grey');
        let button = 0;
        modeButton.addEventListener('click', (e) => {
            if (button === 0) {
                nightMode();
                button = 1;
            } else { 
                dayMode();
                button = 0;
            };
        });
    })();
})();
