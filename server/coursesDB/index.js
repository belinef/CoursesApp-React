const makeId = require('./makeId'),
    fakeDB = require('./initialDB');

const threeDays = 86400000 * 3;

const findCourseByName = searchedName => {
    return fakeDB.coursesList.filter(({name}) => name.toLowerCase().includes(searchedName.toLowerCase()))
};

const findCourseByDate = searchedDate => {
    return fakeDB.coursesList.filter(({date}) => {
        return (date - threeDays) < searchedDate && searchedDate < (date + threeDays)
    })
};


const findCourse = (search, res) => {
    if (Date.parse(search)) {
        res.send({
            coursesList: findCourseByDate(Date.parse(search))
        });
    } else {
        res.send({
            coursesList: findCourseByName(search)
        });
    }
};


class CoursesCollection {

    getCollection(req, res) {


        if (req.query.search) {

            const timeOutedQuery = () => {
                findCourse(req.query.search, res);
            };

            setTimeout(timeOutedQuery, 3000);
            return;
        }

        res.send(fakeDB);
    }


    getById(req, res) {
        const {id} = req.params,
            [course] = fakeDB.coursesList.filter(course => course.id == id);

        res.send({course});
    }

    create(req, res) {
        const newCourse = req.body;
        Object.assign(newCourse, {id: makeId()});

        fakeDB.coursesList.push(newCourse);
        res.send({created: true, id: newCourse.id});
    }

    update(req, res) {
        fakeDB.coursesList.forEach(item => {
            if (item.id == req.params.id) {
                Object.assign(item, req.body)
            }
        });

        res.send({updated: true})
    }

    remove(req, res) {
        const {id} = req.params;
        fakeDB.coursesList = fakeDB.coursesList.filter(course => course.id != id);
        res.send({deleted: true, id})
    }
}


module.exports = new CoursesCollection();