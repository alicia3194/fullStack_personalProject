-- Creación tabla places.
CREATE TABLE Places (
    Place_id SERIAL PRIMARY KEY,
    Name VARCHAR(255),
    Type VARCHAR(255),
    Location VARCHAR(255),
    Schedules VARCHAR(255),
    Reviews VARCHAR(255),
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

-- Añadir índices a las claves foráneas para mejorar el rendimiento.
CREATE INDEX idx_favorites_place_id ON Favorites (Place_id);
CREATE INDEX idx_favorites_user_id ON Favorites (User_id);

-- Insercción de datos en la tabla places.
INSERT INTO Places (name, type, location, schedules, reviews, image)
VALUES ('Negocio 1','Restaurante', 'P.º de Recoletos, 15, 28004 Madrid', '09:00-20:00', '20','url' ),
		('Negocio 2','Parque', 'P.º de Extremadura, 11, 28004 Madrid', '09:00-18:00', '5','url'),
		('Negocio 3','Tienda', 'P.º de Castellana, 105, 28004 Madrid', '09:00-21:00', '10','url');

-- Insercción de datos en la tabla users (datos de ejemplo).
INSERT INTO Users (name, email, password)
VALUES ('Alicia', 'aliciacortinez@gmail.com', 'hashed_password'); 