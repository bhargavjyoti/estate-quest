import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACUCAMAAAC6AgsRAAAAMFBMVEX///+8vLz09PS5ubn4+Pi2trb7+/vGxsbw8PC/v7/V1dXs7OzY2NjQ0NDb29vj4+Pvfy8uAAAEsElEQVR4nO2b3ZarIAyFRwEREX3/tz1ordNaZacm6Kx12DczN7VfAwn5wZ+foqKioqKioqKioqKiov9OTaO1bpq7MXZU+6ELIdhZIXSDr+9Gekq3g63UQ9Wk5/92aPXtcGPnzMK1lVLGdeOdiG1w1T7byli50N4Dp0dr0nALorF3GHG0B8u6t9B2vBau8WBdP9fZXxh2avsd3UxoL4s4w5fGe5pwuISutuYE3SRzhQlHd8Z4iwlddj/pzhpvMWGXFy+cN95iwpCRTp/w2w9Amy1YS+BlBGxE8CbALKFaxnoPwBwWFMObAOXxAi+wvMuIe/EoZ71JSjhQt7J4EVA0a22cMF5VOUkn7qXNFw3Yy+F5ebwI6MX4GClLgs9J4Q058CKgUL5aU50jFryxFj4qhz/lZNJVmnNELtuPk/pQkQpPIRfRlINDueC11vWk+NcH0pY1Eudwh79Jqd4vcPWC6HuCDZVANk3Yfcr6V7gF0RMSCoEdiJ1XdfUnXgSsseX5LoyTUtXvwD0EPYufqrbIO8ywZ7zFhAP8NDdNQGukwjFeBET1HttDwO+vbIJukkUP4OGhvE+NKfNFA6K8lpkHAu+NlQ6wH6qqeB7cgP2jdgLfRiA3U4HjwSA4K7T75h2YBmSFaPTjE7FlXWC0RThp6gjiF/COmW9MP8JwKjkQ/VxLWN8W7BFOBAR7B3rvrHQIZPUSkk8m8mkUohl86e2XPttWPhCjzHm85hK+8wEQpPZCfOeTfJRciew/RorlER8BD6Yw5nyARnzOE/A8KGAy8qHsal5elGHl5AsE+6EUmsEHi48KH3AtegTDP2DrQPUwP4U1HCO+gPhMMSA0Hyc+g/OtIoRoXKMzzjdYvaEUFSWnsxh8sDqcCrBEfU5o+7PyK0LvKgbpI0CNQvPMxxnVoPx+/oIjQE0atbPye2LjfncPxsKDdH2HUx8RW8/Gvrcn5wYl8RoFq75E9flqhCq8Ek4NXuIdFF59Th8tKOU6/wjWre8c/e4Tr0P5zVxQmcpZax2xe798iNkApHyFelnL1/9IRuTh4QiobN+23Uckicvdtj1uDnP7kyDFMm6YmuPaj9asy6qMseMUFHU9VODz3P5usj+u3LB6ra7HLsTdF3dgN64Nfa2HVJAWuMqR8GAT3s/exwBJ6/dRTZu4uSAwIjwM0coRqg9wzklMCA88RNlE4rIBbA82icR86yDJj6URFW/am/vnkMh8cHe+qjo63Uy4twpCVxB2diCuiz4Ad36l0Hz604VTM61D9dt9IjXf/7gfQetbbbXNheTuR2zSVNJUYUebUY3g/ZI3F8EzIxKg5P2c9/tNeGZ0xOdfnUP0kuJvHkiZyRwC/nqa7P2wXx8+5xsr4NNH5Hz3qeWUV5SRzLGWdZC/n7jMajirOxtwXocc9zsf92Mtz3zRgDbbDeOYqlIausCAo8p0v3iyoGuYeBHQ5btAXlP69UhZ34zjLm+0X0Y6AcDsb3LxduAFL0k1jPPtmne4TucHl9D9nDThRcZbCL/Gu/qtYP2NDfUdb7HSbXjXG9WkfXjvO8oA8VKn+BbxL8Atmt/cf9WffIu/qKioqKioqKioqKio6L/VP6V6PmFw3fxFAAAAAElFTkSuQmCC"
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

export default User