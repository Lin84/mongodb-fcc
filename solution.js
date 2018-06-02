
// =========================================================================
/**
 * Exercise 1 of 9:
 * Hey hey from learnyoumongo. First, let's get MongoDB installed.
    You can download MongoDB from https://www.mongodb.org/downloads.

    We will also need to add it to your $PATH.

    You do not have to create any file with a solution in this exercise.
    Just run learnyoumongo verify when you are ready with the installation.
 */

// learnyoumongo

// =========================================================================
/**
 * Exercise 2 of 9:
 * Start mongod on port 27017 with data as the dbpath
 * You may have to create the data directory.

    mkdir data

    To start mongo on port 27017, run mongod --port 27017 --dbpath=./data.

    Then, in another terminal, run npm install mongodb.

    Then, run learnyoumongo verify.

    If this lesson is passed, be sure to leave mongod running as it will
    be used for the remainder of the exercise.
 */

// =========================================================================
/**
 *  Exercise 3 of 9:

Here we will learn how to search for documents.

In this exercise the database name is learnyoumongo.
So, the url would be something like: mongodb://localhost:27017/learnyoumongo

Use the parrots collection to find all documents where age
is greater than the first argument passed to your script.

Using console.log, print the documents to stdout.
 */

/**
 * first solution 26.05.2018:
 * https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp
 */
// var mongo = require('mongodb').MongoClient
// var url = 'mongodb://localhost:27017/learnyoumongo'
// var age = process.argv[2]

// mongo.connect(url, function(err, database) {
//     if (err) return console.error(err)
//     var db = database.db('learnyoumongo')
//     db.collection('parrots').find({}).toArray(function(err, result) {
//         if (err) throw err
//         var finalResult = result.filter(function(item) {
//             return item.age > age
//         })
//         console.log(finalResult)
//         database.close()
//     })
// })

/**
 * official solution:
 * note: is outdated, you can simplify the solution with:
 *  var db = database.db('learnyoumongo')
    db.collection('parrots').find({
        age: {
            $gt: +age
        }
    }).toArray(function(err, docs) {
        if (err) throw err
        console.log(docs)
        database.close()
    })
 */

// var mongo = require('mongodb').MongoClient
// var age = process.argv[2]

// var url = 'mongodb://localhost:27017/learnyoumongo'

// mongo.connect(url, function(err, db) {
//     if (err) throw err
//     var parrots = db.collection('parrots')
//     parrots.find({
//         age: {
//         $gt: +age
//         }
//     }).toArray(function(err, docs) {
//         if (err) throw err
//         console.log(docs)
//         db.close()
//     })
// })

// =========================================================================
/**
 * FIND PROJECT: Exercise 4 of 9

Here we will learn how to search for documents but only fetch the fields
we need. Also known as projection in MongoDB

Use the parrots collection from the database named learnyoumongo to
find all documents where age is greater than the first argument
passed to your script.

The difference from the last lesson will be that we only want the
name and age properties

Using console.log, print the documents to stdout.
 */

// var mongoClient = require('mongodb').MongoClient
// var url = 'mongodb://localhost:27017'
// var age = process.argv[2]

// mongoClient.connect(url, function(err, database) {
//     if (err) throw err

//     var db = database.db('learnyoumongo')
//     db.collection('parrots').find({
//         age: {
//             $gt: +age
//         }
//     }, {
//         projection: {
//             name: 1,
//             age: 1,
//             _id: 0
//         }
//     }).toArray(function(err, result) {
//         if (err) throw err
//         console.log(result)
//         database.close()
//     })
// })

/**
 * official solution:
 * in mongodb v.3, the syntax is diff:
 * https://stackoverflow.com/questions/47968455/second-parameter-to-limit-fields-in-find-not-working-in-mongodb
 */

// var mongo = require('mongodb').MongoClient
// var age = process.argv[2]

// var url = 'mongodb://localhost:27017/learnyoumongo'

