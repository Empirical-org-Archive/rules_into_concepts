
// let SW_AR know that it references concepts now, not rules
change the name of the column 'rule_ids' in the table SW_AR to 'concept_ids'
No need to update the data in that field since the concept_ids will be copied from the rule_ids.


for each row_R in R :

  // extract concept from rule (will be at concept_level_1)
  add new row_C to C
  row_C.id = row_R.id
  row_C.name = row_R.title

  // extract set_of_questions from rule
  add new row_SQ to SQ
  row_SQ.description = row_R.description
  // associate the new set_of_questions to the new concept (both extracted from same rule)
  row_SQ.concept_id = row_C.id

  //associate that set_of_questions to the right questions
  let row_collection_RQR = rows in RQR where rule_id = row_R.id
  for each row_RQR in the collection, set row_RQR.set_of_questions_id = row_SQ.id


// RuleQuestions -> Questions
remove column rule_id from RQR (has been replaced by set_of_questions_id)
change name of RQR to 'questions' (Q)