/* eslint-disable no-console */
import app from './app'
/**
 * Start Express server.
*/

const server = app.listen(app.get('port'), () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  )
  console.log('  Press CTRL-C to stop\n')
  console.log(
    `Version 1 📗 Docs are available on http://localhost:${app.get('port')}/api/v1/docs`
  )
})

export default server
