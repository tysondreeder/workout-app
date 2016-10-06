import XHR from './HTTP/XHR';

let rendered,
    $main;

class View {
    constructor()
    {
        rendered = false;
        $main = document.getElementById('main-content');
    }

    get $main()
    {
        return $main;
    }

    ready(res)
    {
        $main.innerHTML = res;
        this.init();
    }

    template(data)
    {
        let template = 'hi';
        // if(rendered) {
        //     XHR.get(url).then(function(data) {
        //         return this.ready(data);
        //     });
        // } else {
        //     rendered = true;
        //     this.init();
        // }
    }

    init()
    {

    }
}

export default View;