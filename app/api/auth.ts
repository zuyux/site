// server/api/auth.ts 
import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg'; // PostgreSQL client library

const pool = new Pool({
  // Your PostgreSQL connection configuration
  connectionString: process.env.DB_URL,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { address } = req.body;

    try {
      // Check if the user exists (based on address)
      const existingUserQuery = 'SELECT * FROM users WHERE address = $1';
      const existingUserRes = await pool.query(existingUserQuery, [address]);

      if (existingUserRes.rows.length > 0) {
        // User exists, return user data
        res.status(200).json(existingUserRes.rows[0]);
      } else {
        // Create a new user
        const insertUserQuery = 'INSERT INTO users (address) VALUES ($1) RETURNING *';
        const newUserRes = await pool.query(insertUserQuery, [address]);
        res.status(201).json(newUserRes.rows[0]);
      }
    } catch (error) {
      console.error('Error handling user authentication:', error);
      res.status(500).json({ error: 'An error occurred during authentication' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
