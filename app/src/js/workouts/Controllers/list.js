import WorkoutService from '../Services/Workout';
import View from '../../core/Utilities/View';

import template from '../Templates/list.html';

class List extends View {
    constructor()
    {
        super();
    }

    content() {
        const model = new WorkoutService;
        model.getAll().then(resp => {
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
