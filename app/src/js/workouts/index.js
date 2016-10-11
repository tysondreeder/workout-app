import List from './list';
import Routes from '../core/Utilities/Routes';


// document.getElementById('main-content').innerHTML = 'Welcome to the workout app';

const routes = [
    {
        url: '#list',
        method: function() {
            const list = new List();
            list.showList()
        }
    },
    {
        url: '#workout',
        method: function() {
            document.getElementById('main-content').innerHTML = 'This is the work out page';
        }
    },
    {
        url: 'default',
        method: function() {
            document.getElementById('main-content').innerHTML = 'welcome to the workout app';
        }
    }
];

const route = new Routes();

route.$on(
    'load',
    routes
);
route.$on(
    'hashchange',
    routes
);