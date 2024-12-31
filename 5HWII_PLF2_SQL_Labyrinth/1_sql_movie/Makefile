default: fresh

fresh: cinema.db

cinema.db::
	rm -f cinema.db
	sqlite3 cinema.db < create.sql
	# sqlite3 cinema.db
