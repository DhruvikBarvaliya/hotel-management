CREATE TABLE bookings ( id serial PRIMARY KEY , room_id INT NOT NULL, customer_id TIMESTAMP,booking_date TIMESTAMP,checkin TIMESTAMP,checkout TIMESTAMP,status TIMESTAMP,  FOREIGN KEY (room_id) REFERENCES rooms (id), FOREIGN KEY (customer_id) REFERENCES customers (id));



CREATE TABLE customers ( id serial PRIMARY KEY , first_name INT NOT NULL, last_name TIMESTAMP, reservation TIMESTAMP, address TIMESTAMP, address_proof TIMESTAMP, status TIMESTAMP, contact_no TIMESTAMP, gender TIMESTAMP, id_proof TIMESTAMP, profile_img TIMESTAMP);



CREATE TABLE employees ( id serial PRIMARY KEY , first_name INT NOT NULL, last_name TIMESTAMP, employee_type TIMESTAMP, employee_description TIMESTAMP, job_department TIMESTAMP, address TIMESTAMP, contact_address TIMESTAMP, user_name TIMESTAMP, password TIMESTAMP, ;



CREATE TABLE expenses ( id serial PRIMARY KEY , expense_type INT NOT NULL, expense_description TIMESTAMP, expense_amount TIMESTAMP, expense_date TIMESTAMP, status TIMESTAMP, ;



CREATE TABLE items ( id serial PRIMARY KEY , item_type INT NOT NULL, item_name TIMESTAMP,item_cost TIMESTAMP,item_details TIMESTAMP,status TIMESTAMP, ;



CREATE TABLE orders ( id serial PRIMARY KEY , item_id INT NOT NULL, booking_id TIMESTAMP, order_date TIMESTAMP, quentity TIMESTAMP, cost TIMESTAMP, status TIMESTAMP,  FOREIGN KEY (item_id) REFERENCES items (id), FOREIGN KEY (booking_id) REFERENCES bookings (id));



CREATE TABLE payments ( id serial PRIMARY KEY , customer_id INT NOT NULL, booking_id TIMESTAMP, type TIMESTAMP, payment_date TIMESTAMP, payment_amount TIMESTAMP, status TIMESTAMP,  FOREIGN KEY (customer_id) REFERENCES customers (id), FOREIGN KEY (booking_id) REFERENCES bookings (id));



CREATE TABLE rooms ( id serial PRIMARY KEY , room_no INT NOT NULL, room_type TIMESTAMP, room_sample TIMESTAMP, description TIMESTAMP, cost TIMESTAMP, status TIMESTAMP, ;



CREATE TABLE reservations ( id serial PRIMARY KEY , customer_id INT NOT NULL, room_id TIMESTAMP, reservation_date TIMESTAMP, date_in TIMESTAMP, date_out TIMESTAMP, days_range TIMESTAMP,  FOREIGN KEY (customer_id) REFERENCES customers (id), FOREIGN KEY (room_id) REFERENCES rooms (id));



CREATE TABLE transactions ( id serial PRIMARY KEY , transaction_name INT NOT NULL, customer_id TIMESTAMP, employee_id TIMESTAMP, reservation_id TIMESTAMP, transaction_date TIMESTAMP,  FOREIGN KEY (customer_id) REFERENCES customers (id), FOREIGN KEY (employee_id) REFERENCES employees (id),FOREIGN KEY (reservation_id) REFERENCES reservations (id));



CREATE TABLE reports ( id serial PRIMARY KEY , transaction_id INT NOT NULL, name TIMESTAMP, type TIMESTAMP,  FOREIGN KEY (transaction_id) REFERENCES transactions (id));