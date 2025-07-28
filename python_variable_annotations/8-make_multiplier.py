#!/usr/bin/env python3
"""Module that defines a function returning a multiplier function."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies a float by the given multiplier.

    Args:
        multiplier (float): The value to multiply by.

    Returns:
        Callable[[float], float]: A function that takes a float and returns
        a float.
    """
    def multiply(n: float) -> float:
        """Multiply the input by the captured multiplier."""
        return n * multiplier

    return multiply
