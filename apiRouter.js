const express = require('express')
const apiRouter = express()

// App path
const brasRouter = require('./routes/brasRouter')
const div_territorialRouter = require('./routes/div_territorialRouter')
const grupoRouter = require('./routes/grupoRouter')
const nivelAccesoRouter = require('./routes/nivelAccesoRouter')
const parametroRouter = require('./routes/parametroRouter')
const problemaRouter = require('./routes/problemaRouter')
const procedenciaRouter = require('./routes/procedenciaRouter')
const queja_siprecRouter = require('./routes/queja_siprecRouter')
const rolRouter = require('./routes/rolRouter')
const rutaRouter = require('./routes/rutaRouter')
const tipo_servicioRouter = require('./routes/tipo_servicioRouter')
const usuarioRouter = require('./routes/usuarioRouter')
const authRouter = require('./routes/authRouter')
const acsRouter = require('./routes/acsRouter')

apiRouter.use('/bras', brasRouter)
apiRouter.use('/div_territorial', div_territorialRouter)
apiRouter.use('/grupo', grupoRouter)
apiRouter.use('/nivel_acceso', nivelAccesoRouter)
apiRouter.use('/parametro', parametroRouter)
apiRouter.use('/problema', problemaRouter)
apiRouter.use('/procedencia', procedenciaRouter)
apiRouter.use('/queja_siprec', queja_siprecRouter)
apiRouter.use('/rol', rolRouter)
apiRouter.use('/ruta', rutaRouter)
apiRouter.use('/tipo_servicio', tipo_servicioRouter)
apiRouter.use('/usuario', usuarioRouter)
apiRouter.use('/auth', authRouter)
apiRouter.use('/acs', acsRouter)

module.exports = apiRouter