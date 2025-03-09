select id,displayname from persons where (sex = 'female' and displayname like 'herr%') or (sex = 'male' and displayname like 'frau%') order by id;
