import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3 className='text-success mb-2 ms-3'>Q1) Difference between javascript and nodejs?</h3>
            <div className='question-2 ms-3'>
                JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
            </div>
            <h3 className='text-success mb-2 ms-3'>Q2) When should you use nodejs and when should you use mongodb?</h3>
            <div className='question-2'>
                <div className='ms-3'>
                    <h4>When should you use nodejs?</h4>
                    <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</p>
                </div>
                <div className='ms-3'>
                    <h4>when should you use mongodb?</h4>
                    <p>A NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.</p>
                </div>
            </div >
            <h3 className='text-success mb-2 ms-3'>Q3) Differences between sql and nosql databases.?</h3>
            <div className='question-2 ms-3'>
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
            </div>
            <h3 className='text-success mb-2 ms-3'>Q4)What is the purpose of jwt and how does it work?</h3>
            <div className='question-2 ms-3'>
                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
            </div>
        </div >
    );
};

export default Blogs;