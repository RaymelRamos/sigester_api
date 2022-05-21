const brasModel = require('../models/bras')
const rolModel = require('../models/rol');
const nivelAccesoModel = require('../models/nivel_acceso');
const tipoServicioModel = require('../models/tipoServicio');
const parametroModel = require('../models/parametro');
const parametrizationModel = require('../models/parametrization');
const { v5: uuidv5, v4: uuidv4 } = require('uuid');

const loadBras = [
    {
        nombre_bras: "Buena vista 2",
        subnet_address: "10.224.192.0",
        subnet_mask: "255.255.192.0",
        ip_equipo: "10.252.203.56"
    },
    {
        nombre_bras: "Aguila 2",
        subnet_address: "10.225.0.0",
        subnet_mask: "255.255.0.0",
        ip_equipo: "10.252.203.202"
    },
    {
        nombre_bras: "Cubanacan 2",
        subnet_address: "10.224.128.0",
        subnet_mask: "255.255.0.0",
        ip_equipo: "10.252.203.153"
    },
    {
        nombre_bras: "Luz",
        subnet_address: "10.227.0.0",
        subnet_mask: "255.255.192.0",
        ip_equipo: "10.252.203.104"
    },
    {
        nombre_bras: "Cienfuegos",
        subnet_address: "10.212.64.0",
        subnet_mask: "255.255.192.0",
        ip_equipo: "10.252.206.4"
    },
    {
        nombre_bras: "Las Tunas",
        subnet_address: "10.212.192.0",
        subnet_mask: "255.255.192.0",
        ip_equipo: "10.252.211.4"
    },
    {
        nombre_bras: "Villa Clara",
        subnet_address: "10.212.64.0",
        subnet_mask: "255.255.192.0",
        ip_equipo: "10.252.207.4"
    },
    {
        nombre_bras: "Holguin",
        subnet_address: "10.224.128.0",
        subnet_mask: "255.255.192.0",
        ip_equipo: "10.252.212.4"
    }
]

const loadRol =
    [
        {
            nombre_rol: "Super Administrador",
            descripcion: "Super administrador del sistema, tiene acceso a todas las funcionalidades del sistema"
        },
        {
            nombre_rol: "Administrador",
            descripcion: "Administrador del sistema"
        },
        {
            nombre_rol: "Operador",
            descripcion: "Operador del sistema"
        },
        {
            nombre_rol: "Supervisor",
            descripcion: "Supervisor del sistema"
        },
    ]

const loadNivelAcceso = [
    {
        nombre: "Nacional",
        descripcion: "Acceso a todo el país"
    },
    {
        nombre: "Regional",
        descripcion: "Acceso a una región del país"
    }
]

const loadTipoServicio = [
    {
        nombre: "Servicio de FWA",
        value: "FWA"
    },
    {
        nombre: "Servicio de NAUTA Residencial",
        value: "NAUTA_RESIDENCIAL"
    },
    {
        nombre: "Servicio de NAUTA Empresarial",
        value: "NAUTA_EMPRESARIAL"
    },
]

