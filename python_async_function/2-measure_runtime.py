#!/usr/bin/env python3
"""
Module that defines measure_time function to measure execution time of wait_n.
"""

import asyncio
import time
from importlib import import_module

# Import wait_n from the previous file
wait_n = import_module('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the total execution time for wait_n(n, max_delay).

    Args:
        n (int): Number of coroutines to spawn
        max_delay (int): Maximum delay for each coroutine

    Returns:
        float: Average time per coroutine (total_time / n)
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()

    total_time = end_time - start_time
    return total_time / n
