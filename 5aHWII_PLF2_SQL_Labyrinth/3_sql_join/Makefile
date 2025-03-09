default: fresh

fresh: twotables.db

twotables.db::
	rm -f twotables.db
	sqlite3 twotables.db < create.sql
	# sqlite3 twotables.db
