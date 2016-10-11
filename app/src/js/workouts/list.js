import ListModel from './Services/List';
import View from '../core/Utilities/View';

import template from './Templates/list.html';

class List extends View {
    constructor()
    {
        super();
    }

    content() {
        const model = new ListModel;
        model.get().then(resp => {
            let data = JSON.parse(resp);
            this.ready(template, data.response);
        });
    }

    showList()
    {
        this.content();
    }
}

export default List;
