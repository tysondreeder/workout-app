var wc = angular.module('wc.app', ['wc.services', 'wc.controllers']);

wc.constant('URISettings',
    {
        protocol: 'http:',
        apiUri: '//wc.mbautista.com/api',
        version: '/v1'
    }
)
