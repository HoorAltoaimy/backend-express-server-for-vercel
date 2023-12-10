
const getAllProducts = async (req, res) => {
    try {
        const products = [
            {title: 'product x', price: 200},
            {title: 'product y', price: 100}
        ]
        res.status(200).send(products)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}
module.exports = {getAllProducts}
