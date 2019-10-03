export const getOne = model => (req, res) => {
    const id = req.params.id
    const document = await model.findOne({_id: id}).exec()
    if(!doc){
        return res.status(404).end()
    }
    res.status(200).json({ data: document})
};

export const getMany = model => (req, res) => {}
export const createOne = model => (req, res) => {}
export const updateOne = model => (req, res) => {}
export const removeOne = model => (req, res) => {}


export const crudControllers = models => ({
    getOne: getOne(model),
    getMany: getMany(model),
    createOne: createOne(model),
    updateOne: updateOne(model),
    removeOne: removeOne(model),
})