// mongo.connect(url, function(err, db) {
//     if (err) throw err
//     var parrots = db.collection('parrots')
//     parrots.find({
//         age: {
//         $gt: +age
//         }
//     }, {
//         name: 1
//     , age: 1
//     , _id: 0
//     }).toArray(function(err, docs) {
//         if (err) throw err
//         console.log(docs)
//         db.close()
//     })
// })

// =========================================================================
/**
 * INSERT: Exercise 5 of 9

Connect to MongoDB on port 27017.
You should connect to the database named learnyoumongo and insert
a document into the docs collection.

The document should be a json document with the following properties:

  * `firstName`
  * `lastName`

firstName will be passed as the first argument to the lesson.

lastName will be passed as the second argument to the lesson.

Use console.log to print out the object used to create the document.

Make sure you use JSON.stringify convert it to JSON.
 */

/**
 * first solution: 27.05.2018
 */
// var mongoClient = require('mongodb').MongoClient
// var url = 'mongodb://localhost:27017'
// var firstName = process.argv[2]
// var lastName = process.argv[3]

// mongoClient.connect(url, function(err, database) {
//     if (err) throw err
//     var db = database.db('learnyoumongo')
//     var newUser = {
//         firstName,
//         lastName
//     }
//     var usersCollection = db.collection('users')
//     usersCollection.insert(newUser, function(err, res){
//         if (err) throw err
//         console.log(JSON.stringify(newUser))
//         database.close()
//     })
// })

/**
 * official solution:
 */
// var mongo = require('mongodb').MongoClient

// var firstName = process.argv[2]
// var lastName = process.argv[3]
// var doc = {
//     firstName: firstName
//     , lastName: lastName
// }

// var url = 'mongodb://localhost:27017/learnyoumongo'
// mongo.connect(url, function(err, db) {
//     if (err) throw err
//     var collection = db.collection('docs')
//     collection.insert(doc, function(err, data) {
//         if (err) throw err
//         console.log(JSON.stringify(doc))
//         db.close()
//     })
// })

// =========================================================================
/**
 * UPDATE: Exercise 6 of 9

Here we are going to update a document in the users collection.

The database name will be accessible via process.argv[2].

Say we have a user defined like:

    {
        "name": "Tina",
        "age": 30,
        "username": "tinatime"
    }

We want to change Tina's age from 30 to 40.

For the purpose of this lesson, assume that the username property is unique.
 */

 /**
  * first solution: 27.05.2018
  */
// var mongoClient = require('mongodb').MongoClient
// var url = 'mongodb://localhost:27017'
// var databaseName = process.argv[2]

// mongoClient.connect(url, function(err, database) {
//     if (err) throw err
//     var query = {
//         username: 'tinatime'
//     }
//     var updatedUser = {
//         $set: {
//             age: 40
//         }
//     }

//     var usersCollection = database.db(databaseName).collection('users')
//     usersCollection.update(query, updatedUser, function(err, res) {
//         if (err) throw err
//         database.close()
//     })
// })

/**
 * official solution:
 */

// var mongo = require('mongodb').MongoClient

// var url = 'mongodb://localhost:27017/' + process.argv[2]
// mongo.connect(url, function(err, db) {
//     if (err) throw err
//     var collection = db.collection('users')
//     collection.update({
//         username: 'tinatime'
//     }, {
//         $set: {
//         age: 40
//         }
//     }, function(err) {
//         if (err) throw err
//         db.close()
//     })
// })

// =========================================================================

/**
 * REMOVE: Exercise 7 of 9

This lesson involves removing a document with the given _id.

The database name will be accessible via process.argv[2].

The collection name will be passed as the second argument to your script.

The _id will be passed as the third argument to your script.
 */


 /**
  * first solution: 28.05.2018
  */
// var mongoClient = require('mongodb').MongoClient
// var databasename = process.argv[2]
// var collectionName = process.argv[3]
// var id = process.argv[4]
// var url = 'mongodb://localhost:27017/'

