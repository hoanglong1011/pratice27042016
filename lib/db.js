const pg = require('pg');

const config = {
    host: 'localhost',
    port: 5432,
    database: 'news',
    user: 'postgres',
    password: 'D@nTh@nh1011'
};

const pool = new pg.Pool(config);

function query(sql, parameters) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if(err) reject(err);
            client.query(sql, parameters, (err, result) => {
                if(err) reject(err);
                resolve(result);
            });
        })
    });
}

module.exports = query;