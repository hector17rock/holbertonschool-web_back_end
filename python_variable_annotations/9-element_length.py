#!/usr/bin/env python3
"""Module that defines a function to return elements with their lengths."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Returns a list of tuples containing each element and its length.

    Args:
        lst (Iterable[Sequence]): An iterable of sequences (like list, str,
        etc.).

    Returns:
        List[Tuple[Sequence, int]]: A list of tuples with each element and
        its length.
    """
    return [(i, len(i)) for i in lst]
