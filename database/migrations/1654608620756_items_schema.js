'use strict'

const { name } = require('@adonisjs/ace/lib/commander')

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemsSchema extends Schema {
  up () {
    this.create('items', (table) => {
      table.increments()
      // table.string('item_id')
      table.string('item_name', 100).notNullable().unique()
      table.string('type', 50).notNullable()
      table.string('label', 100).notNullable()
      table.string('img', 150)
      table.string('description', 255).notNullable()
      table.bigInteger('page')
      table.bigInteger('price')
      table.bigInteger('value')
      table.bigInteger('amount')
      table.bigInteger('unlocked')
      table.bigInteger('ups')
      table.bigInteger('totalEfficiency')
    })
  }

  down () {
    this.drop('items')
  }
}

module.exports = ItemsSchema
