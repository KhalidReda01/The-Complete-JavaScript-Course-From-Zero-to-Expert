# lecture 4 the Javascript Engine and Runtime

![004 The JavaScript E[00_00_35][20241109-134801]](004 The JavaScript E[00_00_35][20241109-134801].png)

![004 The JavaScript E[00_13_40][20241109-140911]](004 The JavaScript E[00_13_40][20241109-140911].png)![004 The JavaScript E[00_01_55][20241109-134921]](004 The JavaScript E[00_01_55][20241109-134921].png)

![004 The JavaScript E[00_04_52][20241109-135218]](004 The JavaScript Engine and Runtime\004 The JavaScript E[00_04_52][20241109-135218].png)

![004 The JavaScript E[00_05_01][20241109-135233]](C:\Users\Workstation\Desktop\js\08-Behind-the-Scenes\Lectures Notes\004 The JavaScript Engine and Runtime\004 The JavaScript E[00_05_01][20241109-135233].png)

![004 The JavaScript E[00_06_32][20241109-135405]](004 The JavaScript E[00_06_32][20241109-135405].png)

![004 The JavaScript E[00_08_37][20241109-135610]](004 The JavaScript E[00_08_37][20241109-135610].png)

![004 The JavaScript E[00_08_40][20241109-135613]](004 The JavaScript E[00_08_40][20241109-135613].png)

- **JavaScript Engine**: A computer program that executes **JavaScript** code.

  - Involves multiple steps to execute the code.

  - Every browser has its own JavaScript engine.

  - Most well-known engine:

     

    Google’s V8

    .

    - Powers **Google Chrome** and **Node.js** (JavaScript runtime for server-side applications).

- **JavaScript Runtime**:

  - Enables execution of JavaScript code outside of a web browser.

- **JavaScript Engines by Browser**:

  - Each browser has a distinct engine; specific engines can be researched online.

- **Components of a JavaScript Engine**:

  - Call Stack

    :

    - Responsible for executing code using **execution contexts**.

  - Heap

    :

    - An unstructured memory pool that stores all necessary objects for the application.

- **Execution Overview**:

  - The engine answers where code execution occurs (in the call stack).

- **Compilation to Machine Code**:

  - The process of transforming JavaScript code into machine code for execution.

- **Execution Contexts**:

  - A critical concept in understanding how the call stack operates.

- **Memory Management**:

  - The heap serves as a storage area for application objects, enabling dynamic memory allocation.

- **Next Steps**:

  - Understanding how JavaScript code is compiled to machine code is essential for grasping the execution process in detail.

- **Difference between Compilation and Interpretation**
  - **Computer Processor**: Understands only **zeros and ones**.
  - **Machine Code**: Every computer program must be converted into machine code.
- **Compilation**:
  - Entire **source code** is converted into **machine code** at once.
  - The resultant machine code is written into a **portable file**.
  - This file can be executed on any computer.
  - Process involves two steps:
    1. **Machine code is built**.
    2. **Execution in the CPU** occurs later.
  - Example: Applications currently in use on a computer have been compiled prior to execution.
- **Interpretation**:
  - An **interpreter** runs through the source code and executes it **line by line**.
  - Process does not involve separate compilation and execution steps; instead, the code is read and executed simultaneously.
  - Source code must still be converted into machine code, but this conversion occurs **right before execution**, not ahead of time.
- **JavaScript**:
  - Initially, JavaScript was a purely **interpreted language**.
  - **Performance Issue**: Interpreted languages are significantly slower than compiled languages.
  - This slowness was acceptable in early JavaScript, but modern applications require higher performance.
  - Examples of modern applications include **fully-fledged web applications** that demand efficient performance, such as Google Maps.
- **Key Concepts**:
  - **Compilation**: Converts entire source code to machine code before execution.
  - **Interpretation**: Executes code line by line during the reading process.
  - **Machine Code**: The binary representation that the processor understands.
  - **Performance**: Compiled languages generally offer superior performance compared to interpreted languages.



Here's a detailed recap of the key points for studying later:

Compilation vs Interpretation:

1. Computer Processor Basics

- Processor only understands zeros and ones
- Every computer program must be converted to machine code

1. Compilation

- Entire source code converted to machine code at once
- Creates a portable executable file
- Two-step process: a) Machine code is built b) Code is executed in CPU
- Can be executed long after compilation

1. Interpretation

- Interpreter runs through source code line by line
- Code is read and executed simultaneously
- Slower performance compared to compilation

1. JavaScript's Evolution

- Originally purely interpreted language
- Performance became a problem with complex web applications
- Modern JavaScript uses just-in-time compilation

JavaScript Engine Process:

1. Parsing

- First step when code enters the engine
- Reads and converts code into Abstract Syntax Tree (AST)
- Splits code into meaningful language pieces
- Checks for syntax errors

1. Compilation

- Converts AST into machine code
- Immediate execution (just-in-time compilation)

1. Optimization Strategies

- Creates unoptimized machine code initially
- Continuously optimizes code in background
- Replaces unoptimized code without stopping execution
- Happens in separate threads

JavaScript Runtime:

1. Components

- JavaScript Engine (core)
- Web APIs
- Callback Queue
- Event Loop

1. Web APIs

- Functionalities provided to engine
- Not part of JavaScript language
- Accessed through global window object

1. Callback Queue

- Stores callback functions ready for execution
- Example: Event handler functions

1. Event Loop

- Moves callbacks from queue to call stack
- Enables non-blocking concurrency

Runtimes Comparison:

- Browser Runtime: Includes web APIs
- Node.js Runtime: Uses C++ bindings and thread pool

Practical Takeaways:

- JavaScript is not just an interpreted language
- Modern engines are highly optimized
- Understanding runtime helps write more efficient code

This structured recap covers the main points of the lecture, providing a comprehensive overview for later study.