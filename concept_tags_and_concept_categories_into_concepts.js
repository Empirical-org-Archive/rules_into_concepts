
// extract concepts from the concept_tags and concept_categories referenced by rule questions
// give them the appropriate parent-child relations to the concepts which were derived from rules

for each row_RQC in RQC
  let row_RQR be the row in RQR where row_RQR.rule_question_id = row_RQC.rule_question_id
  let concept_from_rule_id = row_RQR.rule_id // this will become the id of the concept extracted from this rule

  if it does not exist yet, add a row_C to C, setting
    row_C.name = row_RQC.concept_tag // a concept at level 0

  if it does not exist yet, add another row2_C to C, setting
    row2_C.name = row_RQC.concept_category  // a concept at level 2


  // make concept from concept_category (level 2) parent to concept from rule (level 1)
  if it does not exist yet, add a new row_CC to CC, setting
    row_CC.parent_id = row2_C.id // concept from concept_category
    row_CC.child_id = concept_from_rule_id // concept_from_rule

  // make concept from rule (level 1) parent to concept from concept_tag (level 0)
  if it does not exist yet, add a new row_CC to CC, setting
    row_CC.parent_id = concept_from_rule_id // concept from rule
    row_CC.child_id  = row_C.id // concept from concept_tag


