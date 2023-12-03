//Find all mentors with mentee count more than 15:
db.mentor.find({
    "mentee_count": { $gt: 15 }
  })

 // Find the number of problems solved by the user in codekata:

  db.codekata.aggregate([
    {
      $group: {
        _id: "$user_id",
        totalProblemsSolved: { $sum: "$problems_solved" }
      }
    }
  ])

  //Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

  db.attendance.find({
    date: {
      $gte:  ("15/10/2020"),
      $lte:  ("31/10/2020")
    },
    status: "absent"
  });
  
  
 // Find all the topics and tasks which are thought in the month of October

  db.topics.find({
    date: {
      $gte:  ("01/10/2020"),
      $lte:  ("31/10/2020")
    },
  });
  
  db.tasks.find({
    date: {
      $gte:  ("01/10/2020"),
      $lte:  ("31/10/2020")
    },
  });
  

  //Find all the company drives which appeared between 15 Oct 2020 and 31 Oct 2020:
  db.placement.find({
    date: {
      $gte:  ("15/10/2020"),
      $lte:  ("31/10/2020")
    },
  });
