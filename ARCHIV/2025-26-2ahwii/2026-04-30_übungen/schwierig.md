# Retrieve question(s) with correct and wrong answers

## EINE Frage mit allen Antworten (richtig und falsch)

```sql
-- Falsche Antworten
SELECT
  q.question,
  t.type,
  d.level AS difficulty,
  c.name AS category,
  a.answer,
  'wrong' AS answer_type
FROM Question q
JOIN Type t       ON q.typeId = t.id
JOIN Difficulty d ON q.difficultyId = d.id
JOIN Category c   ON q.categoryId = c.id
JOIN _IncorrectAnswers ia ON ia.B = q.id
JOIN Answer a     ON a.id = ia.A
where q.question like '%city%81%'

UNION ALL

-- Korrekte Antwort
SELECT
  q.question,
  t.type,
  d.level AS difficulty,
  c.name AS category,
  a.answer,
  'correct' AS answer_type
FROM Question q
JOIN Type t       ON q.typeId = t.id
JOIN Difficulty d ON q.difficultyId = d.id
JOIN Category c   ON q.categoryId = c.id
JOIN Answer a     ON a.id = q.correct_answer_id

where q.question like '%city%81%'

ORDER BY answer_type DESC, answer;
```
