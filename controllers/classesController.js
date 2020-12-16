const router = require('express').Router()
const models = require('../models')

router.get('/', (req, res) => {
    models.Classes.find().then((foundClasses)=> {
        res.status(200).json({classes: foundClasses})
    }).catch((err)=> {res.send(err)})
})


router.get('/:name', (req, res)=> {
    models.Classes.find({name: req.params.name}).then((classItem)=> {
        res.status(200).json({ classItem })
    }).catch((err)=> {res.send(err)})
})

router.post('/', (req, res)=> {
    models.Classes.create({
        name: "Druid",
        description: "Holding high a gnarled staff wreathed with holly, an elf summons the fury of the storm and calls down explosive bolts of lightning to smite the torch-carrying orcs who threaten her forest. Crouching out of sight on a high tree branch in the form of a leopard, a human peers out of the jungle at the strange construction of a temple of Evil Elemental Air, keeping a close eye on the cultistsâ€™ activities. Swinging a blade formed of pure fire, a half-elf charges into a mass of skeletal soldiers, sundering the unnatural magic that gives the foul creatures the mocking sem blance of life. Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of natureâ€™s resilience, cunning, and fury. They claim no mastery over nature. Instead, they see themselves as extensions of natureâ€™s indomitable will.",
        subclass: [{
            name: "Circle of the Moon",
            description: "Druids of the Circle of the Moon are fierce guardians of the wilds. Their order gathers under the full moon to share news and trade warnings. They haunt the deepest parts of the wilderness, where they might go for weeks on end before crossing paths with another humanoid creature, let alone another druid. Changeable as the moon, a druid of this circle might prowl as a great cat one night, soar over the treetops as an eagle the next day, and crash through the undergrowth in bear form to drive off a trespassing monster. The wild is in the druid's blood."
        }, {
            name: "Circle of the Land",
            description: "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to Whisper primal Secrets in Druidic. The circle’s wisest Members preside as the chief Priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
        }]
    })
})

router.put("/:name", (req, res)=> {
    models.Classes.update({name: req.params.name}, {$set: {name: "Buttmuncher"}})
    .then((updatedClasses)=> {
        res.status(200).json({ updatedClasses })
    })
})


router.delete('/delete', (req, res)=>{
    models.Classes.deleteMany().then(()=>{
    console.log('Done!');
    })
})

module.exports = router