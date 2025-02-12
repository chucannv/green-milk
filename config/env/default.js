'use strict';

module.exports = {
    app: {
        title: 'Green Milk',
        description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
        keywords: 'mongodb, express, angularjs, node.js, mongoose, passport, green-milk, green milk, Green-Milk, Green Milk, GreenMilk'
    },
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    templateEngine: 'pug',
    // Session Cookie settings
    sessionCookie: {
        // session expiration is set by default to 24 hours
        maxAge: 24 * (60 * 60 * 1000),
        // httpOnly flag makes sure the cookie is only accessed
        // through the HTTP protocol and not JS/browser
        httpOnly: true,
        // secure cookie should be turned to true to provide additional
        // layer of security so that the cookie is set only when working
        // in HTTPS mode.
        secure: false
    },
    // sessionSecret should be changed for security measures and concerns
    sessionSecret: process.env.SESSION_SECRET || 'G33n-M1Lk',
    // sessionKey is the cookie session name
    sessionKey: 'sessionId',
    sessionCollection: 'sessions',
    favicon: 'modules/core/client/img/brand/favicon (2).ico'
};

