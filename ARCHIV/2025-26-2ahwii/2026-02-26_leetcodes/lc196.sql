sqlite> select max(p1.id) from person p1 join person p2 on p1.email
 = p2.email and p1.id != p2.id group by p1.email;
max(p1.id)
3
6
