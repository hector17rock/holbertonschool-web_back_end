# Python Async Comprehension

[![Python Version](https://img.shields.io/badge/python-3.7%2B-blue.svg)](https://www.python.org/downloads/)
[![Code Style](https://img.shields.io/badge/code%20style-PEP8-green.svg)](https://www.python.org/dev/peps/pep-0008/)

This project explores advanced Python asynchronous programming concepts, specifically focusing on async generators, async comprehensions, and parallel execution with asyncio. The exercises demonstrate how to efficiently handle concurrent operations while measuring performance.

## 🎯 Learning Objectives

- Understanding async generators and their implementation
- Working with async comprehensions for collecting asynchronous data
- Measuring execution time of parallel asynchronous operations
- Utilizing `asyncio.gather()` for concurrent task execution
- Applying proper type hints for async functions

## 📁 Project Structure

```
python_async_comprehension/
├── 0-async_generator.py      # Async generator implementation
├── 1-async_comprehension.py  # Async comprehension usage
├── 2-measure_runtime.py      # Runtime measurement for parallel execution
├── 0-main.py                 # Test file for async generator
├── 1-main.py                 # Test file for async comprehension
├── 2-main.py                 # Test file for runtime measurement
└── README.md                 # This documentation
```

## 📋 File Descriptions

### 0-async_generator.py
**Purpose**: Implements an asynchronous generator that yields random numbers.

**Key Features**:
- Async generator function that loops 10 times
- Waits 1 second asynchronously between yields using `asyncio.sleep(1)`
- Yields random float numbers between 0 and 10
- Uses proper type hints with `Generator[float, None, None]`

**Usage**:
```python
async for number in async_generator():
    print(number)  # Prints 10 random numbers with 1-second delays
```

### 1-async_comprehension.py
**Purpose**: Demonstrates async comprehensions by collecting values from an async generator.

**Key Features**:
- Imports and uses `async_generator` from the previous module
- Implements async comprehension syntax: `[i async for i in async_generator()]`
- Collects all 10 random numbers into a list
- Returns `List[float]` with proper type annotations

**Usage**:
```python
result = await async_comprehension()
print(result)  # List of 10 random numbers
```

### 2-measure_runtime.py
**Purpose**: Measures execution time of parallel async comprehensions.

**Key Features**:
- Executes `async_comprehension()` four times in parallel
- Uses `asyncio.gather()` with task unpacking for concurrent execution
- Measures total runtime using `time.time()`
- Demonstrates that parallel execution takes ~10 seconds (not 40 seconds)

**Usage**:
```python
runtime = await measure_runtime()
print(f"Total time: {runtime} seconds")  # ~10 seconds
```

## 🚀 Running the Examples

### Prerequisites
- Python 3.7 or higher
- asyncio library (included in standard library)

### Execution

```bash
# Test async generator
python3 0-main.py

# Test async comprehension
python3 1-main.py

# Test parallel execution and runtime measurement
python3 2-main.py
```

## 🧪 Example Outputs

### Async Generator Output
```
[4.403136952967102, 6.9092712604587465, 6.293445466782645, ...]
```

### Async Comprehension Output
```
[9.861842105071727, 8.572355293354995, 1.7467182056248265, ...]
```

### Runtime Measurement Output
```
10.021936893463135
```

## 💡 Key Concepts Explained

### Why Runtime is ~10 Seconds (Not 40)
When running four `async_comprehension()` functions in parallel:
- Each comprehension takes ~10 seconds (10 iterations × 1 second sleep)
- **Sequential execution** would take: 4 × 10 = 40 seconds
- **Parallel execution** with `asyncio.gather()` takes: ~10 seconds
- This demonstrates the power of asynchronous programming for I/O-bound operations

### Async Comprehensions vs Regular Comprehensions
```python
# Regular comprehension (synchronous)
result = [func(x) for x in iterable]

# Async comprehension (asynchronous)
result = [x async for x in async_iterable]
```

### Type Hints for Async Functions
```python
from typing import AsyncGenerator, List

# Async generator type hint
async def async_gen() -> AsyncGenerator[float, None]:
    yield 1.0

# Async function returning a list
async def async_func() -> List[float]:
    return [1.0, 2.0, 3.0]
```

## 🛠️ Technical Implementation

### Imports Used
```python
from asyncio import sleep, gather
from random import uniform
from time import time
from typing import AsyncGenerator, Generator, List
```

### Code Style
- Follows PEP 8 style guidelines
- Includes comprehensive docstrings
- Uses proper type hints for better code documentation
- Passes `pycodestyle` validation

## 🎓 Learning Resources

- [Python asyncio Documentation](https://docs.python.org/3/library/asyncio.html)
- [PEP 530 - Asynchronous Comprehensions](https://www.python.org/dev/peps/pep-0530/)
- [PEP 525 - Asynchronous Generators](https://www.python.org/dev/peps/pep-0525/)
- [Real Python - Async IO in Python](https://realpython.com/async-io-python/)

## 👨‍💻 Author

**Hector**  
*Software Developer*

---

*This project is part of the Holberton School Web Back-End curriculum, focusing on advanced Python asynchronous programming concepts.*
