#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Return a page of the dataset that is deletion-resilient.

        Args:
            index: the current start index of the return page
            page_size: the current page size

        Returns:
            Dictionary with index, next_index, page_size, and data
        """
        indexed_data = self.indexed_dataset()

        # Verify that index is in a valid range
        max_index = max(indexed_data.keys()) if indexed_data else 0
        assert index is None or (
            isinstance(index, int) and 0 <= index <= max_index)

        # Set default index if None
        if index is None:
            index = 0

        # Collect data for the current page
        data = []
        current_index = index

        # Find page_size items starting from index, skipping deleted items
        max_key = max(indexed_data.keys()) + 1
        while len(data) < page_size and current_index < max_key:
            if current_index in indexed_data:
                data.append(indexed_data[current_index])
            current_index += 1

        # Calculate next_index - should be next available index after page
        next_index = current_index

        return {
            'index': index,
            'data': data,
            'page_size': page_size,
            'next_index': next_index
        }
