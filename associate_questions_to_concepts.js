

for each row_Q in Q // questions
  let row_RQC be the row in RQC with RQC.rule_question_id = Q.id
  let row_C be the row in C with C.name = RQC.concept_tag
  set row_Q.concept_id = row_C.id


delete table RQC (its information is now all embedded in Q and in C)



