import WorkoutService from '../Services/Workout';
import View from '../../core/Utilities/View';

import template from '../Templates/workout.html';

class Workout extends View {
    constructor()
    {
        super();
    }

    content(id) {
        const model = new WorkoutService;
        model.getId(id).then(resp => {
            const data = {
                response: JSON.parse(resp).response,
                instance: this
            };
            this.ready(template, data);
        });
    }

    showWorkout(id)
    {
        this.content(id);
    }

    clickMe()
    {
        alert('hi');
    }
}

export default Workout;
