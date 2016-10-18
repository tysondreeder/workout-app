import List from './Controllers/list';
import Workout from './Controllers/workout';
import Routes from '../core/Utilities/Routes';


// document.getElementById('main-content').innerHTML = 'Welcome to the workout app';


const route = new Routes();

const routes = [
    {
        url: '#list',
        method: function() {
            const list = new List();
            list.showList()
        }
    },
    {
        url: '#workout/{workoutId}',
        method: function() {
            const  workout = new Workout();
            workout.showWorkout(route.getParam('workoutId'));
        }
    },
    {
        url: 'default',
        method: function() {
            document.getElementById('main-content').innerHTML = 'welcome to the workout app';
        }
    }
];

route.on(
    'load',
    routes
);
route.on(
    'hashchange',
    routes
);