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
});

app.listen(process.env.PORT || port);
