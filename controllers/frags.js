const Frag = require("../models/Frags");

exports.list = function (req, res) {
  Frag.find({}).exec(function (err, frags) {
          if (err) {
                  return res.send(500, err);
          }
          res.render('frag', { frags: frags
       });
  });
};

  exports.createfrag = async (req, res) => {
    try {
      await Frag.create({
        "Player": req.body.Player,
        "Identifier": req.body.Identifier,
        "Weapon": req.body.Weapon,
        "Against": req.body.Against,
        "Score": req.body.Score,
        "Event": req.body.Event,
        "Map": req.body.Map,
      });
      res.redirect("/create-frag");
    } catch (e) {
      console.error(e);
    }
  };

  exports.updatefrag = async (req, res) => {
    try {
      await Frag.updateOne(
        { 
          "Identifier" : req.body.originalidentifier
        },
        {
          "Player": req.body.player,
          "Identifier" : req.body.identifier,
          "Weapon": req.body.weapon,
          "Against": req.body.against,
          "Score": req.body.score,
          "Event": req.body.event,
          "Map": req.body.map,
        }
    );
      res.redirect("/frags");
    } catch (e) {
      console.error(e);
    }
  };

  exports.delete = async (req, res) => {
    const id = req.params.identifier;
    try {
      var result = await Frag.deleteOne({Identifier: id})
      console.log(id);
      console.log("Deleted");
      res.redirect("/frags");
    } catch (e) {
      res.status(404).send({
        message: `could not delete record ${id}.`,
      });
    }
  };