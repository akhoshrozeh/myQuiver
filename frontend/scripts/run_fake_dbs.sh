#!/bin/zsh
kill -9 $(lsof -ti:3004)
kill -9 $(lsof -ti:3005)
json-server --watch db.json --port 3004 & json-server --watch dbWanted.json --port 3005