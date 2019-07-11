function render(id){
    let import_element = document.getElementById(id + '_import');
    let content = import_element.import.querySelector('template');
    let node = document.importNode(content.content, true);

    document.getElementById(id + '_content').appendChild(node);
}


render('footer')
render('header')
render('playlist')

