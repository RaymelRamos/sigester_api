const divTerritorialModel = require('../models/div_territorial')
const { v5: uuidv5, v4: uuidv4 } = require('uuid');

var getAll = async (query) => {
    let skip = query.offset ? parseInt(query.offset) : 0;
    let limit = query.limit ? parseInt(query.limit) : 20;
    let item = await divTerritorialModel.find(
        {
            deletedAt: { $exists: false }
        })
        .select(' -__v -_id').skip(skip).limit(limit).lean();
    let size = await divTerritorialModel.count(
        {
            deletedAt: { $exists: false }
        });
    return { data: item, skip: skip, limit: limit, size: size };
}

var getById = async (id) => {
    return await divTerritorialModel.findOne(
        { 
            uuid: id, 
            deletedAt: { $exists: false }
        })
        .select(' -__v -_id').lean();
};

var find = async (query) => {
    let skip = query.skip ? parseInt(query.skip) : 0;
    let limit = query.limit ? parseInt(query.limit) : 50;
    let search = query.search ? query.search : "";
    let filter = query.filter ? JSON.parse(query.filter) : {};
    let objectOfSearch = {
        deletedAt: {
            $exists: false
        }
    };
    if (search !== "") {
        objectOfSearch.$text = { $search: search }
    }
    if (Object.keys(filter).length > 0) {
        fields = Object.keys(filter);
        arrayFilter = [];
        newObject = {}
        for (i = 0; i < fields.length; i++) {
            newObject[fields[i]] = filter[fields[i]]
            arrayFilter.push(newObject)
            newObject = {}
        }
        objectOfSearch.$and = arrayFilter
    }
    let data = await divTerritorialModel.find(objectOfSearch)
        .select(' -__v -_id').count();
    let size = data.length
    data = await divTerritorialModel.find(objectOfSearch)
        .select(' -__v -_id')
        .skip(skip).limit(limit).lean();

    return { data: data, skip: skip, limit: limit, size: size };
}

var create = async (body) => {
    let item = new divTerritorialModel(body);
    item.createdAt = Date.now();
    item.uuid = uuidv5(`${item.name}`, uuidv4());
    item.id_company = item.id_company;
    await item.save();
    let payload = item
    payload.uuid = item.uuid
    payload.id_company = item.id_company;
    return payload;

}

var update = async (id, body, id_company) => {
    let item = await divTerritorialModel.findOne(
        { 
            uuid: id, 
            deletedAt: { $exists: false },
            id_company: id_company
        })
    if (item == null) {
        return null;
    } else {
        item.set({
            name_group: body.name_group ? body.name_group : item.name_group,
            description: body.description ? body.description : item.description,
            telf: body.telf ? body.telf : item.telf,
            telf_opt: body.telf_opt ? body.telf_opt : item.telf_opt,
            code: body.code ? body.code : item.code,
            contacts: body.contacts ? body.contacts : item.contacts
        });
        await item.save();
        item = await divTerritorialModel.findOne(
            { 
                uuid: id, 
                deletedAt: { $exists: false },
                id_company: id_company
            })
            .select(' -__v -_id').lean();
        return item;
    }
};

var remove = async (id, token) => {

    let item = await divTerritorialModel.findOne(
        { 
            uuid: id, 
            deletedAt: { $exists: false },
            id_company: id_company
        });

    if (item == null) {
        return null;
    }
    item.set({ deletedAt: Date.now() });
    return await item.save();
};

module.exports = {
    getAll,
    getById,
    find,
    // create,
    // update,
    // remove
}


