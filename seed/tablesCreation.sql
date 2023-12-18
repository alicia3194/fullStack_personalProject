-- Creación tabla places.
CREATE TABLE Places (
    Place_id SERIAL PRIMARY KEY,
    Name VARCHAR(255),
    Type VARCHAR(255),
    Location VARCHAR(255),
    Latitude DOUBLE PRECISION,
    Longitude DOUBLE PRECISION,
    Schedules VARCHAR(255),
    Image VARCHAR(255)
);


-- Creación tabla users.
CREATE TABLE Users (
    User_id SERIAL PRIMARY KEY,
    Name VARCHAR(255),
    Email VARCHAR(255),
   Password VARCHAR(255)
);

-- Creación tabla favorites.
CREATE TABLE Favorites (
    Favorites_id SERIAL PRIMARY KEY,
    Place_id INT REFERENCES Places(Place_id),
    User_id INT REFERENCES Users(User_id)
);

-- Insercción de datos en la tabla places.
INSERT INTO Places (name, type, location, schedules, reviews, image)
VALUES 
('Yeca Estrit Fud','Restaurante', 'Calle de Tribulete, 10, Lavapiés','jueves 14:00–17:00, 20:00–24:00; viernes 14:00–17:00, 20:00–24:00; sábado 14:00–17:00, 20:00–24:00; domingo 14:00–17:00, 20:00–24:00; lunes Cerrado; martes Cerrado; miércoles 14:00–17:00, 20:00–24:00', NULL, 'https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2021/10/09053826/15-1-1024x683.jpg'),
('Golda','Cafeteria','Calle Orellana 19','Todos los días de 8:30hs a 19:00hs', NULL, 'https://www.srperro.com/media/negocio/f1d4416e-d6d3-41c8-b457-7b3bf1b61f87.original.jpg'),
('Gozar Neotaberna Castiza', 'Restaurante', 'Calle Orellana 19', 'De Miércoles a Sábado: 12:00 a 16:00 // 20:30 a 23:30', NULL, 'https://www.srperro.com/media/imagenes_galeria/negocio_aaa4ce6b-93e4-4c0c-b370-d09818466031.original.jpg'),
('El sueño de Carmen', 'Cafeteria', 'Calle San Epifanio 7', 'Lun - Vie 6:30 - 00:00, Sab - Dom 9:30 - 00:00', NULL, 'https://www.elsuenodecarmen.es/-_-/res/0fc66d5b-cea6-4d7b-bdcb-00bb0e7635c0/images/files/0fc66d5b-cea6-4d7b-bdcb-00bb0e7635c0/c235a051-e353-437b-8179-d2743e3bd906/607-455/c7d33c806c2d2cd73411830a1a472772f3204547'),
('El Perro y La Galleta', 'Restaurante', 'Calle Corredera Baja De San Pablo, 31, Malasaña', 'jueves 13:00–0:30; viernes 13:00–0:30; sábado 13:00–0:30; domingo 13:00–0:30; lunes 13:00–0:30; martes 13:00–0:30; miércoles 13:00–0:30', NULL, 'https://elperroylagalleta.com/wp-content/uploads/elementor/thumbs/159795666_1798656906962875_5657808035372429105_n-p8gcdj44za486pdf84tolqtnusdgj6sgpxxso97w20.jpg'),
('Bar Toboggan','Restaurante', 'Plaza de Rutilio Gacis, 2 - local 1', 'LUNES - VIERNES 11:00 - 23:00, SÁBADO - DOMINGO 10:00 - 23:00', NULL, 'https://www.srperro.com/media/negocio/e4bf0c50-614f-4a21-9edc-3137797b89b9.original.jpg'),
('Mür Café', 'Cafeteria', 'Plaza Cristino Martos, 2', 'Lunes: Cerrado por descanso; Martes: Cerrado por descanso; Miércoles: de 10:00h a 20:00h; Jueves: de 10:00h a 20:00h; Viernes: de 10:00h a 20:00h; Sábado: de 10:00h a 21:00h; Domingo: de 10:00h a 20:00h', NULL, 'https://revistahsm.com/wp-content/uploads/2015/05/murcafe2.jpg'),
('Pum Pum Café','Cafeteria', 'Tribulete, 6', 'Lun-Vie: 9:00-21:00, Sáb-Dom: 10:00-21:00', NULL, 'https://www.srperro.com/media/imagenes_galeria/negocio_7a034166-af1f-42c4-8a90-63d95d7e6d25.original.jpg'),
('Parque del Retiro','Parque','Plaza de la Independencia, 7','De abril a septiembre: lun-dom: 6:00 h – 24:00 h y de octubre a marzo: lun-dom: 6:00 h – 22:00 h', NULL, 'https://www.srperro.com/media/imagenes_galeria/negocio_9b0414f3-60c1-42a3-b3cb-f322e8f9dfd9.original.jpg'),
('Parque Juan Carlos I', 'Parque', 'Glorieta de Don Juan de Borbon Datterbaeg','De junio a septiembre: lun-dom: 7:00 h – 01:00 h y de octubre a mayo: dom-juev: 7:00 h a 23:00 h / vie-sáb: 7:00 h – 24:00 h', NULL, 'https://www.srperro.com/media/imagenes_galeria/negocio_ec80f18b-a2fc-4804-b0dd-65d5d724e2a0.original.jpg'),
('Parque Madrid Río','Parque','Paseo de la Ermita del Santo, 14','Abierto las 24 horas del día', NULL, 'https://www.srperro.com/media/imagenes_galeria/negocio_a1e6f0f0-e2fb-4529-878a-03e8b8712f66.original.jpg'),
('El Cantizal de las Rozas', 'Parque', 'Plaza Cantizal, 11E,Las Rozas de Madrid','Abierto las 24 horas del día', NULL, 'https://www.snau.es/blog/wp-content/uploads/2017/02/perro-parque-madrid.jpg'),
('Crazy Mary', 'Librería', 'Echegaray, 32','Lunes CERRADO Martes/Miércoles/Jueves: De 10 a 2 y de 5 a 8 Viernes y Sábados de 10 a 8 (Ininterrumpido) Domingos de 12 a 3', NULL, 'https://www.srperro.com/media/negocio/01a62386-e29c-41fd-b0b3-22f0505b222e.original.jpg'),
('Librería La Mistral','Librería', 'Travesía del Arenal, 2','Lunes a sábado de 10 a 21', NULL, 'https://viajes.nationalgeographic.com.es/medio/2022/08/23/la-mistral-4435_c6e89ac7_1200x630.jpg'),
('Librería Miguel Miranda', 'Librería', 'Lope de Vega, 19','Lunes a Viernes de 11:00 a 15:00 y de 17:30 a 20:30', NULL, 'https://www.srperro.com/media/imagenes_galeria/negocio_8297ee57-ad19-43de-9ea6-c03bb1e7a435.original.jpg'),
('Cafebrería ad Hoc', 'Librería', 'Buen Suceso 14', 'De 10:00 a 22:00 hrs, de lunes a sábado', NULL, 'https://www.srperro.com/media/imagenes_galeria/negocio_3c3aea2b-d99e-48a8-a835-77a9c0046edb.original.jpg')
-- Insercción de datos en la tabla users.
INSERT INTO Users (name, email, password) VALUES ($1, $2, $3) RETURNING *;

INSERT INTO Favorites (place_id, user_id) VALUES (1, 3) RETURNING *;
