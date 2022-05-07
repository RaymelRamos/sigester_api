const queja_siprecModel = require('../models/queja_siprec')
const { v5: uuidv5, v4: uuidv4 } = require('uuid');

var getAll = async (query) => {
    let skip = query.offset ? parseInt(query.offset) : 0;
    let limit = query.limit ? parseInt(query.limit) : 20;
    let item = await queja_siprecModel.find(
        {
            deletedAt: { $exists: false }
        })
        .select(' -__v -_id').skip(skip).limit(limit).lean();
    let size = await queja_siprecModel.count(
        {
            deletedAt: { $exists: false }
        });
    return { data: item, skip: skip, limit: limit, size: size };
}

var getById = async (id) => {
    return await queja_siprecModel.findOne(
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
    let data = await queja_siprecModel.find(objectOfSearch)
        .select(' -__v -_id').count();
    let size = data.length
    data = await queja_siprecModel.find(objectOfSearch)
        .select(' -__v -_id')
        .skip(skip).limit(limit).lean();

    return { data: data, skip: skip, limit: limit, size: size };
}

var create = async (body) => {
    let item = new queja_siprecModel(body);
    item.createdAt = Date.now();
    item.uuid = uuidv5(`${item.name}`, uuidv4())
    await item.save();
    let payload = item
    payload.uuid = item.uuid
    return payload;

}

var update = async (id, body, id_company) => {
    let item = await queja_siprecModel.findOne(
        { 
            uuid: id, 
            deletedAt: { $exists: false }
        })
    if (item == null) {
        return null;
    } else {
        item.set({
            servicio: body.servicio ? body.servicio : item.servicio,
            login: body.login ? body.login : item.login,
            cod_proced: body.cod_proced ? body.cod_proced : item.cod_proced,
            cod_prod: body.cod_prod ? body.cod_prod : item.cod_prod,
            observacion: body.observacion ? body.observacion : item.observacion,
            grupo: body.grupo ? body.grupo : item.grupo,
            folio: body.folio ? body.folio : item.folio,
            nomb_local: body.nomb_local ? body.nomb_local : item.nomb_local,
            tel_local: body.tel_local ? body.tel_local : item.tel_local,
            fijo: body.fijo ? body.fijo : item.fijo,
        });
        await item.save();
        item = await queja_siprecModel.findOne(
            { 
                uuid: id, 
                deletedAt: { $exists: false }
            })
            .select(' -__v -_id').lean();
        return item;
    }
};

var remove = async (id, token) => {

    let item = await queja_siprecModel.findOne(
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


