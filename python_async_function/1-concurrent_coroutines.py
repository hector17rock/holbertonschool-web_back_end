#!/usr/bin/env python3
"""
Module that defines wait_n function to execute multiple coroutines
concurrently.
"""

import asyncio
from typing import List
from importlib import import_module

# Import wait_random from the previous file
wait_random = import_module('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn wait_random n times with the specified max_delay.

    Args:
        n (int): Number of times to spawn wait_random
        max_delay (int): Maximum delay for each wait_random call

    Returns:
        List[float]: List of all delays in ascending order
    """
    # Create n coroutines
    coroutines = [wait_random(max_delay) for _ in range(n)]

    # Execute all coroutines concurrently and collect results
    delays = []
    for coroutine in asyncio.as_completed(coroutines):
        delay = await coroutine
        delays.append(delay)

    return delays
