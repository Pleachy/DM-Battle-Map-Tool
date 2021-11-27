# DM-Battle-Map-Tool
A D&D application for dungeon masters to help lay out combat environments and keep track of initiative, pc positions, obstacles, hazards and enemy positions


Overall Functionality:

- users shouldn't be able to see the entire map, only areas that they and other characters have visited.
- admins should be able to see the entire map unobscured
- online functionality (think about later maybe)

- map pseudo code
[0, 0, 0, 0, x, h, i]
[0, e, 0, 0, 0, 0, 0]
[0, c, 0, 0, 0, 0, 0]



Database Functionality:

- tables for users, for characters and for saved maps, campaigns

campaigns:
- id's of all users in the campaign, id of the user that is a dm for that campaign, and id for maps
  that has the campaign

users:
- username, password, profile icon/picture(optional), phone number(optional), email

characters:
- name, race, age, height, weight, hair, eyes, character level(Barbarian 5, Wizard 2 etc..)
  skills (acrobatics, appraise, bluff, climb, craft, diplomacy, disable device, disguise, escape artist
           fly, handle animal, heal, intimidate, knowledge: arcana, dungeoneering, engineering, geography
           history, local, nature, nobility, planes, religion, linguistics, perform, profession, ride, sense
           motive, sleight of hand, spellcraft, stealth, survival, swim, use magic device),
  CMB (combat maneuver bonus), CMD (combat maneuver defense), AC (armor class), Flatfooted AC, Touch AC, intiative,
  Attributes (Strength, dexterity, constitution, intelligence, wisdom, charisma), Base Speed (land, swim, fly etc..)
  Base Attack Bonus, Currently Equipped Weapons(attack bonus, critical modifier, damage, type, ammunition if any)
  Conditional Modifiers(if any), Gear, Feats, Special Abilities, spells, money, experience points.

Saved Maps:
- nested 2-D Array displaying a grid-like maybe?
- brainstorm later
- map

adapter methods: get characters by user, get all characters for admins, modify characters, modify users, get maps by admin(later)


API functionality: 
- routes for users, maps, characters and admins

users:
- modify user info, create a new character, modify an existing character, delete a character, get character details, view characters

admins: 
- view all characters in a campaign



