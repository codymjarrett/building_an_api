export const getOne = model => async (req, res) => {
  const id = req.params.id;
  const document = await model.findOne({ _id: id }).exec();

  if (!document) {
    return res.status(404).end();
  }
  res.status(200).json({ data: document });
};

export const getMany = model => async (req, res) => {
  const document = await model.find({}).exec();

  if (!document) {
    return res.status(404).end();
  }
  res.status(200).json({ data: document });
};

export const createOne = model => async (req, res) => {
  const body = req.body;

  if (body) {
    const document = model.create({ ...body });
    res.status(201).json({ data: document });
  }
};
// export const updateOne = model => async (req, res) => {};
// export const removeOne = model => async (req, res) => {};

export const crudControllers = model => ({
  getOne: getOne(model),
  getMany: getMany(model),
  createOne: createOne(model),
//   updateOne: updateOne(model),
//   removeOne: removeOne(model)
});
