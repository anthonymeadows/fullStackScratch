CREATE TABLE IF NOT EXISTS Customers (
	customer_id serial PRIMARY KEY NOT NULL,
	customer_name varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS Items (
	item_id serial PRIMARY KEY NOT NULL,
	item_image_path text NOT NULL,
	item_price integer NOT NULL,
	item_desc json,
	item_url text
);

CREATE TABLE IF NOT EXISTS Carts (
	item_id integer NOT NULL REFERENCES Items(item_id),
	customer_id integer NOT NULL REFERENCES Customers(customer_id)
);