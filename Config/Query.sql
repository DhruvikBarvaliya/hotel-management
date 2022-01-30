CREATE TABLE items ( id serial PRIMARY KEY , item_type VARCHAR NOT NULL, item_name VARCHAR,item_cost VARCHAR,item_details VARCHAR,status VARCHAR);


CREATE TABLE expenses ( id serial PRIMARY KEY , expense_type VARCHAR NOT NULL, expense_description VARCHAR, expense_amount VARCHAR, expense_date TIMESTAMP, status VARCHAR);


CREATE TABLE rooms ( id serial PRIMARY KEY , room_no INT NOT NULL, room_type VARCHAR, room_sample VARCHAR, description VARCHAR, cost VARCHAR, status VARCHAR);


CREATE TABLE customers ( id serial PRIMARY KEY , first_name VARCHAR NOT NULL, last_name VARCHAR, reservation TIMESTAMP, address VARCHAR, address_proof VARCHAR, status VARCHAR, contact_no VARCHAR, gender VARCHAR, id_proof VARCHAR, profile_img VARCHAR);


CREATE TABLE employees ( id serial PRIMARY KEY , first_name VARCHAR NOT NULL, last_name VARCHAR, employee_type VARCHAR, employee_description VARCHAR, job_department VARCHAR, address VARCHAR, contact_address VARCHAR, user_name VARCHAR, password VARCHAR);


CREATE TABLE bookings ( id serial PRIMARY KEY , room_id INT NOT NULL, customer_id INT,booking_date TIMESTAMP,checkin TIMESTAMP,checkout TIMESTAMP,status VARCHAR, FOREIGN KEY (room_id) REFERENCES rooms (id), FOREIGN KEY (customer_id) REFERENCES customers (id));


CREATE TABLE orders ( id serial PRIMARY KEY , item_id INT NOT NULL, booking_id INT, order_date TIMESTAMP, quentity VARCHAR, cost VARCHAR, status VARCHAR,  FOREIGN KEY (item_id) REFERENCES items (id), FOREIGN KEY (booking_id) REFERENCES bookings (id));


CREATE TABLE payments ( id serial PRIMARY KEY , customer_id INT NOT NULL, booking_id INT, type VARCHAR, payment_date TIMESTAMP, payment_amount VARCHAR, status VARCHAR,  FOREIGN KEY (customer_id) REFERENCES customers (id), FOREIGN KEY (booking_id) REFERENCES bookings (id));


CREATE TABLE reservations ( id serial PRIMARY KEY , customer_id INT NOT NULL, room_id INT, reservation_date TIMESTAMP, date_in TIMESTAMP, date_out TIMESTAMP, days_range VARCHAR,  FOREIGN KEY (customer_id) REFERENCES customers (id), FOREIGN KEY (room_id) REFERENCES rooms (id));


CREATE TABLE transactions ( id serial PRIMARY KEY , transaction_name VARCHAR NOT NULL, customer_id INT, employee_id INT, reservation_id INT, transaction_date TIMESTAMP,  FOREIGN KEY (customer_id) REFERENCES customers (id), FOREIGN KEY (employee_id) REFERENCES employees (id),FOREIGN KEY (reservation_id) REFERENCES reservations (id));


CREATE TABLE reports ( id serial PRIMARY KEY , transaction_id INT NOT NULL, name VARCHAR, type VARCHAR,  FOREIGN KEY (transaction_id) REFERENCES transactions (id));

-- CREATE TABLE IF NOT EXISTS items ( id serial PRIMARY KEY , item_type VARCHAR NOT NULL, item_name VARCHAR,item_cost VARCHAR,item_details VARCHAR,status VARCHAR);