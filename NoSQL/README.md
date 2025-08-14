# NoSQL (MongoDB) — Utilities and Exercises

This directory contains a set of MongoDB exercises and helper utilities implemented using both the Mongo shell and Python (with PyMongo). It covers basic CRUD operations, simple aggregations, and log/statistics processing for an Nginx-style access log stored in MongoDB.

## Contents

- Mongo shell snippets (run inside the MongoDB shell or via redirect):
  - `0-list_databases` — list all databases
  - `1-use_or_create_database` — select (or create) `my_db`
  - `2-insert` — insert a document into `school`
  - `3-all` — list all documents in `school`
  - `4-match` — find documents in `school` where `name == "Holberton school"`
  - `5-count` — count documents in `school`
  - `6-update` — add/update an `address` field for matching documents
  - `7-delete` — delete documents by `name`
  - `100-find` — find documents where `name` starts with "Holberton" (case-insensitive)

- Python modules (functions/CLI using PyMongo):
  - `8-all.py` — `list_all(mongo_collection)`
  - `9-insert_school.py` — `insert_school(mongo_collection, **kwargs)`
  - `10-update_topics.py` — `update_topics(mongo_collection, name, topics)`
  - `11-schools_by_topic.py` — `schools_by_topic(mongo_collection, topic)`
  - `12-log_stats.py` — print request method counts and status checks
  - `101-students.py` — `top_students(mongo_collection)` aggregation by average score
  - `102-log_stats.py` — like `12-log_stats.py` plus top 10 IPs

## Prerequisites

- MongoDB installed and running locally
  - Default connection used by Python scripts: `mongodb://127.0.0.1:27017`
  - Start MongoDB (example Homebrew on macOS): `brew services start mongodb-community`
- Mongo shell available (e.g., `mongo` or `mongosh`)
  - Note: These snippets use classic Mongo shell syntax (e.g., `db.collection.find()` and `count()`). With `mongosh`, the behavior is compatible for these examples, though some APIs like `count()` are deprecated in favor of `countDocuments()`.
- Python 3.8+
- PyMongo: `pip install pymongo`

## Running the Mongo shell snippets

You can execute each file in the shell in two primary ways:

1) Start the shell and paste or `load()` the file:

- Using legacy `mongo` shell:
  - `mongo` (then inside the shell): `load("/absolute/path/to/2-insert")`
- Using `mongosh`:
  - `mongosh` (then inside): `load('/absolute/path/to/2-insert')`

2) Redirect the file into the shell directly from your terminal:

- `mongo < 0-list_databases`
- `mongosh < 2-insert`

Some commands refer to the `my_db` database and the `school` collection. Ensure you have selected/created the database as shown in `1-use_or_create_database`.

Notes on individual shell files:
- `6-update` uses `$set` with the `multi: true` option (legacy shell update behavior) to update all matching documents.
- `7-delete` uses `deleteMany` to remove all matches.
- `100-find` demonstrates a case-insensitive regex anchored at the start of the `name` field.

## Python utilities and examples

All Python modules expect an existing `MongoClient` and the specific collection passed in.

### 8-all.py — list_all
Function: `list_all(mongo_collection)`
- Returns all documents in the provided collection as a Python list. Returns an empty list if none exist.

Example:
```
from pymongo import MongoClient
from 8-all import list_all

client = MongoClient('mongodb://127.0.0.1:27017')
col = client.my_db.school

for doc in list_all(col):
    print(doc)
```

### 9-insert_school.py — insert_school
Function: `insert_school(mongo_collection, **kwargs)`
- Inserts a document composed from the provided keyword arguments.
- Returns the inserted document’s `_id`.

Example:
```
from pymongo import MongoClient
from 9-insert_school import insert_school

client = MongoClient('mongodb://127.0.0.1:27017')
col = client.my_db.school

new_id = insert_school(col, name='Holberton school', topics=['NoSQL', 'Python'])
print('Inserted:', new_id)
```

### 10-update_topics.py — update_topics
Function: `update_topics(mongo_collection, name, topics)`
- Replaces the `topics` array on all documents with the given `name`.

Example:
```
from pymongo import MongoClient
from 10-update_topics import update_topics

client = MongoClient('mongodb://127.0.0.1:27017')
col = client.my_db.school

update_topics(col, 'Holberton school', ['C', 'Python', 'Databases'])
```

### 11-schools_by_topic.py — schools_by_topic
Function: `schools_by_topic(mongo_collection, topic)`
- Returns a list of schools that contain the given `topic` in their `topics` array.

Example:
```
from pymongo import MongoClient
from 11-schools_by_topic import schools_by_topic

client = MongoClient('mongodb://127.0.0.1:27017')
col = client.my_db.school

for s in schools_by_topic(col, 'Python'):
    print(s)
```

### 12-log_stats.py — log stats
Script entry point prints:
- Total number of logs
- Per-method counts for: GET, POST, PUT, PATCH, DELETE
- Number of status checks (GET /status)

Assumptions:
- Database: `logs`
- Collection: `nginx`
- Document shape (typical): `{ method: 'GET'|'POST'|..., path: '/status'|'/path', ip: '1.2.3.4', ... }`

Run:
```
python3 12-log_stats.py
```

### 101-students.py — top_students
Function: `top_students(mongo_collection)`
- Aggregates and returns students sorted by `averageScore` descending.
- Expects documents like:
  - `{ name: 'John', topics: [{ title: 'Algo', score: 80 }, { title: 'DB', score: 90 }] }`
- Output documents include a computed `averageScore` field.

Example:
```
from pymongo import MongoClient
from 101-students import top_students

client = MongoClient('mongodb://127.0.0.1:27017')
col = client.my_db.students

for s in top_students(col):
    print(s['name'], s['averageScore'])
```

### 102-log_stats.py — log stats with top IPs
Extends `12-log_stats.py` by printing the top 10 IPs with the highest request counts.

Run:
```
python3 102-log_stats.py
```

## Tips and caveats

- Connection URI: All Python scripts default to `mongodb://127.0.0.1:27017`. Adjust if your MongoDB instance differs.
- Indexes: For better performance on log stats, consider indexes like `{ method: 1 }`, `{ path: 1 }`, and `{ ip: 1 }` on `logs.nginx`.
- Shell API versions: Some shell methods in these exercise files (e.g., `count()`) are deprecated in newer MongoDB drivers; they remain valid in the classic shell and are acceptable for this learning context. Prefer `countDocuments()` in production code.
- Data safety: The examples modify and delete data. Run them against a development database.

## Project structure

- Root of this directory contains all exercises; file names are self-descriptive.
- No external configuration files are required.

## License

This repository is for educational purposes. If a specific license applies to your project, add it here.
