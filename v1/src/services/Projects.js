const Project = require('../models/Project');

const insert = (projectData) => {
    const project = new Project({
        name: projectData.name,
    });
    return project.save();
}

const list = () => {
    return Project.find({});
}

module.exports = {
    insert,
    list
}