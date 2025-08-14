#!/usr/bin/env python3
"""
Module that provides a function to return students sorted by average score
"""


def top_students(mongo_collection):
    """
    Returns all students sorted by average score
    Args:
        mongo_collection: pymongo collection object
    Returns:
        List of students sorted by averageScore in descending order
        Each student document includes an averageScore field
    """
    pipeline = [
        {
            "$project": {
                "name": 1,
                "topics": 1,
                "averageScore": {
                    "$avg": "$topics.score"
                }
            }
        },
        {
            "$sort": {
                "averageScore": -1
            }
        }
    ]
    
    return list(mongo_collection.aggregate(pipeline))
