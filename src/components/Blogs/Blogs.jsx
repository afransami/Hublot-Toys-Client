import React from "react";

const Blogs = () => {
  return (
    <div className="mt-20 container mx-auto">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            An access token is a short-lived credential used to access protected
            resources, while a refresh token is a long-lived credential used to
            obtain a new access token when the current one expires. On the
            client-side, the access token should be stored securely in memory,
            and the refresh token should be stored securely in encrypted and
            tamper-proof storage, such as the secure keychain or secure storage
            APIs provided by the platform or framework you're using.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p>
            SQL Databases: Relational databases with predefined schemas. ACID
            properties ensure data integrity. Suitable for structured data and
            complex queries. Support for transactions and joins. NoSQL
            Databases: Non-relational databases with flexible data modeling. No
            fixed schema, handle semi-structured/unstructured data. Scalable,
            high-performance, and horizontally scalable. Different data models
            (key-value, document, columnar, graph). SQL: Structured, predefined
            schema, complex queries, transactions. NoSQL: Flexible, no fixed
            schema, scalable, diverse data types.
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p>
            Express.js is a minimalist and flexible web application framework
            for Node.js. It provides a robust set of features for building web
            applications and APIs. Express.js simplifies the process of handling
            HTTP requests, routing, middleware management, and response
            handling. It is known for its simplicity, speed, and extensive
            ecosystem of plugins and middleware that can be used to enhance
            functionality. NestJS is a progressive, Node.js-based framework for
            building efficient, scalable, and maintainable server-side
            applications. It uses TypeScript as its primary language and is
            heavily inspired by Angular's architecture and design principles.
            NestJS provides a modular and organized approach to building
            applications, utilizing decorators and dependency injection to
            create highly testable and extensible code. It integrates well with
            various libraries and frameworks, offering features such as routing,
            validation, authentication, and database integration out of the box.
            NestJS aims to improve developer productivity and encourage best
            practices in application development.
          </p>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            In MongoDB, the aggregate function is used to perform advanced data
            processing and analysis on collections of documents. It allows you
            to perform complex queries, transformations, and aggregations on
            your data. Here's a brief explanation of how it works:
            Pipeline-based Approach: The aggregate function uses a
            pipeline-based approach, where you specify a sequence of stages to
            process the data. Each stage takes input from the previous stage and
            passes its output to the next stage in the pipeline. Stages: The
            pipeline stages can include various operations like filtering,
            grouping, projecting, sorting, joining, and performing mathematical
            calculations on the data. Each stage modifies the data or transforms
            it in some way. Operators: MongoDB provides a set of powerful
            operators that you can use in different stages of the pipeline.
            These operators perform specific operations like $match (filtering
            documents), $group (grouping and aggregating data), $project
            (selecting or shaping the output), $sort (sorting documents), and
            many more. Execution Order: The pipeline stages are executed in the
            order they are specified. Each stage operates on the output of the
            previous stage, allowing you to chain multiple operations together.
            Aggregation Framework: The MongoDB aggregate function uses the
            Aggregation Framework, which is designed to efficiently process
            large volumes of data and provide flexible data analysis
            capabilities. It enables you to perform complex queries and
            aggregations that go beyond simple CRUD operations. Results: The
            aggregate function returns the result of the pipeline as a
            collection of documents that match the specified criteria and
            transformations. The output can be further processed, displayed, or
            used for further analysis. In summary, the aggregate function in
            MongoDB provides a powerful and flexible way to analyze and
            manipulate data using a pipeline-based approach, allowing you to
            perform complex queries and aggregations on your collections of
            documents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
