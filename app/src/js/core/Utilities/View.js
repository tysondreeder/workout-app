let rendered,
    $main;

class View {
    constructor()
    {
        rendered = false;
        $main = document.getElementById('main-content');
    }

    ready(template, data)
    {
        $main.innerHTML = this._template(template, data);
    }

    _template(template, data)
    {
       return template(data);
    }
}

export default View;