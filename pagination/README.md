# Pagination Project

## Overview

This project implements various pagination techniques in Python to handle large datasets efficiently. The project demonstrates different approaches to pagination, from simple offset-based pagination to more advanced hypermedia and deletion-resilient pagination methods.

## Dataset

The project uses the `Popular_Baby_Names.csv` dataset containing popular baby names data with the following structure:
- **Year of Birth**: The year when the baby was born
- **Gender**: The gender of the child (MALE/FEMALE)
- **Ethnicity**: The ethnicity category
- **Child's First Name**: The first name of the child
- **Count**: The number of occurrences of that name
- **Rank**: The popularity rank of that name

## Project Structure

```
pagination/
├── README.md                           # This file
├── Popular_Baby_Names.csv             # Dataset file
├── 0-simple_helper_function.py        # Basic pagination helper
├── 1-simple_pagination.py             # Simple pagination implementation
├── 2-hypermedia_pagination.py         # Hypermedia pagination
├── 3-hypermedia_del_pagination.py     # Deletion-resilient pagination
├── 0-main.py                          # Test file for task 0
├── 1-main.py                          # Test file for task 1
├── 2-main.py                          # Test file for task 2
├── 3-main.py                          # Test file for task 3
└── __pycache__/                       # Python cache directory
```

## Tasks and Implementation

### Task 0: Simple Helper Function
**File:** `0-simple_helper_function.py`

Implements a helper function `index_range(page, page_size)` that calculates the start and end indices for pagination.

**Function:**
- `index_range(page, page_size)` → `tuple`
  - Returns a tuple containing start and end indices
  - Uses 1-based page numbering
  - Example: `index_range(1, 7)` returns `(0, 7)`

### Task 1: Simple Pagination
**File:** `1-simple_pagination.py`

Implements a `Server` class with basic pagination functionality.

**Features:**
- Loads and caches the CSV dataset
- Implements `get_page(page, page_size)` method
- Input validation for page and page_size parameters
- Returns empty list for out-of-range pages

**Methods:**
- `dataset()` → `List[List]`: Returns cached dataset (excluding header)
- `get_page(page=1, page_size=10)` → `List[List]`: Returns paginated data

### Task 2: Hypermedia Pagination
**File:** `2-hypermedia_pagination.py`

Extends the simple pagination with hypermedia metadata following REST API best practices.

**Additional Features:**
- Includes pagination metadata in response
- Provides navigation information (next/previous page)
- Calculates total pages

**Methods:**
- `get_hyper(page=1, page_size=10)` → `Dict[str, Any]`: Returns data with metadata

**Response Format:**
```python
{
    'page_size': 10,        # Number of items in current page
    'page': 1,              # Current page number
    'data': [...],          # Actual data items
    'next_page': 2,         # Next page number (or None)
    'prev_page': None,      # Previous page number (or None)
    'total_pages': 15       # Total number of pages
}
```

### Task 3: Deletion-Resilient Hypermedia Pagination
**File:** `3-hypermedia_del_pagination.py`

Implements pagination that remains consistent even when items are deleted from the dataset.

**Features:**
- Uses indexed dataset approach
- Maintains pagination consistency during deletions
- Skips deleted items automatically

**Methods:**
- `indexed_dataset()` → `Dict[int, List]`: Returns indexed dataset
- `get_hyper_index(index=None, page_size=10)` → `Dict`: Returns deletion-resilient page

**Response Format:**
```python
{
    'index': 3,             # Current start index
    'data': [...],          # Data items
    'page_size': 10,        # Requested page size
    'next_index': 13        # Next index to continue from
}
```

## Usage Examples

### Basic Helper Function
```python
from 0_simple_helper_function import index_range

# Get indices for page 1, size 7
start, end = index_range(1, 7)
print(f"Indices: {start} to {end}")  # Output: Indices: 0 to 7
```

### Simple Pagination
```python
from 1_simple_pagination import Server

server = Server()

# Get first page with 3 items
page_data = server.get_page(1, 3)
print(f"Page 1: {len(page_data)} items")

# Handle out of range
page_data = server.get_page(3000, 100)
print(f"Out of range: {page_data}")  # Output: []
```

### Hypermedia Pagination
```python
from 2_hypermedia_pagination import Server

server = Server()

# Get hypermedia response
response = server.get_hyper(1, 2)
print(f"Current page: {response['page']}")
print(f"Next page: {response['next_page']}")
print(f"Total pages: {response['total_pages']}")
```

### Deletion-Resilient Pagination
```python
from 3_hypermedia_del_pagination import Server

server = Server()

# Get page starting from index 3
response = server.get_hyper_index(3, 2)
print(f"Starting index: {response['index']}")
print(f"Next index: {response['next_index']}")

# Even if items are deleted, pagination remains consistent
```

## Running Tests

Each task includes a main file for testing:

```bash
# Test basic helper function
python3 0-main.py

# Test simple pagination
python3 1-main.py

# Test hypermedia pagination
python3 2-main.py

# Test deletion-resilient pagination
python3 3-main.py
```

## Key Concepts

### Pagination Benefits
- **Performance**: Reduces memory usage and response time
- **User Experience**: Manageable chunks of data
- **Network Efficiency**: Smaller payload sizes
- **Scalability**: Handles large datasets effectively

### Pagination Strategies
1. **Offset-based**: Uses page number and size (Tasks 1-2)
2. **Cursor-based**: Uses index positions (Task 3)
3. **Hypermedia**: Includes navigation metadata (Tasks 2-3)

### Error Handling
- Input validation for page and page_size parameters
- Graceful handling of out-of-range requests
- Assertion errors for invalid inputs

## Technical Requirements

- **Python Version**: Python 3.7+
- **Dependencies**: Standard library only (csv, math, typing)
- **Code Style**: PEP 8 compliant
- **Type Hints**: Full type annotation support

## Best Practices Implemented

1. **Caching**: Dataset is loaded once and cached
2. **Input Validation**: Comprehensive parameter checking
3. **Type Safety**: Full type hints for better code quality
4. **Error Handling**: Proper exception handling and assertions
5. **Documentation**: Comprehensive docstrings for all methods
6. **Consistency**: Standardized response formats

## Learning Objectives

After completing this project, you will understand:
- How to paginate a dataset with simple page and page_size parameters
- How to paginate a dataset with hypermedia metadata
- How to paginate in a deletion-resilient manner
- Different pagination strategies and their use cases
- REST API pagination best practices

---

## Author

**Héctor Soto**  
GitHub: [@hector17rock](https://github.com/hector17rock)

---

**Project Type**: Backend Web Development  
**Topic**: Pagination  
**Language**: Python  
**Framework**: None (Pure Python)
