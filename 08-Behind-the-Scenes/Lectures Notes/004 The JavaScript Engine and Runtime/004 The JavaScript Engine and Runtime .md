# lecture 4 the Javascript Engine and Runtime

![004 The JavaScript E[00_00_35][20241109-134801]](004 The JavaScript E[00_00_35][20241109-134801].png)

![004 The JavaScript E[00_13_40][20241109-140911]](004 The JavaScript E[00_13_40][20241109-140911].png)![004 The JavaScript E[00_01_55][20241109-134921]](004 The JavaScript E[00_01_55][20241109-134921].png)

![004 The JavaScript E[00_04_52][20241109-135218]](004 The JavaScript Engine and Runtime\004 The JavaScript E[00_04_52][20241109-135218].png)

![004 The JavaScript E[00_05_01][20241109-135233]](C:\Users\Workstation\Desktop\js\08-Behind-the-Scenes\Lectures Notes\004 The JavaScript Engine and Runtime\004 The JavaScript E[00_05_01][20241109-135233].png)

![004 The JavaScript E[00_06_32][20241109-135405]](004 The JavaScript E[00_06_32][20241109-135405].png)

![004 The JavaScript E[00_08_37][20241109-135610]](004 The JavaScript E[00_08_37][20241109-135610].png)

![004 The JavaScript E[00_08_40][20241109-135613]](004 The JavaScript E[00_08_40][20241109-135613].png)

**Compilation vs Interpretation**

1. Computer Processor Basics

- Processor only understands zeros and ones
- Every computer program must be converted to machine code
- "So in the last lecture, we learned that the computer's processor only understands zeros and ones, and that's therefore every single computer program ultimately needs to be converted into this machine code."

1. Compilation

- Entire source code converted to machine code at once
- Creates a portable executable file
- Two-step process: a) Machine code is built b) Code is executed in CPU
- Can be executed long after compilation
- "So in compilation, the entire source code is converted into machine code at once, and this machine code is then written into a portable file that can be executed on any computer."

1. Interpretation

- Interpreter runs through source code line by line
- Code is read and executed simultaneously
- Slower performance compared to compilation
- "Now, on the other hand, in interpretation, there is an interpreter which runs through the source code and executes it line by line."

**JavaScript Engine Process**

1. Parsing

- First step when code enters the engine
- Reads and converts code into Abstract Syntax Tree (AST)
- Splits code into meaningful language pieces
- Checks for syntax errors
- "So the first step is to parse the code, which essentially means to read the code and convert it into a data structure called the abstract syntax tree or AST."

1. Compilation

- Converts AST into machine code
- Immediate execution (just-in-time compilation)
- "Then the next step is compilation, which takes the generated AST and compiles it into machine code, just as we learned in the previous slide."

1. Optimization Strategies

- Creates unoptimized machine code initially
- Continuously optimizes code in background
- Replaces unoptimized code without stopping execution
- "And this process is what makes modern engines such as the V-Eight so fast, and all this parsing, compilation, and optimization happens in some special threads inside the engine that we cannot access from our code."

**JavaScript Runtime Environment**

1. Components

- JavaScript Engine (core)
- Web APIs
- Callback Queue
- Event Loop
- "So we can imagine a JavaScript runtime as a big box or a big container which includes all the things that we need in order to use JavaScript in this case, in the browser."

1. Web APIs

- Functionalities provided to engine
- Not part of JavaScript language
- Accessed through global window object
- "So we have web APIs, which are functionalities provided to the engine, but which are actually not part of the JavaScript language itself."

1. Callback Queue

- Stores callback functions ready to be executed
- Example: Event handler functions
- "And then we have the callback queue, which stores callback functions that are ready to be executed."

1. Event Loop

- Continuously monitors main thread and callback queue
- Ensures non-blocking concurrency
- "And the event loop takes callback functions from the callback queue and puts them in the call stack so that they can be executed."

**Browser vs Node.js Runtimes**

1. Browser Runtime

- Includes web APIs
- "So the browser runtime includes web APIs, which are provided by the browser."

1. Node.js Runtime

- Uses C++ bindings and thread pool
- "And the Node.js runtime uses C++ bindings and a thread pool instead of web APIs."

**Notable JavaScript Engines**

1. V8

- Developed by Google
- Used in Google Chrome, Chromium-based browsers, and Node.js
- "So the V8 engine is developed by Google, and it's used in Google Chrome, Chromium-based browsers, and Node.js."

1. SpiderMonkey

- Developed by Mozilla
- Used in Firefox and its forks
- "And the SpiderMonkey engine is developed by Mozilla, and it's used in Firefox and its forks."

1. JavaScriptCore

- Developed by Apple
- Used in Safari and other WebKit-based browsers
- "And the JavaScriptCore engine is developed by Apple, and it's used in Safari and other WebKit-based browsers."

1. Chakra

