
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

// activity - concepts
AC : activity_id, body, concept_ids

// concept
C : id, name

// concept - concept
CC : id, parent_id, child_id

// concept - set_of_questions
CSQ : concept_id, set_of_questions_id

// concept - question
CQ : concept_id, question_id

// set_of_questions
SQ : set_of_questions_id, description

// question - set_of_questions
Q : question_id, body, set_of_questions_id




