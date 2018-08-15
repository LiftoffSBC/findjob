const db = require("./models");
module.exports = {
  findAll: function (req, res) {
    db.Job
      .find(req.query)
      .sort({ date: -1 })
      .then(dbJob => res.json(dbJob))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Job
      .findById(req.params.id)
      .then(dbJob => res.json(dbJob))
      .catch(err => res.status(422).json(err));
  },
  create: function (jobtitle, companyname, description, date, jobID) {
    const job = {
      jobtitle: jobtitle,
      companyname: companyname,
      description: description,
      date: date,
      jobID: jobID
    };
    db.Jobs.findOne({ jobID: jobID }).exec((err, existingJob) => {
      if (!existingJob) {
        db.Jobs
          .create(job)
          .then(dbjob => console.log(dbjob))
          .catch(err => console.log(err));
      }
    });
  },
  update: function (req, res) {
    db.Job
      .findOneAndUpdate({ _id: req.params.id }, req.data)
      .then(dbjob => res.json(dbjob))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Job
      .findById({ _id: req.params.id })
      .then(dbjob => dbjob.remove())
      .then(dbjob => res.json(dbjob))
      .catch(err => res.status(422).json(err));
  }
};

