import ListModel from './Models/List';
import View from '../core/View';

import template from './list.html';

export default class List extends View {
    constructor()
    {
        super();
    }

    ready() {
        const model = new ListModel;
        model.get().then(resp => {
            let data = JSON.parse(resp);
            this.$main.innerHTML = this.template(data.response);
        });
    }

    showList()
    {
        this.ready();
        this.init();
    }

    template(data)
    {
        return template(data);
    }
}

var list = new List();

list.ready();
