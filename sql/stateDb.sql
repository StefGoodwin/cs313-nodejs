CREATE TABLE users (
	id SERIAL PRIMARY KEY NOT NULL,
	first_name VARCHAR(25) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(255) NOT NULL
);


CREATE TABLE states (
	id SERIAL PRIMARY KEY NOT NULL,
	state_name VARCHAR(50) NOT NULL,
	capital VARCHAR(50) NOT NULL,
	flower VARCHAR(50) NOT NULL,
	population INT NOT NULL
);

CREATE TABLE fun_facts (
	id SERIAL PRIMARY KEY NOT NULL,
	user_id INT NOT NULL REFERENCES users(id),
	facts TEXT NULL 
);

CREATE USER stateuser WITH PASSWORD 'user1';
GRANT SELECT, INSERT, UPDATE ON states TO stateuser;
GRANT USAGE, SELECT ON SEQUENCE states_id_seq TO stateuser;


INSERT INTO users(first_name, last_name, email) VALUES ('Stef', 'Goodwin', 'stefniegoodwin@yahoo.com');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Alabama', 'Montgomery', 'Camellia', '4903185');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Alaska', 'Juneau', 'Alpine Forget-me-not', '731545');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Arizona', 'Phoenix', 'Saguaro Cactus Bloom', '7278717');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Arkansas', 'Little Rock', 'Apple Blossom', '3017804');

INSERT INTO states(state_name, capital, flower, population) VALUES ('California', 'Sacramento', 'California Poppy', '39512223');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Colorado', 'Denver', 'Rocky Mountain Columbine', '5758736');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Conneticut', 'Hartford', 'Mountain Laurel', '3565287');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Delaware', 'Dover', 'Peach Blossom', '973764');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Florida', 'Miami', 'Orange Blossom', '21477737');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Georgia', 'Atlanta', 'Native Azalea', '10617423');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Hawaii', 'Honolulu', 'Lokelani', '1415872');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Idaho', 'Boise', 'Syringa', '1787065');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Illinois', 'Chicago', 'Violet', '12671821');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Indiana', 'Indianapolis', 'Apple Blossom', '3017804');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Iowa', 'Des Moines', 'Wild Rose', '3155070');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Kansas', 'Topeka', 'Wild Native Sunflower', '2913314');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Kentucky', 'Frankfort', 'Goldenrod', '4467673');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Louisiana', 'Baton Rouge', 'Louisiana Iris', '4648794');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Maine', 'Augusta', 'White Pine Cone and Tassel', '1344212');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Maryland', 'Annapolis', 'Black-Eyed Susan', '6045680');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Massachusetts', 'Boston', 'Mayflower', '6892503');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Michigan', 'Lansing', 'Apple Blossom', '9986857');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Minnesota', 'St.Paul', 'Dwarf Lake Iris', '5639632');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Mississippi', 'Jackson', 'Pink and White Lady Slipper', '2976149');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Missouri', 'Jefferson City', 'White Hawthorn Blossom', '6137428');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Montana', 'Helena', 'Bitterroot', '1068778');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Nebraska', 'Lincoln', 'Goldenrod', '193408');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Nevada', 'Carson City', 'Sagebrush', '3080156');

INSERT INTO states(state_name, capital, flower, population) VALUES ('New Hampshire', 'Concord',  'Pink Ladys Slipper', '1359711');

INSERT INTO states(state_name, capital, flower, population) VALUES ('New Jersey', 'Trenton', 'Violet', '8882190');

INSERT INTO states(state_name, capital, flower, population) VALUES ('New Mexico', 'Santa Fe', 'Yucca', '2096829');

INSERT INTO states(state_name, capital, flower, population) VALUES ('New York', 'Albany', 'Rose', '19453561');

INSERT INTO states(state_name, capital, flower, population) VALUES ('North Carolina', 'Raleigh', 'Dogwood', '10488084');

INSERT INTO states(state_name, capital, flower, population) VALUES ('North Dakota', 'Bismarck', 'Wild Prarier Rose', '762062');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Ohio', 'Columbus', 'White Trillum', '11689100');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Oklahoma', 'Oklahoma City', 'Mistletoe', '3956971');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Oregon', 'Salem', 'Oregon Grape', '4217737');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Pennsylvania', 'Harrisburg', 'Mountain Laurel', '12801989');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Rhode Island', 'Providence', 'Violet', '1059361');

INSERT INTO states(state_name, capital, flower, population) VALUES ('South Carolina', 'Columbia', 'Goldenrod', '5148714');

INSERT INTO states(state_name, capital, flower, population) VALUES ('South Dakota', 'Pierre', 'American Pasque', '884659');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Tennessee', 'Nashville', 'Passion Flower', '6829174');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Texas', 'Austin', 'Ennis', '28995881');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Utah', 'Salt Lake City', 'Sego Lily', '3205958');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Vermont', 'Montepelier', 'Red Clover', '623989');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Virginia', 'Richmond', 'American Dogwood', '8535519');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Washington', 'Olympia', 'Coast Rhododendron', '7614893');

INSERT INTO states(state_name, capital, flower, population) VALUES ('West Virginia', 'Charleston', 'Rhododendron', '1792147');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Wisconsin', 'Madison', 'Wood Violet', '5822434');

INSERT INTO states(state_name, capital, flower, population) VALUES ('Wyoming', 'Cheyenne', 'Indian Paintbrush', '578759');