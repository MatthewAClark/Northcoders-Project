const db = require('../config/index.js');

const getAllStations = () => db.manyOrNone(`SELECT * FROM train_stations`)

const getStationById = (station_id) => db.oneOrNone('SELECT * FROM train_stations WHERE station_id = $1', [station_id])

const postStation = (station_name, station_code, user_station_type) => db.one(`INSERT INTO train_stations (station_name, station_code, user_station_type) VALUES ($1, $2, $3) RETURNING *`, [station_name, station_code, user_station_type])

const deleteStation = (station_id) => db.one(`DELETE FROM train_stations WHERE station_id = $1 RETURNING *`, [station_id])

// const getSchedule = (a,b) => db.manyOrNone(`SELECT * FROM train_schedule WHERE train_id = $2`, [a, b])

// const getSchedules = () => db.manyOrNone(`SELECT * FROM train_schedule`)

// const getDelays = () => db.manyOrNone(`SELECT * FROM delays`)

// const postSchedule = (train_uid, departure_station, arrival_station, departure_time, arrival_time, train_operator) => db.one(`INSERT INTO train_schedule (train_uid, departure_station, arrival_station, departure_time, arrival_time, train_operator) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [train_uid, departure_station, arrival_station, departure_time, arrival_time, train_operator])


// const postDelay = (date_of_delay, expected_date_departure, expected_arrival_time, expected_departure_time, train_id) => db.one(`INSERT INTO delays (date_of_delay, expected_date_departure,expected_arrival_time, expected_departure_time, cancelled, train_id) VALUES ($1, $2, $3, $4, false, $5) RETURNING *`, [date_of_delay, expected_date_departure, expected_arrival_time, expected_departure_time, train_id])

// const postCancelled = (date_of_delay, train_id) => db.one(`INSERT INTO delays (date_of_delay, cancelled, train_id) VALUES ($1, true, $2) RETURNING *`, [date_of_delay, train_id])

// const putScheduleArrivalTimeUpdate = (arrival_time, train_id) => db.oneOrNone(`UPDATE train_schedule SET arrival_time = $1 WHERE train_id = $2 RETURNING *`, [arrival_time, train_id]);

// const putScheduleArrivalStationUpdate = (arrival_station, train_id) => db.oneOrNone(`UPDATE train_schedule SET arrival_station = $1 WHERE train_id = $2 RETURNING *`, [arrival_station, train_id]);

// const putDelayArrivalTimeUpdate = (expected_arrival_time, delay_id) => db.oneOrNone(`UPDATE delays SET expected_arrival_time = $1 WHERE delay_id = $2 RETURNING *`, [expected_arrival_time, delay_id]);

module.exports = { deleteStation, postStation, getAllStations, getStationById}