// mongoClient.connect(url, function(err, database) {
//     if (err) throw err
//     var db = database.db(databasename)
//     var query = {
//         _id: id
//     }
//     db.collection(collectionName).remove(query, function(err) {
//         if (err) throw err
//         database.close()
//     })
// })

/**
 * official solution:
 */

// var mongo = require('mongodb').MongoClient

// var url = 'mongodb://localhost:27017/' + process.argv[2]

// mongo.connect(url, function(err, db) {
//     if (err) throw err
//     var collection = db.collection(process.argv[3])
//     collection.remove({
//         _id: process.argv[4]
//     }, function(err) {
//         if (err) throw err
//         db.close()
//     })
// })

// =========================================================================
/**
 * COUNT: Exercise 8 of 9

Here we will learn how to count the number of documents that
meet certain criteria.

Use the parrots collection from the database named learnyoumongo to
count all documents where age is greater than the first argument
passed to your script.

Using console.log, print the number to stdout.
 */

 /**
  * first solution: 29.05.2018
  */
// var mongoClient = require('mongodb').MongoClient
// var url = 'mongodb://localhost:27017/'
// var age = process.argv[2]

// mongoClient.connect(url, function(err, database) {
//     if (err) throw err
//     var parrots = database.db('learnyoumongo').collection('parrots')
//     var query = {
//         age: {
//             $gt: +age
//         }
//     }
//     parrots.count(query, function(err, count) {
//         if (err) throw err
//         console.log(count)

//         database.close()
//     })
// })


/**
 * official solution:
 */
// var mongo = require('mongodb').MongoClient
// var age = process.argv[2]
// var url = 'mongodb://localhost:27017/learnyoumongo'

// mongo.connect(url, function(err, db) {
//     if (err) throw err
//     var parrots = db.collection('parrots')
//     parrots.count({
//         age: {
//         $gt: +age
//         }
//     }, function(err, count) {
//         if (err) throw err
//         console.log(count)
//         db.close()
//     })
// })

// =========================================================================
/**
 * AGGREGATE: Exercise 9 of 9

Next up is aggregation. Aggregation allows one to do things like
calculate the sum of a field of multiple documents or the average
of a field of documents meeting particular criteria.

Say you have a collection named prices. Each price document is modeled
like so:

    {
        "name": "Tshirt",
        "size": "S",
        "price": 10,
        "quantity": 12
        "meta": {
            "vendor": "hanes",
            "location": "US"
        }
    }

In this exercise, we need to calculate the average price for all documents
in the prices collection in the database named learnyoumongo that have
the size that will be passed as the first argument to your script.

Use console.log() to print the average price rounded to 2 decimal places
to stdout after you have found it.
 */

var mongoClient = require('mongodb').MongoClient
var size = process.argv[2]
// console.log('​size', size);
var url = 'mongodb://localhost:27017/learnyoumongo'

mongoClient.connect(url, function(err, database) {
    if (err) throw err
    var pricesCollection = database.db('learnyoumongo').collection('prices')
    pricesCollection.aggregate([
        { $match: { size: size }},
        { $group: {
            _id: 'average',
            average: {
                $avg: '$price'
            }
        }}
    ]).toArray(function(err, result) {
        if (err) throw err
        console.log(result[0].average.toFixed(2))
        database.close()
    })
})

/**
 * official solution:
 */

// var mongo = require('mongodb').MongoClient
// var size = process.argv[2]

// var url = 'mongodb://localhost:27017/learnyoumongo'

// mongo.connect(url, function(err, db) {
//     if (err) throw err
//     var prices = db.collection('prices')
//     prices.aggregate([
//         { $match: {
//             size: size
//         }}
//     , { $group: {
//         _id: 'average'
//         , average: {
//             $avg: '$price'
//         }
//         }}
//     ]).toArray(function(err, results) {
//         if (err) throw err
//         if (!results.length) {
//         throw new Error('No results found')
//         }
//         var o = results[0]
//         console.log(Number(o.average).toFixed(2))
//         db.close()
//     })
// })
