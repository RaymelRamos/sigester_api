const parametroModel = require('../models/bras')
const { v5: uuidv5, v4: uuidv4 } = require('uuid');

var getAll = async (query) => {
    let skip = query.offset ? parseInt(query.offset) : 0;
    let limit = query.limit ? parseInt(query.limit) : 20;
    let item = await parametroModel.find(
        {
            deletedAt: { $exists: false }
        })
        .select(' -__v -_id').skip(skip).limit(limit).lean();
    let size = await parametroModel.count(
        {
            deletedAt: { $exists: false }
        });
    return { data: item, skip: skip, limit: limit, size: size };
}

var getById = async (id) => {
    return await parametroModel.findOne(
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
    let data = await parametroModel.find(objectOfSearch)
        .select(' -__v -_id').count();
    let size = data.length
    data = await parametroModel.find(objectOfSearch)
        .select(' -__v -_id')
        .skip(skip).limit(limit).lean();

    return { data: data, skip: skip, limit: limit, size: size };
}

var create = async (body) => {
    let item = new parametroModel(body);
    item.createdAt = Date.now();
    item.uuid = uuidv5(`${item.name}`, uuidv4());
    await item.save();
    let payload = item
    payload.uuid = item.uuid
    return payload;

}

var update = async (id, body, id_company) => {
    let item = await parametroModel.findOne(
        { 
            uuid: id, 
            deletedAt: { $exists: false }
        })
    if (item == null) {
        return null;
    } else {
        item.set({
            param_name: body.param_name ? body.param_name : item.param_name,
            param_value: body.param_value ? body.param_value : item.param_value,
            data_type: body.data_type ? body.data_type : item.data_type
        });
        await item.save();
        item = await parametroModel.findOne(
            { 
                uuid: id, 
                deletedAt: { $exists: false }
            })
            .select(' -__v -_id').lean();
        return item;
    }
};

var remove = async (id, token) => {

    let item = await parametroModel.findOne(
        { 
            uuid: id, 
            deletedAt: { $exists: false }
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
    create,
    update,
    remove
}


