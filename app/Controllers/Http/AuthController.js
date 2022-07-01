'use strict'

const User = use('App/Models/User')

class AuthController {
  async register({ request }) {
    const data = request.only(['username', 'email', 'password' ])

    const user =  await User.create(data)

    return user
  }

  async authenticate ({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }

  async connect({response}) {
    console.log('Acesso no navegador')
    response.send({api: 'connect'})
  }
}

module.exports = AuthController
