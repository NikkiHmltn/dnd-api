const models = require('./models')

models.Classes.create({
    name: "Barbarian",
    description: "A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs as he charges toward the frost giant who dared poach his peopleâ€™s elk herd. A half-orc snarls at the latest challenger to her authority over their savage tribe, ready to break his neck with her bare hands as she did to the last six rivals. Frothing at the mouth, a dwarf slams his helmet into the face of his drow foe, then turns to drive his armored elbow into the gut of another. These barbarians, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea. For some, their rage springs from a com m union with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength",
    subclass: [{
        name: "Path of the Berserker",
        description: "For some barbarians, rage is a means to an end—that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker’s rage, you thrill in the chaos of battle, heedless of your own health or well-being."
    }, {
        name: "Path of the Totem Warrior",
        description: "The Path of the Totem Warrior is a spiritual journey, as the barbarian accepts a spirit animal as guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding magical fuel to your barbarian rage. Most barbarian tribes consider a totem animal to be kin to a particular clan. In such cases, it is unusual for an individual to have more than one totem animal spirit, though exceptions exist."
    }]
})

models.Classes.create({
    name: "Bard",
    description: "Humming as she traces her fingers over an ancient monument in a long-forgotten ruin, a half-elf in rugged leathers finds knowledge springing into her mind, conjured forth by the magic of her songâ€”knowledge of the people who constructed the monument and the mythic saga it depicts. A stern human warrior bangs his sword rhythmically against his scale mail, setting the tempo for his war chant and exhorting his companions to bravery and heroism. The magic of his song fortifies and emboldens them. Laughing as she tunes her cittern, a gnome weaves her subtle magic over the assembled nobles, ensuring that her companionsâ€™ words will be well received. Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds.",
    subclass: [{
        name: "College of Lore",
        description: "Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king."
    }, {
        name: "College of Valor",
        description: "Bards of the College of Valor are daring skalds whose tales keep alive the memory of the great heroes of the past, and thereby inspire a new generation of heroes. These bards gather in mead halls or around great bonfires to sing the deeds of the mighty, both past and present. They travel the land to witness great events firsthand and to ensure that the memory of those events doesn't pass from the world. With their songs, they inspire others to reach the same heights of accomplishment as the heroes of old."
    }]
})

models.Classes.create({
    name: "Cleric",
    description: "Arms and eyes upraised toward the sun and a prayer on his lips, an elf begins to glow with an inner light that spills out to heal his battle-worn companions. Chanting a song of glory, a dwarf swings his axe in wide swaths to cut through the ranks of orcs arrayed against him, shouting praise to the gods with every foeâ€™s fall. Calling down a curse upon the forces of undeath, a human lifts her holy symbol as light pours from it to drive back the zombies crowding in on her companions. Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.",
    subclass: [{
        name: "Life Domain",
        description: "The Life domain focuses on the vibrant positive energy — one of the fundamental forces of the universe — that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander, Pelor, and Re-Horakhty), gods of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and community (such as Hestia, Hathor, and Boldrei). "
    }, {
        name: "Nature Domain",
        description: "Gods of nature are as varied as the natural world itself; from inscrutable gods of the deep forests (such as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to friendly deities associated with particular springs and groves (such as Eldath). Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as well, champions who take a more active role in advancing the interests of a particular nature god. These clerics might hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods."
    }]
})