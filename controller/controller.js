import PersonSchema from "../model/person.js";

const getPersons = async (req, res) => {
    const persons = await PersonSchema.find();
    res.status(200).send(persons);
};

const getOnePerson = async (req, res) => {
    const _id = req.params.id;
    const findPerson = await PersonSchema.findById(_id);
    res.json(findPerson);
}

const addPerson = async (req, res) => {
    const newPerson = new PersonSchema(req.body);
    console.log(newPerson);
    await newPerson.save();
    res.json("new person is added");
};

const updatePerson = async (req, res) => {
    const _id = req.params.id;
    // await PersonSchema.findByIdAndUpdate(_id, req.body);
    // Das Problem ist dass, ruft 'save' methode auf. Dadurch die pre.save() middleware wird auch aufgerufen und gehashedPassword wurde nochmal gehashed.
    await PersonSchema.updateOne({ _id }, req.body);
    res.json("person is updated!");
}

const deletePerson = async (req, res) => {
    const _id = req.params.id;
    await PersonSchema.findByIdAndRemove(_id);
    res.send("person is deleted!");
}


export { getPersons, addPerson, updatePerson, deletePerson, getOnePerson };
