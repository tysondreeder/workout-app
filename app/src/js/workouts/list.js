import ListModel from './Models/List';
import View from '../core/View';

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
        // let template = `
        //     <table class="table">
        //         <thead>
        //             <tr>
        //                 <th>Workout Name</th>
        //                 <th>Days of the week</th>
        //             </tr>
        //         </thead>
        //         <tbody>`;
        // for(let workout of data) {
        //     template += `
        //         <tr>
        //             <td>${workout.workout_name}</td>
        //             <td>${workout.workout_days.days.join(', ')}</td>
        //             <td>
        //                 <a href=""></a>
        //             </td>
        //         </tr>`;
        // }
        // template += `
        //         </tbody>
        //     </table>`;
        //
        // return template;

        return require("html?./list.html");
    }
}

var list = new List();

list.ready();
