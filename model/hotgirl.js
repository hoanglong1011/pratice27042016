const query = require('../lib/db');

class HotGirl {
    constructor(id, name, image, like, dislike) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.like = like;
        this.dislike = dislike;
    }

    getData() {
        const sql = "SELECT * FROM hotgirls WHERE id = $1";
        return query(sql, [this.id])
            .then((result) => {
                const { id, name, image, like, dislike } = result.rows[0];
                return new HotGirl(id, name, image, like, dislike);
            });
    }
}

const t = new HotGirl(1);
const data = t.getData()
.then(a => console.log(a));

module.exports = HotGirl;