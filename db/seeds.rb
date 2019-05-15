# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Level.destroy_all
Enemy.destroy_all
User.destroy_all

level_1 = Level.create(name: "level one", level: 1, description: "test level 1")

Enemy.create(key: "", name: "TOM", level: level_1, value: "https://media.giphy.com/media/kNaDoYuHWoOhq/giphy.gif", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_1, value: "https://media.giphy.com/media/kNaDoYuHWoOhq/giphy.gif", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_1, value: "https://media.giphy.com/media/kNaDoYuHWoOhq/giphy.gif", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_1, value: "https://media.giphy.com/media/kNaDoYuHWoOhq/giphy.gif", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_1, value: "https://media.giphy.com/media/kNaDoYuHWoOhq/giphy.gif", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_1, value: "https://media.giphy.com/media/kNaDoYuHWoOhq/giphy.gif", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_1, value: "https://media.giphy.com/media/kNaDoYuHWoOhq/giphy.gif", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_1, value: "https://media.giphy.com/media/kNaDoYuHWoOhq/giphy.gif", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_1, value: "https://media.giphy.com/media/kNaDoYuHWoOhq/giphy.gif", word: "TOM")

User.create(email: "email1@email.com", username: "user1", password: "password", password_confirmation: "password", top_score: 100)
User.create(email: "email2@email.com", username: "user2", password: "password", password_confirmation: "password", top_score: 90)
User.create(email: "email3@email.com", username: "user3", password: "password", password_confirmation: "password", top_score: 80)
User.create(email: "email4@email.com", username: "user4", password: "password", password_confirmation: "password", top_score: 70)
User.create(email: "email5@email.com", username: "user5", password: "password", password_confirmation: "password", top_score: 60)
User.create(email: "email6@email.com", username: "user6", password: "password", password_confirmation: "password", top_score: 50)
User.create(email: "email7@email.com", username: "user7", password: "password", password_confirmation: "password", top_score: 40)
User.create(email: "email8@email.com", username: "user8", password: "password", password_confirmation: "password", top_score: 30)
User.create(email: "email9@email.com", username: "user9", password: "password", password_confirmation: "password", top_score: 20)
User.create(email: "email10@email.com", username: "user10", password: "password", password_confirmation: "password", top_score: 10)
