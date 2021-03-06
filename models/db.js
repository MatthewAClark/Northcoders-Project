
const db = require('../config/index.js');

const getScheduleByTime = (departure_time) => db.manyOrNone('SELECT * FROM train_schedule INNER JOIN train_routes ON train_schedule.route_id=train_routes.starting_station INNER JOIN train_stations ON train_routes.starting_station=train_stations.station_id WHERE train_schedule.departure_time=$1', [departure_time]);

const getSchedule = (a,b) => db.manyOrNone('SELECT * FROM train_schedule WHERE train_id = $2', [a, b]);

const getSchedules = () => db.manyOrNone('SELECT * FROM train_schedule');

const getDelays = () => db.manyOrNone('SELECT * FROM delays');

const getSchedulesWithStationByTime = (dep_time) => db.manyOrNone ('SELECT * FROM train_schedule INNER JOIN train_routes ON train_schedule.route_id=train_routes.route_id INNER JOIN train_stations ON train_stations.station_id=train_routes.starting_station WHERE train_schedule.departure_time=$1', [dep_time]);

const postSchedule = (train_uid, departure_station, arrival_station, departure_time, arrival_time, train_operator) => db.one('INSERT INTO train_schedule (train_uid, departure_station, arrival_station, departure_time, arrival_time, train_operator) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [train_uid, departure_station, arrival_station, departure_time, arrival_time, train_operator]);


const postStatus = (schedule_date, expected_date_departure, expected_arrival_time, expected_departure_time, train_status, train_id) => db.one('INSERT INTO performance (schedule_date, expected_date_departure,expected_arrival_time, expected_departure_time, train_status, train_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [schedule_date, expected_date_departure, expected_arrival_time, expected_departure_time, train_status, train_id]);

const postCancelled = (date_of_delay, train_id) => db.one('INSERT INTO delays (date_of_delay, cancelled, train_id) VALUES ($1, true, $2) RETURNING *', [date_of_delay, train_id]);

const putScheduleArrivalTimeUpdate = (arrival_time, train_id) => db.oneOrNone('UPDATE train_schedule SET arrival_time = $1 WHERE train_id = $2 RETURNING *', [arrival_time, train_id]);

const putScheduleArrivalStationUpdate = (arrival_station, train_id) => db.oneOrNone('UPDATE train_schedule SET arrival_station = $1 WHERE train_id = $2 RETURNING *', [arrival_station, train_id]);

const putDelayArrivalTimeUpdate = (expected_arrival_time, delay_id) => db.oneOrNone('UPDATE delays SET expected_arrival_time = $1 WHERE delay_id = $2 RETURNING *', [expected_arrival_time, delay_id]);

module.exports = {getSchedulesWithStationByTime, putDelayArrivalTimeUpdate, putScheduleArrivalStationUpdate, putScheduleArrivalTimeUpdate, postCancelled, getSchedules, postSchedule, postStatus, getDelays, getSchedule, getScheduleByTime};

