const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rc6zn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.get('/', (req, res) => {
    res.send('<h1>Hello, Eventia server side is working!</h1>');
});

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(() => {
    const database = client.db(`${process.env.DB_NAME}`);
    const serviceCollection = database.collection('services');
    const ordersCollection = database.collection('service-orders');
    const reviewCollection = database.collection('reviews');
    const adminCollection = database.collection('admins');
    const usersCollection = database.collection('users');
    const contactUs = database.collection('contact');

    // add services
    app.post('/addService', (req, res) => {
        const newProduct = req.body;
        serviceCollection.insertOne(newProduct).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    // all services
    app.get('/services', (req, res) => {
        serviceCollection.find().toArray((err, items) => {
            res.send(items);
        });
    });

    // get service by id
    app.get('/service/:_id', (req, res) => {
        serviceCollection.find({ _id: ObjectId(req.params._id) }).toArray((err, documents) => {
            res.send(documents);
        });
    });

    // delete a service
    app.delete('/delete/:_id', (req, res) => {
        serviceCollection
            .deleteOne({ _id: ObjectId(req.params._id) })
            .then((result) => {
                res.send(result.deletedCount > 0);
            })
            .catch((err) => console.log(err));
    });

    // add service orders
    app.post('/addServicesOrder', (req, res) => {
        const order = req.body;
        ordersCollection.insertOne(order).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    // all services orders
    app.get('/servicesOrder', (req, res) => {
        ordersCollection.find().toArray((err, items) => {
            res.send(items);
        });
    });

    // service orders get by email
    app.get('/servicesOrderByEmail', (req, res) => {
        ordersCollection.find({ email: req.query.email }).toArray((err, items) => {
            res.send(items);
        });
    });

    // status update
    app.patch('/update/:_id', (req, res) => {
        ordersCollection
            .updateOne(
                { _id: ObjectId(req.params._id) },
                {
                    $set: {
                        status: req.body.status,
                    },
                }
            )
            .then((result) => {
                res.send(result.modifiedCount > 0);
            });
    });

    // add reviews
    app.post('/addReview', (req, res) => {
        const review = req.body;
        reviewCollection.insertOne(review).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    // all reviews
    app.get('/reviews', (req, res) => {
        reviewCollection.find().toArray((err, documents) => {
            res.send(documents);
        });
    });

    // delete review
    app.delete('/deleteReview/:_id', (req, res) => {
        reviewCollection
            .deleteOne({ _id: ObjectId(req.params._id) })
            .then((result) => {
                res.send(result.deletedCount > 0);
            })
            .catch((err) => console.log(err));
    });

    // add admin
    app.post('/addAAdmin', (req, res) => {
        const admin = req.body;
        adminCollection.insertOne(admin).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    // all admins
    app.get('/admins', (req, res) => {
        adminCollection.find().toArray((err, documents) => {
            res.send(documents);
        });
    });

    // check admin or not
    app.post('/isAdmin', (req, res) => {
        const { email } = req.body;
        adminCollection.find({ email }).toArray((err, documents) => {
            res.send(documents.length > 0);
        });
    });

    // add users from email
    app.post('/users', (req, res) => {
        const users = req.body;
        usersCollection.insertOne(users).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    // add users from gmail
    app.put('/users', (req, res) => {
        const users = req.body;
        const filter = { users: users.email };
        const option = { upsert: true };
        const updateUser = { $set: users };
        usersCollection.updateOne(filter, updateUser, option).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    // all users
    app.get('/allUsers', (req, res) => {
        usersCollection.find().toArray((err, documents) => {
            res.send(documents);
        });
    });

    app.post('/addContact', (req, res) => {
        const contact = req.body;
        contactUs.insertOne(contact).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });
});

app.listen(process.env.PORT || port);
