select distinct p1.email from person p1 join person p2 on p1.email = p2.email and p1
.id != p2.id;
