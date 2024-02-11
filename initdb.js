import { sqlite3 } from "sqlite3";

const db = new sqlite3.Database(
  "./cities.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) console.log("CODE ERROR:", err.message);

    console.log("Connection successful");
  }
);

const dummyData = [
  {
    cityName: "Lisbon",
    country: "Portugal",
    emoji: "🇵🇹",
    date: "2024-02-10",
    notes: "My favorite city so far",
    position: {
      lat: 38.7223,
      lng: -9.1393,
    },
  },
  {
    cityName: "Tokyo",
    country: "Japan",
    emoji: "🇯🇵",
    date: "2024-02-13",
    notes: "Amazing city with a rich culture",
    position: {
      lat: 35.6895,
      lng: 139.6917,
    },
  },
  {
    cityName: "New York",
    country: "United States",
    emoji: "🇺🇸",
    date: "2024-02-11",
    notes: "The city that never sleeps",
    position: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
];

db.run(`
    CREATE TABLE IF NOT EXISTS cities
`);

db.close((err) => {
  if (err) console.log("CODE ERROR:", err.message);
});