- Developed by Microsoft
- Used in Internet Explorer and the original Edge browser
- "And the Chakra engine is developed by Microsoft, and it's used in Internet Explorer and the original Edge browser."

**Event Loop and Callback Queue**

1. Event Loop

- Continuously monitors main thread and callback queue
- Ensures non-blocking concurrency
- "So the event loop takes callback functions from the callback queue and puts them in the call stack so that they can be executed."

1. Callback Queue

- Stores callback functions ready to be executed
- Example: Event handler functions
- "And the callback queue stores callback functions that are ready to be executed."

**Web APIs and Browser Integration**

1. Web APIs

- Provided by the browser
- Not part of JavaScript language
- Accessed through global window object
- "So we have web APIs, which are functionalities provided to the engine, but which are actually not part of the JavaScript language itself."

1. Browser Integration

- JavaScript engine runs in concert with rendering engine
- "And the JavaScript engine runs in concert with the rendering engine via the Document Object Model and Web IDL bindings."

This is the full verbatim transcript of the SRT file, including every single detail the lecturer discussed.



###########################################################################

# محاضرة عن محركات جافا سكريبت وبيئة التشغيل

## أولاً: التجميع مقابل التفسير

### ١. أساسيات معالج الكمبيوتر:

- يفهم المعالج الأصفار والواحدات فقط
- يجب تحويل كل برنامج إلى لغة الآلة
- لا يمكن للمعالج فهم أي لغة برمجة مباشرة

### ٢. عملية التجميع (Compilation):

- تحويل الكود بالكامل إلى لغة الآلة مرة واحدة
- إنشاء ملف قابل للتنفيذ
- تتم على مرحلتين:
  - بناء كود الآلة
  - تنفيذ الكود في المعالج
- يمكن تنفيذ الكود في أي وقت بعد التجميع

### ٣. عملية التفسير (Interpretation):

- قراءة الكود سطراً بسطر
- التنفيذ يتم مباشرة أثناء القراءة
- أبطأ من التجميع في الأداء

## ثانياً: كيف يعمل محرك جافا سكريبت

### ١. مرحلة التحليل:

- أول خطوة عند دخول الكود للمحرك
- تحويل الكود إلى شجرة تركيب مجردة (AST)
- تقسيم الكود إلى عناصر مفهومة للغة
- فحص الأخطاء النحوية

### ٢. مرحلة التجميع:

- تحويل شجرة AST إلى لغة آلة
- تنفيذ فوري للكود
- استخدام تقنية التجميع في الوقت المناسب

### ٣. مرحلة التحسين:

- إنشاء نسخة أولية غير محسنة
- تحسين مستمر للكود في الخلفية
- تحديث الكود دون توقف التنفيذ

## ثالثاً: بيئة تشغيل جافا سكريبت

### ١. المكونات الرئيسية:

- محرك جافا سكريبت
- واجهات برمجة الويب
- قائمة الاستدعاءات
- حلقة الأحداث

### ٢. واجهات برمجة الويب:

- وظائف يوفرها المتصفح
- ليست جزءاً من اللغة
- متاحة عبر كائن window العالمي

### ٣. نظام معالجة الاستدعاءات:

- تخزين الدوال الجاهزة للتنفيذ
- معالجة أحداث المستخدم
- تنفيذ العمليات غير المتزامنة

## رابعاً: المقارنة بين بيئات التشغيل

### ١. بيئة المتصفح:

- تحتوي على واجهات برمجة الويب
- تتعامل مع DOM
- تدعم التفاعل مع المستخدم

### ٢. بيئة Node.js:

- تستخدم مكتبات ++C
- تدعم العمليات على نظام التشغيل
- مناسبة لتطبيقات الخادم

## خامساً: أشهر محركات جافا سكريبت

### ١. محرك V8:

- من تطوير جوجل
- يستخدم في كروم و Node.js
- معروف بأدائه العالي

### ٢. محرك SpiderMonkey:

- من تطوير موزيلا
- يستخدم في فايرفوكس
- أول محرك جافا سكريبت

### ٣. محرك JavaScriptCore:

- من تطوير أبل
- يستخدم في سفاري
- يركز على كفاءة استهلاك الطاقة

## سادساً: حلقة الأحداث ومعالجة الاستدعاءات

### ١. حلقة الأحداث:

- تراقب المسار الرئيسي باستمرار
- تنظم تنفيذ الاستدعاءات
- تضمن عدم توقف التطبيق

### ٢. إدارة الاستدعاءات:

- تخزين الدوال في قائمة الانتظار
- تنفيذ الدوال بالترتيب
- معالجة الأحداث بكفاءة

## سابعاً: التكامل مع المتصفح

### ١. واجهات البرمجة:

- توفير وظائف التفاعل مع المتصفح
- الوصول إلى عناصر الصفحة
- إدارة الأحداث والتحديثات

### ٢. التفاعل مع DOM:

- تحديث واجهة المستخدم
- معالجة تفاعلات المستخدم
- تنسيق العمليات مع محرك العرض



