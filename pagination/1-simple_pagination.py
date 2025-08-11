#!/usr/bin/env python3
"""
Simple pagination
"""

import csv
import math
from typing import List


def index_range(page, page_size):
    """
    Return a tuple of size two containing a start index and an end index
    corresponding to the range of indexes to return in a list for those
    particular pagination parameters.

    Args:
        page (int): The page number (1-indexed)
        page_size (int): The number of items per page

    Returns:
        tuple: A tuple containing (start_index, end_index)
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Return a page of the dataset.

        Args:
            page (int): The page number (1-indexed, default 1)
            page_size (int): The number of items per page (default 10)

        Returns:
            List[List]: A list of rows for the requested page

        Raises:
            AssertionError: If page or page_size are not positive integers
        """
        assert isinstance(page, int) and page > 0, \
            "page must be a positive integer"
        assert isinstance(page_size, int) and page_size > 0, \
            "page_size must be a positive integer"

        dataset = self.dataset()
        start_index, end_index = index_range(page, page_size)

        # Check if the start index is beyond the dataset
        if start_index >= len(dataset):
            return []

        # Return the appropriate slice of the dataset
        return dataset[start_index:end_index]
