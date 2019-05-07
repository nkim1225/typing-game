# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Level.destroy_all
Enemy.destroy_all

level_1 = Level.create(name: "level one", level: 1, description: "test level 1")
level_2 = Level.create(name: "level one", level: 2, description: "test level 2")

Enemy.create(key: "", name: "TOM", level: level_1, value: "[*]", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_1, value: "[*]", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_1, value: "[*]", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_1, value: "[*]", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_1, value: "[*]", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_1, value: "[*]", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_1, value: "[*]", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_1, value: "[*]", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_1, value: "[*]", word: "TOM")

Enemy.create(key: "", name: "TOM", level: level_2, value: "[*]", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_2, value: "[*]", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_2, value: "[*]", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_2, value: "[*]", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_2, value: "[*]", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_2, value: "[*]", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_2, value: "[*]", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_2, value: "[*]", word: "TOM")
Enemy.create(key: "", name: "TOM", level: level_2, value: "[*]", word: "TOM")