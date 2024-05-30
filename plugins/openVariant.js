const plugin = require("tailwindcss/plugin");

const openVariants  = plugin(function ({addVariant}) {
    addVariant("group-open",":merge(.group).open &")
    addVariant("peer-open",":merge(.peer).open ~ &")
})

module.exports = openVariants