# 🐍 Python Variable Annotations

## 📋 Overview

This directory contains various Python scripts demonstrating the use of type annotations with different functionalities. It provides a comprehensive introduction to Python typing, showcasing how to use type hints to indicate the expected data types of variables, function parameters, and return types.

## 👨‍💻 Author

- **Héctor**: Main contributor and author of all scripts in this directory

## 📚 Table of Contents

- [Scripts Overview](#scripts-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Type Annotations Concepts](#type-annotations-concepts)
- [Testing](#testing)
- [Code Style](#code-style)
- [Contributing](#contributing)

## 📝 Scripts Overview

### 0. ➕ Basic Addition Function
- **File**: `0-add.py`
- **Description**: Type-annotated function that adds two floating-point numbers
- **Function**: `add(a: float, b: float) -> float`
- **Purpose**: Demonstrates basic function type annotations
- **Example**:
  ```python
  add(1.11, 2.22)  # Returns: 3.33
  ```

### 1. 🔗 String Concatenation
- **File**: `1-concat.py`
- **Description**: Type-annotated function that concatenates two strings
- **Function**: `concat(str1: str, str2: str) -> str`
- **Purpose**: Shows string type annotations
- **Example**:
  ```python
  concat("egg", "shell")  # Returns: "eggshell"
  ```

### 2. 📊 Floor Function
- **File**: `2-floor.py`
- **Description**: Type-annotated function that returns the floor of a float
- **Function**: `floor(n: float) -> int`
- **Purpose**: Demonstrates float to int conversion with type annotations
- **Example**:
  ```python
  floor(3.14)  # Returns: 3
  ```

### 3. 🔤 Float to String Conversion
- **File**: `3-to_str.py`
- **Description**: Type-annotated function that converts float to string
- **Function**: `to_str(n: float) -> str`
- **Purpose**: Shows type conversion annotations
- **Example**:
  ```python
  to_str(3.14)  # Returns: "3.14"
  ```

### 4. 🏷️ Variable Definitions and Annotations
- **File**: `4-define_variables.py`
- **Description**: Defines and annotates variables with specific types and values
- **Variables**:
  - `a: int = 1`
  - `pi: float = 3.14`
  - `i_understand_annotations: bool = True`
  - `school: str = "Holberton"`
- **Purpose**: Demonstrates variable type annotations

### 5. 📋 Sum List of Floats
- **File**: `5-sum_list.py`
- **Description**: Type-annotated function that sums a list of floats
- **Function**: `sum_list(input_list: List[float]) -> float`
- **Purpose**: Introduces generic types with `List[float]`
- **Example**:
  ```python
  sum_list([3.14, 1.11, 2.22])  # Returns: 6.47
  ```

### 6. 🔢 Sum Mixed List
- **File**: `6-sum_mixed_list.py`
- **Description**: Type-annotated function that sums a list of integers and floats
- **Function**: `sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float`
- **Purpose**: Demonstrates `Union` types for multiple type options
- **Example**:
  ```python
  sum_mixed_list([5, 4, 3.14, 2, 0.11])  # Returns: 14.25
  ```

### 7. 🔑 String and Number to Tuple
- **File**: `7-to_kv.py`
- **Description**: Type-annotated function that creates a key-value tuple
- **Function**: `to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]`
- **Purpose**: Shows `Tuple` type annotations with mixed types
- **Example**:
  ```python
  to_kv("elevation", 2)  # Returns: ("elevation", 4.0)
  ```

### 8. ⚡ Higher-Order Function - Make Multiplier
- **File**: `8-make_multiplier.py`
- **Description**: Type-annotated function that returns a multiplier function
- **Function**: `make_multiplier(multiplier: float) -> Callable[[float], float]`
- **Purpose**: Demonstrates `Callable` type annotations for higher-order functions
- **Example**:
  ```python
  doubler = make_multiplier(2.0)
  doubler(5.0)  # Returns: 10.0
  ```

### 9. 📏 Element Length Analysis
- **File**: `9-element_length.py`
- **Description**: Type-annotated function that returns elements with their lengths
- **Function**: `element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]`
- **Purpose**: Shows complex generic types with `Iterable`, `Sequence`, and nested generics
- **Example**:
  ```python
  element_length(["hello", "world"])  # Returns: [("hello", 5), ("world", 5)]
  ```

## 📦 Installation

1. Ensure you have Python 3.7+ installed
2. Clone or download this directory
3. No additional dependencies required (uses only Python standard library)

## 🚀 Usage

### 🏃‍♂️ Running Individual Scripts

```bash
python3 0-add.py
python3 1-concat.py
# ... and so on
```

### 📝 Interactive Testing

```python
# Import any module for testing
from importlib import import_module
module = import_module('0-add')
result = module.add(1.5, 2.5)
print(result)  # 4.0
```

### 🔍 Type Checking with mypy (Optional)

```bash
# Install mypy
pip install mypy

# Check type annotations
mypy 0-add.py
mypy 5-sum_list.py
# etc.
```

## 📚 Type Annotations Concepts

### 🔢 Basic Types
- `int`: Integer numbers
- `float`: Floating-point numbers
- `str`: String values
- `bool`: Boolean values

### 🔧 Generic Types (from `typing` module)
- `List[T]`: List containing elements of type T
- `Tuple[T, U]`: Tuple with specific types for each position
- `Union[T, U]`: Either type T or type U
- `Callable[[T], U]`: Function that takes T and returns U
- `Iterable[T]`: Any iterable containing elements of type T
- `Sequence[T]`: Any sequence (list, tuple, string, etc.) of type T

### 🎆 Benefits
1. **Code Documentation**: Type hints serve as documentation
2. **IDE Support**: Better autocomplete and error detection
3. **Static Analysis**: Tools like mypy can catch type errors
4. **Code Clarity**: Makes function interfaces more explicit

## 🧪 Testing

### 👤 Manual Testing
Each script can be tested individually by importing and calling the functions:

```python
from 0_add import add
print(add(1.0, 2.0))  # Expected: 3.0
```

### 🤖 Automated Testing
Create test files to verify functionality:

```python
# test_scripts.py
import unittest
from importlib import import_module

class TestAnnotations(unittest.TestCase):
    def test_add_function(self):
        module = import_module('0-add')
        self.assertEqual(module.add(1.0, 2.0), 3.0)
    
    def test_concat_function(self):
        module = import_module('1-concat')
        self.assertEqual(module.concat("hello", "world"), "helloworld")

if __name__ == '__main__':
    unittest.main()
```

## 🎨 Code Style

All scripts follow:
- **PEP 8**: Python style guide compliance
- **pycodestyle**: Verified with pycodestyle checker
- **Documentation**: Comprehensive docstrings for modules and functions
- **Type Annotations**: Full type coverage for better code clarity

### ✅ Style Verification

```bash
# Check code style
pycodestyle *.py

# Check type annotations
mypy *.py
```

## ✨ Key Features

✅ **Comprehensive Type Coverage**: All functions and variables properly annotated  
✅ **PEP 8 Compliant**: Follows Python style guidelines  
✅ **Well Documented**: Clear docstrings and comments  
✅ **Educational**: Progressive complexity from basic to advanced concepts  
✅ **Production Ready**: Clean, maintainable code  

## 🎯 Learning Path

1. **🌟 Start with**: `0-add.py`, `1-concat.py` - Basic type annotations
2. **📈 Progress to**: `4-define_variables.py` - Variable annotations
3. **🚀 Advance to**: `5-sum_list.py`, `6-sum_mixed_list.py` - Generic types
4. **🏆 Master**: `8-make_multiplier.py`, `9-element_length.py` - Complex types

## 🤝 Contributing

When contributing to this project:
1. Maintain type annotation consistency
2. Follow PEP 8 style guidelines
3. Include comprehensive docstrings
4. Test all functions thoroughly
5. Update this README if adding new scripts

## 📖 References

- [PEP 484 - Type Hints](https://www.python.org/dev/peps/pep-0484/)
- [Python typing module documentation](https://docs.python.org/3/library/typing.html)
- [mypy - Static Type Checker](https://mypy.readthedocs.io/)
- [PEP 8 - Style Guide](https://www.python.org/dev/peps/pep-0008/)

---

**Note**: This project is part of the Holberton School Web Back-End curriculum, focusing on Python variable annotations and type hints.
