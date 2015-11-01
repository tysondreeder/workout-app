var wc = angular.module('wc.app', ['appConfig.module', 'common.module', 'users.module']);

wc.constant('URISettings',
    {
        protocol: 'http:',
        apiUri: '//wc.mbautista.com/api',
        version: '/v1'
    }
)
