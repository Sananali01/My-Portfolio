import html from "../images/Blog/html.png";
import css from "../images/Blog/css.jpg";
import javascript from "../images/Blog/js.jpg";
import bootstrap from "../images/Blog/boostrap.png";
import python from "../images/Blog/python.png";
import react from "../images/Blog/react.jpg";
import java from "../images/Blog/java.jpg";
import php from "../images/Blog/php.jpg";
import nodejs from "../images/Blog/node.jpg";
import mongodb from "../images/Blog/mongodb.png";
import github from "../images/Blog/github.png";
import gitlab from "../images/Blog/gitlab.png";
import csharp from "../images/Blog/csharp.jpg";
import cpp from "../images/Blog/cpp.jpg";
import kotlin from "../images/Blog/kotlin.png";
import swift from "../images/Blog/swift.jpg"
import go from "../images/Blog/go.jpg"
import rubyonrails from "../images/Blog/ror.png"
import typescript from "../images/Blog/typescript.png"
import django from "../images/Blog/django.jpg"


export const blogs = [

// Python
  {
    title: "Python",
    intro: "Explore the dynamic features of Python programming.",
    content: (
      <div>
        <h1>Python: A Dynamic and Versatile Language</h1>
        <p>
          Python is a high-level, interpreted programming language known for its
          simplicity and versatility. It offers dynamic typing and dynamic
          binding, making it an ideal choice for rapid application development
          and scripting. Python's clean syntax and readability contribute to its
          popularity among beginners and seasoned developers alike.
        </p>
        <h2>Powerful Libraries and Frameworks</h2>
        <p>
          Python boasts a vast ecosystem of libraries and frameworks, such as
          NumPy and Pandas for data analysis, Django and Flask for web
          development, and TensorFlow and PyTorch for machine learning. These
          libraries and frameworks empower developers to build a wide range of
          applications, from web applications to scientific computing and
          artificial intelligence.
        </p>
        <h2>Community and Support</h2>
        <p>
          Python has a thriving community of developers who contribute to its
          growth and evolution. The Python Software Foundation oversees the
          development of the language and ensures its continued relevance and
          innovation. Additionally, online forums, tutorials, and documentation
          provide ample resources for developers to learn and collaborate within
          the Python community.
        </p>
        <h2>Applications of Python</h2>
        <p>
          Python finds applications in various domains, including web
          development, data analysis, scientific computing, machine learning,
          artificial intelligence, automation, and more. Its versatility and
          ease of use make it a popular choice for startups, large enterprises,
          and individual developers seeking to build innovative solutions.
        </p>
        <h2>Python in Automation and Scripting</h2>
        <p>
          Python's ability to automate repetitive tasks and handle scripting
          makes it indispensable in system administration, DevOps practices,
          and building command-line tools. Its readability and extensive
          standard library facilitate rapid development of scripts for various
          purposes.
        </p>
        <h2>Python in Data Science</h2>
        <p>
          With libraries like SciPy, Matplotlib, and scikit-learn, Python has
          become the go-to language for data analysis and visualization.
          Data scientists use Python to explore data, build statistical models,
          and communicate insights effectively, leveraging its powerful tools
          for numerical computing and machine learning.
        </p>
      </div>
    ),
    image: python,
  },
  

  // JavaScript
  {
    title: "JavaScript",
    intro: "Dive into the world of JavaScript.",
    content: (
      <div>
        <h1>JavaScript Fundamentals</h1>
        <p>
          JavaScript is the dynamic powerhouse of web development. It is a
          versatile, widely-used programming language that breathes life into
          web pages by adding interactivity and functionality. JavaScript allows
          you to create dynamic content, validate forms, and interact with
          users, making your website more engaging and functional. JavaScript is
          the backbone of modern web development.
        </p>
        <h2>Real-Time Interaction</h2>
        <p>
          At its core, JavaScript is a scripting language that runs in the
          browser, which means that it can respond to user actions in real-time.
          This capability is what makes the web so interactive and responsive.
          When a user clicks a button, fills out a form, or navigates a webpage,
          JavaScript can process these actions and provide immediate feedback.
          It transforms static web pages into dynamic and engaging user
          experiences.
        </p>
        <h2>Manipulating the DOM</h2>
        <p>
          One of the key features of JavaScript is its ability to manipulate the
          Document Object Model (DOM), which represents the structure and
          content of a web page. JavaScript can dynamically modify the DOM,
          allowing you to change the content or appearance of a webpage without
          requiring a full page reload. This is the basis for many modern web
          applications, where data can be loaded and updated on-the-fly,
          providing a seamless and responsive user experience.
        </p>
        <h2>Handling Complex Operations</h2>
        <p>
          In addition to enhancing user experience, JavaScript can handle
          complex operations such as form validation, data retrieval from
          servers (via APIs), and even the creation of browser-based games. Its
          extensive ecosystem of libraries and frameworks, such as React,
          Angular, and Vue, has further expanded its capabilities, allowing
          developers to build powerful and feature-rich web applications.
        </p>
        <h2>The Essential Language</h2>
        <p>
          JavaScript is essential for modern web development, and its
          versatility makes it a valuable skill for developers. Whether you're
          building a simple website or a complex web application, JavaScript is
          the language that empowers you to create engaging and user-friendly
          experiences. It is a widely-used programming language that adds
          interactivity to web pages, opening up endless possibilities for web
          development.
        </p>
        <h2>JavaScript Ecosystem and Libraries</h2>
        <p>
          JavaScript's ecosystem is vast and diverse, with a wealth of
          open-source libraries and frameworks that can accelerate development.
          Frameworks like React, Angular, and Vue are popular for building
          single-page applications, while libraries like jQuery simplify DOM
          manipulation and event handling. Additionally, JavaScript's
          integration with Node.js allows developers to build server-side
          applications and create full-stack solutions. This rich ecosystem
          provides developers with tools to address a wide range of web
          development needs.
        </p>
        <h2>Asynchronous Programming</h2>
        <p>
          JavaScript's support for asynchronous programming is a key feature
          that enables non-blocking operations, such as making network requests
          or handling user input without freezing the user interface. This is
          achieved through features like Promises and async/await, making it
          possible to write efficient and responsive web applications.
          Asynchronous programming is a crucial aspect of modern web
          development, ensuring that user interactions remain smooth and
          uninterrupted.
        </p>
        <h2>JavaScript in Server-Side Development</h2>
        <p>
          With the rise of Node.js, JavaScript has extended beyond the browser
          to server-side development. Node.js enables developers to build
          scalable and high-performance server applications using JavaScript,
          leveraging its event-driven, non-blocking I/O model. This has
          transformed JavaScript into a full-stack language, allowing
          developers to work seamlessly across frontend and backend
          environments.
        </p>
      </div>
    ),
    image: javascript,
  },
  
  // Java
  {
    title: "Java",
    intro: "Discover the robust features of Java programming.",
    content: (
      <div>
        <h1>Java: The Foundation of Enterprise Applications</h1>
        <p>
          Java is a powerful, object-oriented programming language renowned for
          its portability, reliability, and performance. It was designed with
          principles such as write once, run anywhere (WORA), making it suitable
          for building cross-platform applications that run seamlessly on
          different devices and operating systems.
        </p>
        <h2>Platform Independence</h2>
        <p>
          Java achieves platform independence through its bytecode compilation
          model, where source code is compiled into intermediate bytecode that
          runs on the Java Virtual Machine (JVM). This architecture allows Java
          applications to be executed on any device that has a compatible JVM,
          providing unparalleled portability and scalability.
        </p>
        <h2>Scalability and Security</h2>
        <p>
          Java's robust features, such as strong typing, automatic memory
          management, and built-in security mechanisms, make it well-suited for
          building scalable and secure enterprise applications. Java's extensive
          standard library and mature ecosystem of frameworks, such as Spring and
          Hibernate, further enhance its capabilities for building complex
          systems.
        </p>
        <h2>Enterprise Adoption</h2>
        <p>
          Java is widely adopted in enterprise environments for developing
          mission-critical applications, including banking systems, e-commerce
          platforms, customer relationship management (CRM) software, and more.
          Its stability, performance, and long-term support make it a preferred
          choice for building robust and scalable solutions in demanding
          business environments.
        </p>
      </div>
    ),
    image: java,
  },

  // Php
  {
    title: "PHP",
    intro: "Explore the web development capabilities of PHP.",
    content: (
      <div>
        <h1>PHP: Powering the Web</h1>
        <p>
          PHP is a server-side scripting language designed for web development.
          It is widely used for creating dynamic and interactive websites,
          powering popular content management systems like WordPress and Drupal.
          PHP's simplicity, flexibility, and wide adoption make it a favorite
          among web developers for building dynamic web applications and
          e-commerce platforms.
        </p>
        <h2>Dynamic Web Applications</h2>
        <p>
          PHP enables the creation of dynamic web applications by embedding code
          directly into HTML pages. This allows developers to generate dynamic
          content, process form data, interact with databases, and perform other
          server-side tasks seamlessly. PHP's extensive library of functions and
          frameworks, such as Laravel and Symfony, streamline web development and
          facilitate the creation of robust web applications.
        </p>
        <h2>Content Management Systems (CMS)</h2>
        <p>
          PHP powers many popular content management systems (CMS) like WordPress,
          Joomla, and Drupal, which enable users to create and manage dynamic
          websites with ease. These CMS platforms leverage PHP's features to
          provide customizable templates, plugins, and extensions, empowering
          users to build sophisticated websites without extensive coding
          knowledge.
        </p>
        <h2>Web Development Community</h2>
        <p>
          PHP has a vibrant community of developers who contribute to its growth
          and development. Online forums, tutorials, and documentation provide
          valuable resources for PHP developers to learn, share knowledge, and
          collaborate on projects. PHP's open-source nature and widespread
          adoption ensure its continued relevance in the ever-evolving landscape
          of web development.
        </p>
      </div>
    ),
    image: php,
  },

   // cpp
   {
    title: "C++",
    intro: "Embark on a journey into the world of C++ programming.",
    content: (
      <div>
        <h1>C++: A Robust and Efficient Language</h1>
        <p>
          C++ is a powerful, general-purpose programming language renowned for its
          efficiency, performance, and versatility. Developed from its predecessor,
          C, C++ introduces object-oriented programming (OOP) features, making it
          suitable for building complex and high-performance software systems.
          Its combination of low-level control and high-level abstractions makes
          it a preferred choice for applications ranging from system software
          to game development.
        </p>
        <h2>Features and Flexibility</h2>
        <p>
          C++ offers a rich set of features, including classes, inheritance, polymorphism,
          templates, and exception handling. These features enable developers to
          create reusable and modular code, enhancing productivity and maintainability.
          Additionally, C++ supports both procedural and object-oriented programming
          paradigms, providing flexibility to adapt to various programming styles
          and project requirements.
        </p>
        <h2>Performance and Optimization</h2>
        <p>
          One of C++'s distinguishing characteristics is its emphasis on performance
          and efficiency. By allowing direct memory manipulation and fine-grained
          control over hardware resources, C++ enables developers to optimize
          code for speed and resource utilization. This makes it an ideal choice
          for applications where performance is critical, such as real-time systems,
          embedded devices, and high-performance computing.
        </p>
        <h2>Rich Ecosystem and Libraries</h2>
        <p>
          C++ benefits from a vast ecosystem of libraries and frameworks that
          extend its functionality and accelerate development. Standard libraries
          like the C++ Standard Template Library (STL) provide essential data structures
          and algorithms, while third-party libraries offer solutions for graphics,
          networking, database access, and more. These libraries enhance C++'s
          capabilities and enable developers to leverage existing solutions to
          build robust and feature-rich applications.
        </p>
        <h2>Applications of C++</h2>
        <p>
          C++ finds applications in diverse domains, including system programming,
          game development, software infrastructure, scientific computing, and
          finance. Its performance, control, and portability make it a preferred
          language for developing operating systems, device drivers, game engines,
          and high-frequency trading systems. Despite the emergence of newer languages,
          C++ remains a cornerstone of modern software development, powering critical
          components of many industries.
        </p>
      </div>
    ),
    image: cpp,
  },

  //go
  {
    title: "Go",
    intro: "Discover the simplicity and efficiency of the Go programming language.",
    content: (
      <div>
        <h1>Go: Simplicity, Efficiency, and Concurrency</h1>
        <p>
          Go, also known as Golang, is a statically typed, compiled programming
          language developed by Google. Launched in 2009, Go is designed for
          simplicity, efficiency, and concurrency, making it ideal for building
          scalable and reliable software systems. With its clean syntax, built-in
          concurrency support, and robust standard library, Go offers a productive
          environment for both small-scale projects and large-scale distributed
          systems.
        </p>
        <h2>Concurrency and Goroutines</h2>
        <p>
          One of Go's standout features is its built-in support for concurrency
          through goroutines and channels. Goroutines are lightweight threads
          that allow developers to write concurrent code easily, while channels
          facilitate communication and synchronization between goroutines. This
          concurrency model simplifies the development of concurrent software,
          enabling developers to leverage parallelism efficiently without the
          complexities of traditional threading and synchronization mechanisms.
        </p>
        <h2>Simplicity and Productivity</h2>
        <p>
          Go emphasizes simplicity and readability, with a minimalistic syntax
          that reduces cognitive overhead and encourages clean and idiomatic
          code. Its small but powerful standard library provides essential
          functionality for common tasks such as networking, file I/O, and
          text processing, eliminating the need for third-party dependencies
          in many cases. Additionally, Go's tooling, including the go tool
          and gofmt, promotes consistency and productivity across development
          workflows.
        </p>
        <h2>Community and Ecosystem</h2>
        <p>
          The Go community is active and supportive, with developers contributing
          libraries, tools, and resources to enhance the language and ecosystem.
          The Go Project, supported by Google and the open-source community,
          oversees the development and maintenance of the language, standard
          library, and associated tools. Online forums, conferences, and
          meetups provide opportunities for learning, collaboration, and
          networking within the Go community.
        </p>
        <h2>Applications of Go</h2>
        <p>
          Go is well-suited for a variety of applications, including web
          development, cloud services, system programming, and DevOps automation.
          Its efficient concurrency model makes it particularly suitable for
          building scalable web servers, microservices, and distributed systems.
          Many prominent companies, including Google, Uber, Dropbox, and
          Docker, rely on Go for critical infrastructure and backend services,
          showcasing its effectiveness in real-world production environments.
        </p>
      </div>
    ),
    image: go,
  },
  
  //swift
  {
    title: "Swift",
    intro: "Embark on a journey into the world of Swift programming.",
    content: (
      <div>
        <h1>Swift: Modern, Safe, and Powerful</h1>
        <p>
          Swift is a modern, open-source programming language developed by Apple
          for building applications across Apple platforms, including iOS, macOS,
          watchOS, and tvOS. Introduced in 2014, Swift combines the performance
          and efficiency of compiled languages with the simplicity and safety
          of modern programming languages. Its concise syntax, robust type system,
          and powerful features make it a favorite among developers for creating
          elegant and high-performance applications.
        </p>
        <h2>Key Features and Syntax</h2>
        <p>
          Swift incorporates a range of features designed to enhance developer
          productivity and code clarity. These include optionals for handling
          nil values safely, generics for writing flexible and reusable code,
          closures for functional programming patterns, and pattern matching
          for expressive control flow. Swift's syntax is concise and expressive,
          making it easy to read and write, while its type inference capabilities
          reduce boilerplate code and improve code maintainability.
        </p>
        <h2>Interoperability and Compatibility</h2>
        <p>
          Swift is designed to work seamlessly with existing Objective-C code,
          allowing developers to leverage existing libraries and frameworks
          within their Swift projects. Additionally, Swift code can be easily
          integrated with C and C++ code, providing flexibility for incorporating
          low-level functionality or interfacing with system-level APIs. Swift
          also supports interoperability with other languages through bindings
          and wrappers, enabling developers to incorporate third-party libraries
          and technologies into their Swift projects.
        </p>
        <h2>Community and Support</h2>
        <p>
          The Swift community is active and growing, with developers contributing
          libraries, tools, and resources to enhance the language and ecosystem.
          Apple provides extensive documentation, guides, and tutorials to help
          developers learn Swift and build applications for its platforms.
          Additionally, online forums, conferences, and meetups offer opportunities
          for developers to connect, learn, and collaborate within the Swift community.
        </p>
        <h2>Applications of Swift</h2>
        <p>
          Swift is primarily used for developing applications across Apple's
          ecosystem, including mobile apps, desktop applications, server-side
          services, and even games. Its performance, safety features, and
          compatibility with Apple's frameworks make it an ideal choice for
          building a wide range of applications, from simple utilities to
          complex enterprise solutions. With its continued evolution and
          enhancements, Swift remains at the forefront of modern app development
          for Apple platforms.
        </p>
      </div>
    ),
    image: swift,
  },
  
  // C#
  {
    title: "C#",
    intro: "Discover the robust features of the C# programming language.",
    content: (
      <div>
        <h1>C#: A Powerful and Versatile Language</h1>
        <p>
          C# is a modern, object-oriented programming language developed by Microsoft.
          Known for its robustness and versatility, C# is widely used for building
          applications on the .NET framework. Its strong typing and extensive
          libraries make it a preferred choice for developing desktop, web, and
          mobile applications across various platforms.
        </p>
        <h2>Rich Ecosystem and Tooling</h2>
        <p>
          C# benefits from a rich ecosystem of libraries, tools, and frameworks
          that streamline development processes. Popular frameworks like ASP.NET
          facilitate web development, while Xamarin enables cross-platform mobile
          app development. With integrated development environments like Visual Studio,
          developers can write, debug, and deploy C# applications efficiently.
        </p>
        <h2>Community and Resources</h2>
        <p>
          The C# community is vibrant and supportive, offering resources for
          both beginners and experienced developers. Microsoft provides extensive
          documentation, tutorials, and forums to help developers leverage the
          full potential of C#. Additionally, community-driven initiatives and
          open-source projects contribute to the growth and innovation of the language.
        </p>
        <h2>Applications of C#</h2>
        <p>
          C# is widely used in various domains, including enterprise software
          development, game development, web applications, cloud computing, and
          IoT (Internet of Things). Its versatility, coupled with seamless integration
          with other Microsoft technologies, makes C# a preferred choice for building
          scalable and robust software solutions.
        </p>
      </div>
    ),
    image: csharp,
  },

  
  //kotlin
  {
    title: "Kotlin",
    intro: "Embark on a journey into the world of Kotlin programming.",
    content: (
      <div>
        <h1>Kotlin: Concise, Safe, and Interoperable</h1>
        <p>
          Kotlin is a modern, statically typed programming language developed by
          JetBrains. Introduced in 2011, Kotlin is designed to be concise, expressive,
          and interoperable with existing Java codebases, making it an excellent
          choice for Android development, server-side applications, and multi-platform
          development. With its powerful features and seamless integration with
          Java and Android frameworks, Kotlin enables developers to write robust
          and maintainable code with less boilerplate and fewer runtime errors.
        </p>
        <h2>Features and Syntax</h2>
        <p>
          Kotlin incorporates a range of features inspired by other programming
          languages, including null safety, type inference, extension functions,
          and coroutines for asynchronous programming. Its concise syntax and
          expressive features allow developers to express complex ideas with
          minimal code, improving readability and reducing the likelihood of
          errors. Kotlin's interoperability with Java ensures seamless integration
          with existing codebases and libraries, enabling gradual adoption and
          migration for Java projects.
        </p>
        <h2>Multiplatform Development</h2>
        <p>
          One of Kotlin's key strengths is its support for multiplatform development,
          allowing developers to share code between different platforms, including
          Android, iOS, web, and backend services. With tools like Kotlin Multiplatform
          Mobile (KMM) and Kotlin/Native, developers can write shared business
          logic in Kotlin and compile it to run natively on each platform, reducing
          development time and maintenance overhead. This approach enables
          organizations to build cross-platform applications with a consistent
          codebase and user experience.
        </p>
        <h2>Community and Support</h2>
        <p>
          The Kotlin community is vibrant and growing, with developers contributing
          libraries, frameworks, and tools to enhance the language and ecosystem.
          JetBrains provides extensive documentation, tutorials, and resources
          to help developers learn Kotlin and leverage its features effectively.
          Additionally, online forums, conferences, and meetups offer opportunities
          for learning, collaboration, and networking within the Kotlin community.
        </p>
        <h2>Applications of Kotlin</h2>
        <p>
          Kotlin is used in a variety of applications, including Android app
          development, server-side applications, web development, and desktop
          applications. Its interoperability with Java and seamless integration
          with Android frameworks make it a popular choice for building Android
          apps, with many organizations adopting Kotlin as their primary language
          for Android development. Additionally, Kotlin's support for multiplatform
          development enables developers to build cross-platform applications
          with shared code, accelerating time to market and reducing development
          costs.
        </p>
      </div>
    ),
    image: kotlin,
  },
    // Node.js
    {
      title: "Node JS",
      intro: "Explore server-side programming with Node.js.",
      content: (
        <div>
          <h1>Node.js Fundamentals</h1>
          <p>
            Node.js is a runtime environment that allows developers to execute JavaScript on the server side, rather than just in the browser. This ability to use JavaScript on the server has transformed the web development landscape, making it possible to create scalable and high-performance web applications.
          </p>
          <h2>Speed and Efficiency</h2>
          <p>
            Node.js is built on the V8 JavaScript engine from Google, making it exceptionally fast and efficient. This speed, combined with its non-blocking I/O model, allows Node.js to handle a large number of concurrent connections without blocking the execution of code. This makes it ideal for building real-time applications, APIs, and microservices.
          </p>
          <p>
            Node.js's exceptional speed is attributed to its event-driven, single-threaded architecture. It leverages the event loop to handle multiple connections simultaneously, ensuring that your application remains responsive even under heavy loads. This efficiency is particularly advantageous for real-time applications like chat platforms, online gaming, and data-intensive systems.
          </p>
          <h2>Large Ecosystem with NPM</h2>
          <p>
            One of the key benefits of Node.js is its large ecosystem of packages and libraries available through the Node Package Manager (NPM). NPM is the largest ecosystem of open-source libraries in the world, making it easy to find, install, and manage packages for your project. Whether you need a framework like Express.js, a database connector, or any other functionality, chances are you'll find it in NPM.
          </p>
          <p>
            NPM simplifies dependency management and allows you to access a wide range of third-party modules that can be easily integrated into your Node.js applications. The vast library of available packages saves development time, enabling you to focus on building the core features of your application.
          </p>
          <h2>Unified Development</h2>
          <p>
            Node.js simplifies creating server-side applications. You can handle HTTP requests, connect to databases, and perform file operations, all using JavaScript. This unification of client-side and server-side development under a single language simplifies development, as you can share code and logic between the two sides of your application.
          </p>
          <p>
            The ability to use JavaScript on both the client and server sides promotes code reusability and collaboration between front-end and back-end developers. This unified development approach streamlines the development process, allowing teams to work more cohesively and deliver features faster.
          </p>
          <h2>Event-Driven Architecture</h2>
          <p>
            Furthermore, Node.js is event-driven, which means it uses asynchronous, non-blocking I/O operations. This approach ensures that your application remains responsive and can handle a high number of simultaneous connections, making it perfect for building real-time web applications and APIs. Node.js is suitable for various types of projects, from small web applications to large-scale, data-intensive applications. Its scalability and the ability to handle high traffic loads make it a preferred choice for many developers.
          </p>
          <p>
            Node.js's event-driven architecture is well-suited for building applications that require real-time features. The event loop manages asynchronous tasks, allowing developers to create responsive applications that handle multiple connections, such as chat applications, online gaming platforms, and collaborative tools.
          </p>
        </div>
      ),
      image: nodejs,
    },
  
 

 
  //rubyonrails
  {
      title: "Ruby on Rails",
      intro: "Discover the power and productivity of Ruby on Rails for web development.",
      content: (
        <div>
          <h1>Ruby on Rails: Agile Web Development Made Simple</h1>
          <p>
            Ruby on Rails, often simply referred to as Rails, is a powerful web application
            framework built on top of the Ruby programming language. Created by David Heinemeier
            Hansson in 2004, Rails follows the principle of convention over configuration,
            allowing developers to build robust and maintainable web applications with
            less code and configuration. With its focus on developer productivity, simplicity,
            and elegance, Ruby on Rails has become one of the most popular frameworks
            for web development, powering countless websites and web applications
            across various industries.
          </p>
          <h2>Convention over Configuration</h2>
          <p>
            Ruby on Rails streamlines the web development process by providing sensible
            defaults and conventions for common tasks, such as database migrations,
            routing, and view templating. This principle of convention over configuration
            minimizes the need for explicit configuration and reduces boilerplate code,
            allowing developers to focus on building application features rather than
            infrastructure. By adhering to established conventions, Rails promotes
            consistency and best practices, making it easier for developers to collaborate
            and maintain codebases over time.
          </p>
          <h2>Active Record and MVC Architecture</h2>
          <p>
            Rails incorporates the Model-View-Controller (MVC) architectural pattern,
            with ActiveRecord serving as the default ORM (Object-Relational Mapping)
            framework. ActiveRecord enables developers to interact with the database
            using object-oriented methods, abstracting away the complexities of SQL
            queries and database management. This abstraction simplifies database
            operations and enhances code readability, while the MVC structure separates
            concerns and promotes code organization and maintainability.
          </p>
          <h2>Rich Ecosystem and Community</h2>
          <p>
            Ruby on Rails benefits from a vibrant ecosystem of libraries, gems (Ruby
            packages), and plugins that extend its functionality and simplify common
            development tasks. The Rails community is active and supportive, with
            developers contributing resources, tutorials, and open-source projects
            to enhance the framework and share best practices. Additionally, Rails
            enjoys widespread adoption in the startup community, thanks to its
            productivity advantages and rapid prototyping capabilities.
          </p>
          <h2>Applications of Ruby on Rails</h2>
          <p>
            Ruby on Rails is used to build a wide range of web applications, including
            e-commerce platforms, social networks, content management systems (CMS),
            and software-as-a-service (SaaS) products. Its ease of use, productivity
            features, and robust ecosystem make it particularly well-suited for startups
            and small to medium-sized businesses looking to launch and scale web-based
            applications quickly and efficiently. Many successful companies, including
            Airbnb, GitHub, Shopify, and Basecamp, have built their products using Ruby
            on Rails, highlighting its effectiveness in real-world production environments.
          </p>
        </div>
      ),
      image: rubyonrails,
  },
    
  // Bootstrap
  {
    title: "Bootstrap",
    intro: "Create responsive web designs with Bootstrap.",
    content: (
      <div>
        <h1>Bootstrap Framework</h1>
        <p>
          Bootstrap is a popular front-end framework that simplifies the process
          of creating responsive and visually appealing websites. Developed by
          Twitter, Bootstrap provides a set of pre-designed components and
          styles that can significantly expedite your web development projects.
          It's a valuable tool for both beginners and experienced developers
          looking to create modern and responsive web designs.
        </p>
        <h2>Responsive Design Capabilities</h2>
        <p>
          One of the standout features of Bootstrap is its responsive design
          capabilities. In the age of mobile devices and varying screen sizes,
          it's crucial to ensure that your websites look and function well on
          all platforms. Bootstrap's grid system enables you to create flexible,
          responsive layouts that automatically adapt to different screen sizes.
          This ensures a consistent and user-friendly experience for your
          visitors, regardless of the device they're using.
        </p>
        <h2>Pre-designed UI Components</h2>
        <p>
          Bootstrap also provides a wide range of pre-designed UI components
          such as navigation bars, buttons, forms, and modals. These components
          can be customized to match your project's style and branding, making
          it easy to create a cohesive and visually appealing web design.
          Additionally, Bootstrap includes JavaScript plugins for interactive
          features like carousels, tooltips, and popovers, which can enhance
          user engagement and provide an extra layer of interactivity.
        </p>
        <h2>Open-Source and Community Support</h2>
        <p>
          Bootstrap is open-source and has an active community, which means you
          can find a wealth of resources, documentation, and third-party themes
          and templates to kickstart your web development. It's no wonder that
          Bootstrap is a top choice for many developers, as it streamlines the
          process of creating modern, responsive, and visually appealing
          websites. Whether you're working on a personal project or a
          professional web application, Bootstrap offers the tools and community
          support you need to succeed.
        </p>
        <h2>Customization and Theming</h2>
        <p>
          While Bootstrap provides a set of default styles and components, it's
          highly customizable. You can tailor Bootstrap to your project's
          specific needs by modifying the provided variables or even building
          your own custom components. Additionally, Bootstrap themes and
          templates are widely available, allowing you to achieve a unique look
          and feel for your web applications. This flexibility means that you
          can create web designs that match your brand or project requirements,
          while still benefiting from Bootstrap's responsive and feature-rich
          foundation.
        </p>
      </div>
    ),
    image: bootstrap,
  },

  // React.js
  {
    title: "React JS",
    intro: "Get started with React.js.",
    content: (
      <div>
        <h1>React.js Introduction</h1>
        <p>
          React.js, commonly referred to as React, is a popular JavaScript
          library for building user interfaces. It's maintained by Facebook and
          a community of developers and is widely used for creating interactive
          and responsive web applications. React's component-based architecture,
          virtual DOM, and one-way data flow make it a powerful choice for
          modern web development. With React, you have the power to create
          dynamic and user-friendly web applications.
        </p>
        <h2>Component-Based Development</h2>
        <p>
          At the core of React's philosophy is the concept of components.
          Components are self-contained, reusable building blocks of a user
          interface. Each component can have its own state and properties, and
          you can compose them to create complex UIs. This modular approach to
          development makes it easier to manage and maintain your codebase,
          especially in large-scale projects. React's component-based
          architecture simplifies the process of designing interactive and
          dynamic user interfaces.
        </p>
        <h2>Virtual DOM and Performance</h2>
        <p>
          React uses a virtual DOM, which is a lightweight representation of the
          actual DOM in the browser. When data changes, React updates the
          virtual DOM first, and then efficiently updates the actual DOM. This
          approach minimizes the number of manipulations needed, resulting in a
          more performant and responsive user interface. React's focus on
          performance ensures that your web applications can handle complex
          interactions and dynamic content efficiently.
        </p>
        <h2>Single-Page Applications (SPAs)</h2>
        <p>
          One of the key benefits of React is its ability to build single-page
          applications (SPAs). SPAs provide a seamless user experience by
          loading and updating content dynamically without full-page refreshes.
          React's use of client-side routing and its ecosystem of libraries like
          React Router make building SPAs a breeze. Additionally, React has a
          strong and active community that provides a vast number of open-source
          libraries, tools, and components. The extensive ecosystem around React
          includes state management solutions like Redux, styling libraries like
          Material-UI, and data-fetching libraries like Axios. This means that
          you're never short of resources to enhance your React projects.
        </p>
        <h2>Server-Side Rendering (SSR)</h2>
        <p>
          React also supports server-side rendering (SSR), which can improve the
          initial loading speed and search engine optimization (SEO) of your web
          applications. With SSR, your React components can be rendered on the
          server and sent to the client as HTML, ensuring that your content is
          accessible to search engines and loads quickly for your users. This
          enhances the accessibility and performance of your web applications,
          making them more user-friendly and SEO-friendly.
        </p>
      </div>
    ),
    image: react,
  },

  //Django
  {
    title: "Django",
    intro: "Explore the power and simplicity of Django for web development.",
    content: (
      <div>
        <h1>Django: The Web Framework for Perfectionists with Deadlines</h1>
        <p>
          Django is a high-level web framework for Python that encourages rapid
          development and clean, pragmatic design. Built by experienced developers,
          Django takes care of much of the hassle of web development, so you can
          focus on writing your app without needing to reinvent the wheel. It's
          free and open source, and it follows the "Don't Repeat Yourself" (DRY)
          principle, helping you build maintainable web applications with less code.
        </p>
        <h2>Batteries-Included Philosophy</h2>
        <p>
          Django follows a "batteries-included" philosophy, providing a comprehensive
          set of tools and libraries to handle common web development tasks, such
          as URL routing, database modeling, form handling, and authentication.
          Its built-in administrative interface, Django Admin, allows you to
          manage your application's data with ease, saving you time and effort
          during development.
        </p>
        <h2>MVC Architecture and ORM</h2>
        <p>
          Django adopts the Model-View-Controller (MVC) architectural pattern,
          with models representing the data structure, views handling user interactions,
          and templates rendering HTML output. It comes with a powerful Object-Relational
          Mapping (ORM) system that abstracts away the complexities of database
          interactions, allowing you to work with database models using Python
          code rather than SQL queries.
        </p>
        <h2>Scalability and Security</h2>
        <p>
          Django is designed to scale with your application's growth, offering
          built-in features for caching, session management, and database optimization.
          Its security features, including protection against common web vulnerabilities
          like SQL injection, cross-site scripting (XSS), and cross-site request
          forgery (CSRF), help you build secure web applications by default,
          minimizing the risk of security breaches.
        </p>
        <h2>Community and Ecosystem</h2>
        <p>
          Django has a large and active community of developers who contribute
          to its growth and improvement. The Django Software Foundation oversees
          the development of the framework and ensures its continued evolution
          and relevance. The Django community provides extensive documentation,
          tutorials, and resources to help developers learn Django and solve
          common challenges. Additionally, third-party packages and plugins
          extend Django's functionality, allowing you to customize and extend
          your applications as needed.
        </p>
        <h2>Applications of Django</h2>
        <p>
          Django is used to build a wide range of web applications, including
          content management systems (CMS), e-commerce platforms, social networks,
          and software-as-a-service (SaaS) products. Its versatility, scalability,
          and security features make it a popular choice for startups, large
          enterprises, and individual developers seeking to build robust and
          maintainable web applications. Many well-known websites and web services,
          including Instagram, Pinterest, and Spotify, rely on Django to power
          their backend infrastructure, showcasing its effectiveness in real-world
          production environments.
        </p>
      </div>
    ),
    image: django,
  },
  
  //typescript
  {
    title: "TypeScript",
    intro: "Embark on a journey into the world of TypeScript programming.",
    content: (
      <div>
        <h1>TypeScript: Typed JavaScript at Scale</h1>
        <p>
          TypeScript is a statically typed superset of JavaScript developed by
          Microsoft. Introduced in 2012, TypeScript extends JavaScript by adding
          static typing, interfaces, and other features to enable the development
          of large-scale applications with fewer errors and improved maintainability.
          By providing optional static types, TypeScript enhances developer productivity
          and code quality, while maintaining compatibility with existing JavaScript
          codebases and libraries.
        </p>
        <h2>Static Typing and Type Inference</h2>
        <p>
          One of TypeScript's key features is its support for static typing,
          allowing developers to specify types for variables, functions, and
          interfaces to catch type-related errors at compile-time. TypeScript's
          type inference capabilities automatically infer types when possible,
          reducing the need for explicit type annotations and minimizing
          development overhead. This combination of static typing and type
          inference enables developers to write safer and more maintainable
          code while retaining the flexibility and expressiveness of JavaScript.
        </p>
        <h2>JavaScript Interoperability</h2>
        <p>
          TypeScript is designed to be a seamless extension of JavaScript,
          allowing developers to leverage existing JavaScript codebases
          and libraries within TypeScript projects. TypeScript code can
          freely interoperate with JavaScript, enabling gradual adoption
          and migration for existing projects. Additionally, TypeScript
          offers advanced features such as decorators and async/await
          that enhance JavaScript development while preserving compatibility
          with standard JavaScript environments.
        </p>
        <h2>Community and Support</h2>
        <p>
          The TypeScript community is active and supportive, with developers
          contributing libraries, tools, and resources to enhance the language
          and ecosystem. Microsoft provides extensive documentation, guides,
          and tutorials to help developers learn TypeScript and adopt best
          practices. Additionally, online forums, conferences, and meetups
          offer opportunities for learning, collaboration, and networking
          within the TypeScript community.
        </p>
        <h2>Applications of TypeScript</h2>
        <p>
          TypeScript is used in a wide range of applications, including web
          development, mobile app development, server-side applications,
          and desktop applications. Its static typing and advanced tooling
          make it particularly well-suited for building large-scale web
          applications, where type safety and code organization are critical.
          Many popular frameworks and libraries, such as Angular, React,
          and Vue.js, provide first-class support for TypeScript, further
          solidifying its position as a preferred language for modern
          JavaScript development.
        </p>
      </div>
    ),
    image: typescript,
  },
  


   // MongoDB
   {
    title: "MongoDB",
    intro: "Explore MongoDB, a NoSQL database.",
    content: (
      <div>
        <h1>MongoDB Introduction</h1>
        <p>
          MongoDB is a popular NoSQL (non-relational) database that has gained
          prominence in the web development community due to its flexible and
          scalable data storage capabilities. Unlike traditional relational
          databases, MongoDB is document-oriented, making it a valuable choice
          for applications that require dynamic and evolving data storage.
        </p>
        <h2>Document-Oriented and Schema-Less</h2>
        <p>
          In MongoDB, data is stored as JSON-like documents, known as BSON
          (Binary JSON). These documents are highly flexible and can vary in
          structure, allowing you to store data in a way that matches your
          application's needs. This schema-less approach means that you can
          adapt and modify your data model as your application evolves without
          the constraints of a fixed schema.
        </p>
        <h2>Scalability and Sharding</h2>
        <p>
          One of MongoDB's standout features is its scalability. It's designed
          to handle large volumes of data and high traffic loads, making it an
          excellent choice for web applications that require rapid growth and
          increased performance. MongoDB can be easily distributed across
          multiple servers, allowing it to support large and complex
          applications with ease. The database also provides built-in sharding,
          which is a method of distributing data across multiple servers to
          ensure that data remains available and responsive. Sharding is
          essential for applications with extensive data storage needs, and
          MongoDB's architecture simplifies this process. Additionally, MongoDB
          has strong support for geospatial data, making it a popular choice for
          location-based applications. It can handle geospatial queries, making
          it easy to create applications that involve mapping, geofencing, and
          location-based services.
        </p>
        <h2>Flexible Query Language</h2>
        <p>
          MongoDB's query language is intuitive and powerful, offering features
          like text search, aggregation pipelines, and indexing to optimize
          query performance. Its flexible schema allows for complex queries, and
          you can also make use of a wide range of libraries and drivers in
          different programming languages to interact with MongoDB.
        </p>
        <h2>MongoDB in Modern Applications</h2>
        <p>
          MongoDB is commonly used in modern web and mobile applications,
          especially those that handle large amounts of data. Its ability to
          scale horizontally, along with its support for replication and high
          availability, ensures that your application remains reliable and
          responsive even in the face of growing user bases. MongoDB is a
          preferred choice for content management systems, e-commerce platforms,
          and any application that needs to store, retrieve, and process data
          efficiently.
        </p>
      </div>
    ),
    image: mongodb,
  },

    // HTML
    {
      title: "HTML",
      intro: "Learn the fundamentals of HTML.",
      content: (
        <div>
          <h1>HTML Basics</h1>
          <p>
            HTML stands for HyperText Markup Language, which is the cornerstone of
            web development. It serves as the foundation upon which web pages are
            built. HTML uses tags and elements to define the structure and layout
            of a web page, and it provides the essential structure for displaying
            content in a web browser. HTML documents consist of various elements,
            and each element is enclosed within specific tags. These tags define
            the type of content and its position on the page. For example, the
            &lt;h1&gt; tag is used to create a top-level heading, while the
            &lt;p&gt; tag is employed to designate paragraphs.
          </p>
          <h2>The Power of Hyperlinks and Multimedia</h2>
          <p>
            Furthermore, HTML allows for the inclusion of hyperlinks, images, and
            multimedia elements. By linking web pages together, users can navigate
            seamlessly through the interconnected web. HTML also supports the
            embedding of images, videos, and audio, making the web experience more
            engaging and dynamic. This interactivity and multimedia integration
            enhance user engagement and offer endless possibilities for creative
            web development.
          </p>
          <h2>HTML as the Foundation</h2>
          <p>
            Understanding HTML is fundamental for web developers, as it sets the
            stage for more advanced web technologies such as CSS (Cascading Style
            Sheets) and JavaScript. With HTML as your foundation, you can
            structure web content in a way that is accessible, semantically
            meaningful, and user-friendly. It is the standard markup language for
            documents designed to be displayed in a web browser. HTML provides the
            structure and layout of a web page by using various tags and elements.
            With proper HTML, you create a solid foundation for building an
            effective and user-friendly website.
          </p>
          <h2>HTML5 and Modern Web Development</h2>
          <p>
            In recent years, HTML has evolved with the introduction of HTML5.
            HTML5 brings new features and capabilities to web development, making
            it even more powerful. Some of the exciting features of HTML5 include
            native support for video and audio elements, canvas for creating
            dynamic graphics, and improved forms for better user interaction.
            Additionally, HTML5 introduced semantic elements like &lt;header&gt;,
            &lt;nav&gt;, and &lt;footer&gt; to enhance the structure of web
            documents. These features make it easier to create modern and
            responsive web applications. HTML5 has revolutionized web development,
            allowing developers to create interactive and feature-rich websites.
          </p>
          <h2>Accessibility and SEO</h2>
          <p>
            Accessibility and search engine optimization (SEO) are essential
            aspects of web development. HTML plays a significant role in ensuring
            that web content is accessible to all users, including those with
            disabilities. Semantic HTML elements and attributes help screen
            readers and assistive technologies understand the content and provide
            a better experience for users with disabilities. Properly structured
            HTML also contributes to better SEO, as search engines can more easily
            crawl and index the content on your web pages, improving their
            visibility in search results. Prioritizing accessibility and SEO not
            only broadens your audience but also boosts your website's
            discoverability.
          </p>
          <h2>Best Practices and Standards</h2>
          <p>
            When working with HTML, it's important to follow best practices and
            web standards. This includes using valid and well-structured HTML
            code, maintaining a clean and organized document structure, and
            optimizing images for faster page loading. Adhering to these practices
            ensures that your web pages are consistent, reliable, and compatible
            with a wide range of browsers and devices. Consistency and adherence
            to web standards are essential for delivering a seamless and
            professional web experience. Following best practices ensures that
            your website is reliable, loads quickly, and is accessible to a broad
            audience. Moreover, it demonstrates a commitment to quality and
            professionalism.
          </p>
        </div>
      ),
      image: html,
    },
  
    // CSS
    {
      title: "CSS",
      intro: "Master the art of CSS styling.",
      content: (
        <div>
          <h1>CSS Styling</h1>
          <p>
            CSS, or Cascading Style Sheets, is the artistic touch of web
            development. It serves as the stylistic language of web pages,
            allowing developers to define the visual aesthetics of a website. With
            CSS, you can control various aspects of a web page's appearance, such
            as colors, fonts, spacing, and layout, thereby making it visually
            appealing and user-friendly. CSS plays a crucial role in creating a
            visually engaging and cohesive design for your website, enhancing user
            experience and making your site stand out from the crowd.
          </p>
          <h2>The Power of Cascading Styles</h2>
          <p>
            CSS operates on the principle of cascading, meaning that styles can be
            inherited from multiple sources and can cascade through the document,
            applying styles in a specific order of priority. This gives developers
            the power to create consistent and visually pleasing designs. This
            cascading nature allows you to define styles globally while also
            providing specific styles to individual elements, offering a
            fine-grained approach to styling your web content.
          </p>
          <h2>Separation of Content and Presentation</h2>
          <p>
            One of the primary advantages of CSS is the separation of content and
            presentation. This separation makes it easier to manage and maintain
            websites. Styles can be defined in external CSS files, which can be
            linked to multiple web pages, ensuring a consistent design across the
            entire site. Selectors in CSS allow developers to target specific HTML
            elements and apply styles selectively. This fine-grained control is
            invaluable in creating unique and visually compelling web designs.
            Separating content and presentation ensures your website is easy to
            update and maintain and allows for consistent branding and styling
            across your web presence.
          </p>
          <h2>Responsive Web Design</h2>
          <p>
            Furthermore, CSS provides support for responsive web design, ensuring
            that web pages adapt to different screen sizes and devices. This is
            critical in today's multi-device world, where users access websites
            from desktop computers, laptops, tablets, and smartphones. A
            responsive design approach ensures that your website looks and
            functions seamlessly across various devices and screen sizes,
            providing an optimal user experience. Ensuring responsiveness in web
            design is essential to reach and engage a broad audience, as more
            users access websites on a variety of devices.
          </p>
          <h2>Advanced CSS Techniques</h2>
          <p>
            As you delve deeper into CSS, you'll discover advanced techniques and
            features that can take your web styling to the next level. These may
            include CSS animations and transitions for creating interactive
            elements, flexbox and grid layouts for precise control over page
            structure, and CSS preprocessors like SASS or LESS that simplify the
            writing of CSS code. These advanced techniques enable you to create
            sophisticated and interactive web designs, allowing you to explore the
            full creative potential of CSS.
          </p>
        </div>
      ),
      image: css,
    },
  
// GitHub
  {
    title: "GitHub",
    intro: "Collaborate and manage code with GitHub.",
    content: (
      <div>
        <h1>GitHub Version Control</h1>
        <p>
          GitHub is a web-based platform for version control and collaborative
          software development. It simplifies the process of working with others
          on projects, tracking changes, and managing code repositories. Whether
          you're working on a personal project or collaborating with a team,
          GitHub is a valuable tool for maintaining code quality and enabling
          efficient teamwork.
        </p>
        <h2>Distributed Version Control</h2>
        <p>
          GitHub is widely adopted by developers, and its platform offers a wide
          range of features and tools for managing and organizing code. You can
          create repositories for your projects, track issues and bugs,
          collaborate with other developers through pull requests, and manage
          your codebase efficiently. One of the key advantages of using GitHub
          is its distributed version control system. Each developer has a local
          copy of the entire project, which makes it easy to work offline and
          collaborate asynchronously. Git, the underlying version control
          system, is known for its speed and flexibility.
        </p>
        <h2>Seamless Collaboration</h2>
        <p>
          GitHub provides a seamless and user-friendly web interface for
          managing repositories, but it also integrates with Git and Git
          command-line tools for those who prefer working in their local
          development environments. Collaboration on GitHub is made easy through
          features like pull requests, which allow developers to propose changes
          and review code collaboratively. You can also automate workflows and
          perform continuous integration and deployment using GitHub Actions.
        </p>
        <h2>Extensive Ecosystem</h2>
        <p>
          GitHub's extensive ecosystem includes integrations with various
          development and project management tools. It offers a marketplace
          where you can find and install apps that enhance your development
          process. Whether you need to integrate with issue trackers, build
          tools, or deployment platforms, GitHub has you covered. In summary,
          GitHub is an essential platform for version control and collaborative
          software development. It empowers developers to work efficiently,
          maintain code quality, and collaborate seamlessly. Whether you're a
          solo developer or part of a large team, GitHub provides the tools you
          need to manage and collaborate on your codebase.
        </p>
      </div>
    ),
    image: github,
  },

  // GitLab
  {
    title: "GitLab",
    intro: "Discover the benefits of using GitLab for version control and collaboration.",
    content: (
      <div>
        <h1>GitLab: Streamline Your Development Workflow</h1>
        <p>
          GitLab is a web-based DevOps lifecycle tool that provides a Git
          repository manager, issue tracking, continuous integration/continuous
          delivery (CI/CD) pipeline automation, and more. It offers a
          comprehensive platform for version control, collaboration, and
          automation, enabling teams to streamline their development workflow and
          deliver high-quality software efficiently.
        </p>
        <h2>Unified Platform</h2>
        <p>
          One of the key advantages of GitLab is its all-in-one approach, where
          all the tools needed for the software development lifecycle are
          integrated into a single platform. From version control with Git to
          issue tracking, code review, CI/CD pipelines, and container registry,
          GitLab provides a unified environment for managing and monitoring the
          entire development process.
        </p>
        <h2>Version Control with Git</h2>
        <p>
          GitLab offers robust version control capabilities powered by Git, the
          most widely used distributed version control system. Developers can
          collaborate on code, track changes, and manage branches effectively
          using GitLab's intuitive interface. With features like merge requests,
          code review tools, and branch permissions, GitLab facilitates
          collaboration and code quality assurance.
        </p>
        <h2>CI/CD Pipelines</h2>
        <p>
          GitLab's built-in CI/CD pipelines automate the process of building,
          testing, and deploying software, enabling teams to release updates
          rapidly and reliably. Developers can define custom pipeline stages,
          specify triggers for pipeline execution, and monitor pipeline status and
          results from within the GitLab interface. CI/CD pipelines promote
          continuous integration and deployment practices, improving
          collaboration, code quality, and time-to-market.
        </p>
        <h2>Issue Tracking and Collaboration</h2>
        <p>
          GitLab's issue tracking system allows teams to manage project tasks,
          bugs, and feature requests effectively. Issues can be created, assigned,
          and tracked within GitLab, providing visibility into project progress
          and facilitating collaboration among team members. With features like
          issue boards, labels, and milestones, GitLab helps teams organize and
          prioritize work, leading to more efficient project management and
          delivery.
        </p>
        <h2>Community and Enterprise Editions</h2>
        <p>
          GitLab is available in both Community and Enterprise editions, catering
          to the needs of individual developers, small teams, and large
          enterprises. The Community Edition is open-source and free to use,
          offering essential features for version control and collaboration. The
          Enterprise Edition includes additional features such as advanced
          security, compliance, and scalability capabilities, making it suitable
          for organizations with complex requirements and large-scale
          deployments.
        </p>
        <h2>Conclusion</h2>
        <p>
          GitLab is a powerful platform for version control, collaboration, and
          automation, offering a comprehensive set of tools for modern software
          development. Whether you're a small startup or a large enterprise,
          GitLab provides the infrastructure and features needed to streamline
          your development workflow, improve collaboration, and deliver
          high-quality software products efficiently.
        </p>
      </div>
    ),
    image: gitlab,
  },



];
