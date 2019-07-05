function render(id){
    let footer = document.getElementById(id + '_import');
    let content = footer.import.querySelector('template');
    let node = document.importNode(content.content, true);

    document.getElementById(id + '_content').appendChild(node);
}


render('footer')
render('header')