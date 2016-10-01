import XHR from './HTTP/XHR';

let rendered,
    main;

class View {
    constructor(url)
    {
        if(rendered) {
            XHR.get(url).then(function(data) {
                return this.ready(data);
            });
        } else {
            rendered = true;
            main = document.getElementById('main-content')
        }
    }

    get main()
    {
        return main;
    }

    ready(response)
    {
        main.innerHTML = response;
        this.init();
    }

    init()
    {

    }
}

export default View;