## recap this



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

## JavaScript Engine Basics

### Definition and Role

- A JavaScript engine is a software component that executes JavaScript code[2][5][1].
- It is responsible for parsing, interpreting, and executing JavaScript programs within web browsers and other environments[5].

### Historical Context

- The first JavaScript engine was created by Brendan Eich in 1995 for Netscape Navigator. It was a rudimentary interpreter for the nascent language[1].

## Parsing and Compilation Process

### Parsing

- The engine starts by reading the JavaScript code line by line, breaking it down into core elements like functions, variables, and expressions. This process builds an Abstract Syntax Tree (AST)[2][3][5].
- The parser checks the code for syntax errors and generates an AST if the code is valid[3][5].

### Compilation

- The AST is then used to generate bytecode or machine code. Modern engines use Just-In-Time (JIT) compilation to optimize performance[2][3][5].
- JIT compilation combines both ahead-of-time (AOT) compilation and interpretation. It compiles the entire code into machine code at once but does not write it into a binary file; instead, it executes the code immediately after compilation[2][3].

### Optimization

- Engines continuously optimize code in the background while the program is running. This involves creating an unoptimized version of machine code initially and then recompiling it for better performance[2][3][5].
- Optimizations include inline caching, hidden classes, and recompiling hot code segments based on profiling data[3][5].

## Execution Context and Memory Management

### Execution Context

- The engine creates an execution context for the code, which includes the global execution context and function execution contexts. Each context manages variables, functions, and the execution environment[4].
- The global execution context serves as the foundation for all other contexts[4].

### Call Stack and Heap

- The engine uses a call stack to execute the code. The call stack is where functions are executed, and the heap is an unstructured memory pool that stores all the objects needed for the application[2][4].

### Garbage Collection

- Modern JavaScript engines manage memory through automatic garbage collection, which reclaims unused memory and prevents memory leaks[5].

## Just-In-Time (JIT) Compilation

### Process

- JIT compilation involves translating JavaScript code into machine code at runtime. This process includes multiple layers of optimization to improve execution speed[2][3][5].
- The engine assumes that a function will use the same types it used before, saving the code with these types in advance. If the types change, the engine de-optimizes and recompiles the code normally[3].

### Performance Impact

- JIT compilation significantly improves the performance of JavaScript code, making it comparable to compiled languages. It allows for real-time optimization and execution, enhancing the overall speed of web applications[2][3][5].

## JavaScript Runtime Environment

### Components

- A JavaScript runtime environment includes:
  - **JavaScript Engine**: The core component responsible for executing JavaScript code[2][5].
  - **Web APIs**: Functionalities provided to the engine but not part of the JavaScript language itself. Examples include the Document Object Model (DOM) and Fetch APIs, accessible through the global window object[2][4].
  - **Callback Queue**: Stores callback functions ready to be executed in a First-In-First-Out (FIFO) manner[2][4].
  - **Event Loop**: Continuously monitors the main thread and the callback queue, ensuring that callbacks are executed when the main thread is idle[4].

### Browser vs Node.js Runtimes

- Browser runtime environments include web APIs provided by the browser (e.g., DOM, timers)[2][4].
- Node.js runtime environments use C++ bindings and a thread pool instead of web APIs[2].

## Notable JavaScript Engines

### V8

- Developed by Google, used in Google Chrome, Chromium-based browsers, and Node.js. Known for its high performance and aggressive optimization[1][2][5].

### SpiderMonkey

- Developed by Mozilla, used in Firefox and its forks. It was the first JavaScript engine and has evolved to incorporate modern JIT techniques[1][2][5].

### JavaScriptCore

- Developed by Apple, used in Safari and other WebKit-based browsers. Focuses on performance and security with an emphasis on energy efficiency[1][2][5].

### Chakra

- Developed by Microsoft, used in Internet Explorer and the original Edge browser. Now replaced by V8 in the new Edge browser[1][2][5].

## Event Loop and Callback Queue

### Event Loop

- The event loop continuously monitors the main thread and the callback queue. When the main thread is idle, it dequeues a callback from the callback queue and pushes it onto the call stack for execution[4].

### Callback Queue

- Ensures that callback functions are executed in a FIFO manner. Callbacks are passed into the call stack when it is empty, allowing for non-blocking concurrency[2][4].

## Web APIs and Browser Integration

### Web APIs

- Provided by the browser, these APIs are not part of the JavaScript language but are accessible through the engine. Examples include DOM, timers, and Fetch APIs[2][4].

### Browser Integration

- The JavaScript engine runs in concert with the rendering engine via the Document Object Model and Web IDL bindings. This integration is crucial for web application functionality[1].

## Conclusion

- JavaScript engines have evolved from simple interpreters to sophisticated systems using JIT compilation for improved performance.
- Understanding the components and processes of a JavaScript engine and runtime environment is essential for developing efficient and responsive web applications[2][3][5].