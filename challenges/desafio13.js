db.trips.aggregate([
  { $match: {
    startTime: { $gte: ISODate("2016-03-10") },
  } },
  { $group: {
    _id: "null",
    duracaoMediaEmMinutos: { $avg: {
      $divide: [{ $subtract: ["$stopTime", "$startTime"] }, 1000 * 60],
    } },
  } },
  { $project: {
    _id: 0,
    duracaoMediaEmMinutos: { $ceil: "$duracaoMediaEmMinutos" },
  } },
]);
