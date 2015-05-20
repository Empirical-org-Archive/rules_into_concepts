# rules_into_concepts

these transformations assume that rules will always correspond to a concept in between concept_tags and concept_categories.
this is not always the case, so I'm working on a modified version to handle that fact.

read table.js for names of tables in old and proposed system (they are csv tables in https://github.com/empirical-org/grammar-csv-import)

transformations must be done in following order:

1. rules_into_concepts_and_set_of_questions
2. concept_tags_and_concept_categories_into_concepts
3. associate_questions_to_concepts