const loadParametro = [
    {
        param_name: "Habilitar/Deshabilitar WIFI 1",
        param_value: "InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.Enable",
        _writable: true,
        data_type: "xsd:boolean",
        model_oui: "00E0FC",
        model_product_class: "B311-221"
    },
    {
        param_name: "Habilitar/Deshabilitar WIFI 2",
        param_value: "InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.Enable",
        _writable: true,
        data_type: "xsd:boolean",
        model_oui: "00E0FC",
        model_product_class: "B311-221"
    },
    {
        param_name: "Cambiar SSID 1",
        param_value: "InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.SSID",
        _writable: true,
        data_type: "xsd:string",
        model_oui: "00E0FC",
        model_product_class: "B311-221"
    },
    {
        param_name: "Ocultar SSID 1",
        param_value: "InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.SSIDAdvertisementEnabled",
        _writable: true,
        data_type: "xsd:boolean",
        model_oui: "00E0FC",
        model_product_class: "B311-221"
    },
    {
        param_name: "Cambiar SSID 2",
        param_value: "InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.SSID",
        _writable: true,
        data_type: "xsd:string",
        model_oui: "00E0FC",
        model_product_class: "B311-221"
    },
    {
        param_name: "Ocultar SSID 2",
        param_value: "InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.SSIDAdvertisementEnabled",
        _writable: true,
        data_type: "xsd:boolean",
        model_oui: "00E0FC",
        model_product_class: "B311-221"
    },
    {
        param_name: "Cambiar el tiempo de reporte al ACS",
        param_value: "InternetGatewayDevice.ManagementServer.PeriodicInformInterval",
        _writable: true,
        data_type: "xsd:unsignedInt",
        model_oui: "00E0FC",
        model_product_class: "B311-221"
    },
    {
        param_name: "Cambiar APN activa (name)",
        param_value: "InternetGatewayDevice.Services.X_ATP_Dialup.InternetAPN.apn",
        _writable: true,
        data_type: "xsd:string",
        model_oui: "00E0FC",
        model_product_class: "B311-221"
    },
    {
        param_name: "Cambiar APN activa (profile)",
        param_value: "InternetGatewayDevice.Services.X_ATP_Dialup.InternetAPN.profile_name",
        _writable: true,
        data_type: "xsd:string",
        model_oui: "00E0FC",
        model_product_class: "B311-221"
    },
    {
        param_name: "Cambiar APN activa (auth_mode)",
        param_value: "InternetGatewayDevice.Services.X_ATP_Dialup.InternetAPN.auth_mode",
        _writable: true,
        data_type: "xsd:unsignedInt",
        model_oui: "00E0FC",
        model_product_class: "B311-221"
    },
    {
        param_name: "Cambiar APN activa (ip_type)",
        param_value: "InternetGatewayDevice.Services.X_ATP_Dialup.InternetAPN.ip_type",
        _writable: true,
        data_type: "xsd:unsignedInt",
        model_oui: "00E0FC",
        model_product_class: "B311-221"
    },
    {
        param_name: "Cambiar APN activa (password)",
        param_value: "InternetGatewayDevice.Services.X_ATP_Dialup.InternetAPN.password",
        _writable: true,
        data_type: "xsd:string",
        model_oui: "00E0FC",
        model_product_class: "B311-221"
    },
    {
        param_name: "Cambiar APN activa (username)",
        param_value: "InternetGatewayDevice.Services.X_ATP_Dialup.InternetAPN.username",
        _writable: true,
        data_type: "xsd:string",
        model_oui: "00E0FC",
        model_product_class: "B311-221"
    },
    {
        param_name: "Habilitar/Deshabilitar acceso a internet por LTE",
        param_value: "InternetGatewayDevice.WANDevice.2.WANCommonInterfaceConfig.EnabledForInternet",
        _writable: true,
        data_type: "xsd:boolean",
        model_oui: "00E0FC",
        model_product_class: "B311-221"
    },
    {
        param_name: "Habilitar/Deshabilitar acceso a internet por WAN",
        param_value: "InternetGatewayDevice.WANDevice.1.WANCommonInterfaceConfig.EnabledForInternet",
        _writable: true,
        data_type: "xsd:boolean",
        model_oui: "00E0FC",
        model_product_class: "B311-221"
    }
]

