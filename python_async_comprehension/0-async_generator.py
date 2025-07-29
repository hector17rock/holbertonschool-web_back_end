#!/usr/bin/env python3
"""
Module that defines an async generator coroutine.
"""

import asyncio
import random


async def async_generator():
    """
    Async generator that yields random numbers between 0 and 10.
    
    Loops 10 times, waiting 1 second each time before yielding
    a random float between 0 and 10.
    
    Yields:
        float: Random number between 0 and 10
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
