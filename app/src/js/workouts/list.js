import XHR from '../core/HTTP/XHR';
import View from '../core/View';

export default class List extends View {
    constructor()
    {
        super('./src/js/workouts/list.html');
    }

    showList()
    {
        XHR.get('/api/v1/workout/list')
            .then(data => {
                let content = JSON.parse(data);
                data = JSON.parse(data);
                // document.getElementById('target').innerHTML = this.listTemplate(data.response);
                // this.listTemplate(content.response);
                this.ready(data.response);
            });
    }
    ready(view) {
        console.log(view);
        this.main.innerHTML = view;
        this.init();
    }

    listTemplate(data)
    {
        let template = `
            <table class="table">
                <thead>
                    <tr>
                        <th>Workout Name</th>
                        <th>Days of the week</th>
                    </tr>
                </thead>
                <tbody>`;
        for(let workout of data) {
            template += `
                <tr>
                    <td>${workout.workout_name}</td>
                    <td>${workout.workout_days.days.join(', ')}</td>
                    <td>
                        <a href=""></a>
                    </td>
                </tr>`;
        }
        template += `
                </tbody>
            </table>`;

        return template;
    }
}

var list = new List();

list.showList();
