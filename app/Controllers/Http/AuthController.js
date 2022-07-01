'use strict'

const User = use('App/Models/User')

class AuthController {
  async register({ request }) {
    const data = request.only(['username', 'email', 'password' ])

    const user =  await User.create(data)

    return user
  }

  async authenticate ({ request, response, auth }) {
    const { email, password } = request.all()

    try {
      const token = await auth.attempt(email, password)

      return token
    } catch (error) {
      response.status(401)
      response.json({
        message: 'E-mail ou Senha incorretos!'
      })
    }
  }

  async connect({response}) {
    console.log('Acesso no navegador')
    response.send({api: 'connect'})
  }
}

module.exports = AuthController
