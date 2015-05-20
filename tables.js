
current system :


//sw_activity - rules
SW_AR : activity_id, body, rule_ids

//rules
R : rule_id, title

//rule_question - concept
RQC : rule_question_id, concept_tag, concept_category

//rule_question - rule
RQR: rule_question_id, body, rule_id




new system :

// activities
AC : id, body, concept_ids

// concept
C : id, name

// concept relations
CC : id, parent_id, child_id

// concept - question
CQ : id, concept_id, question_id

// set_of_questions
SQ : id, description, concept_id

// questions
Q : id, body, set_of_questions_id