const loadParametrization = [ // Estos parametros son para el HUAWEI B311
    {
        oui: "00E0FC",
        productClass: "B311-221",
        module: "FWA",
        params_list: [
            { // Quinto
                param_name: "Dispositivos conectados",
                param_path: "InternetGatewayDevice.LANDevice.1.Hosts.Host"
            },
            { // Cuarto
                param_name: "Estado de la WIFI",
                param_path: "InternetGatewayDevice.LANDevice.1.WLANConfiguration.1"
            },
            { // Tercero
                param_name: "Estadísticas de LTE",
                param_path: "InternetGatewayDevice.WANDevice.2.X_ATP_WANUMTSInterfaceConfig.Stats"
            },
            { // Tercero opcional
                param_name: "Estadísticas de la WAN",
                param_path: "InternetGatewayDevice.WANDevice.1.X_ATP_WANUMTSInterfaceConfig.Stats"
            },
            { // Esto es la primero
                param_name: "Información de la conexión por LTE",
                param_path: "InternetGatewayDevice.WANDevice.2.X_ATP_WANUMTSInterfaceConfig"
            },
            { // Esto es opcional
                param_name: "Información de la conexión por WAN",
                param_path: "InternetGatewayDevice.WANDevice.1.X_ATP_WANUMTSInterfaceConfig"
            },
            { // La info de las APNs es lo segundo
                param_name: "Gestión de APN",
                param_path: "InternetGatewayDevice.Services.X_ATP_Dialup"
            },
            {
                param_name: "Modelo de dispositivo",
                param_path: "InternetGatewayDevice.DeviceInfo.ModelName"
            },
            {
                param_name: "Versión de firmware",
                param_path: "InternetGatewayDevice.DeviceInfo.FirmwareVersion"
            },
            {
                param_name: "IP LTE",
                param_path: "InternetGatewayDevice.WANDevice.2.WANConnectionDevice.1.WANPPPConnection.1.InternetGatewayDevice.WANDevice.2.WANConnectionDevice.1.WANPPPConnection.1.ExternalIPAddress"
            },
            {
                param_name: "IP WAN",
                param_path: "InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANPPPConnection.1.InternetGatewayDevice.WANDevice.2.WANConnectionDevice.1.WANPPPConnection.1.ExternalIPAddress"
            }
        ],
    }
]

const insertBras = async () => {
    let size = await brasModel.count({});
    if (size === 0) {
        loadBras.forEach(async (loadBras) => {
            let item = new brasModel(loadBras)
            item.createdAt = Date.now()
            item.uuid = uuidv5(`${item.name}`, uuidv4())
            await item.save()
        })
    }
    console.log('----------- Bras guardado -----------')
}

const insertRol = async () => {
    let size = await rolModel.count({});
    if (size === 0) {
        loadRol.forEach(async (loadRol) => {
            let item = new rolModel(loadRol)
            item.createdAt = Date.now()
            item.uuid = uuidv5(`${item.name}`, uuidv4())
            await item.save()
        })
    }
    console.log('----------- rol guardado -----------')
}

const insertNivelAcceso = async () => {
    let size = await nivelAccesoModel.count({});
    if (size === 0) {
        loadNivelAcceso.forEach(async (loadNivelAcceso) => {
            let item = new nivelAccesoModel(loadNivelAcceso)
            item.createdAt = Date.now()
            item.uuid = uuidv5(`${item.name}`, uuidv4())
            await item.save()
        })
    }
    console.log('----------- nivel de acceso guardado -----------')
}

const insertTipoServicio = async () => {
    let size = await tipoServicioModel.count({});
    if (size === 0) {
        loadTipoServicio.forEach(async (loadTipoServicio) => {
            let item = new tipoServicioModel(loadTipoServicio)
            item.createdAt = Date.now()
            await item.save()
        })
    }
    console.log('----------- tipo de servicio guardado -----------')
}

const insertParametro = async () => {
    let size = await parametroModel.count({});
    if (size === 0) {
        loadParametro.forEach(async (loadParam) => {
            let item = new parametroModel(loadParam)
            item.createdAt = Date.now()
            item.uuid = uuidv5(`${item.param_name}`, uuidv4())
            await item.save()
        })
    }
    console.log('----------- Parametro guardado -----------')
}

const insertParametrization = async () => {
    let size = await parametrizationModel.count({});
    if (size === 0) {
        loadParametrization.forEach(async (loadParametrization) => {
            let item = new parametrizationModel(loadParametrization)
            item.createdAt = Date.now()
            item.uuid = uuidv5(`${item.param_name}`, uuidv4())
            await item.save()
        })
    }
    console.log('------ Parametrizacion guardada ------')
}

function init() {
    insertBras()
    insertRol()
    insertNivelAcceso()
    insertTipoServicio()
    insertParametro()
    insertParametrization()
}



module.exports = { init };
