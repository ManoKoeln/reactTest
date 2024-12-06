import React, { useEffect, useState } from 'react';
// import axios from 'axios';




import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'yourusername',
    password: 'yourpassword',
    database: 'yourdatabase'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

const fetchData = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM yourtable', (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

const Tabelle = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
            .then(results => {
                setData(results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Tabelle;