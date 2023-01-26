import { pool } from "../db.js";
import { inicio } from "./index.controller.js";

export const createsCV = async (req, res) => {
  try {
    res.render("perfil");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createCV = async (req, res) => {
  try {
    // const { data } = req.body;
    // res.json(data);
    const { name, identific, date, phone, email, address } = req.body;

    const [rows] = await pool.query(
      "INSERT INTO perfil (name, identific, date, phone, email, address) VALUES (?, ?, ?, ?, ?, ?)",
      [name, identific, date, phone, email, address]
    );
    //res.json({ name, identific, date, phone, email, address });
    console.log(rows);

    return res.render("estudy");
    //return inicio(req, res);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const cvEstudy = async (req, res) => {
  try {
    // const { data } = req.body;
    // res.json(data);
    const { studi1, studi2, studi3 } = req.body;

    const [rows] = await pool.query(
      "INSERT INTO studies (studi1, studi2, studi3) VALUES (?, ?, ?)",
      [studi1, studi2, studi3]
    );
    // res.json({ name, identific, date, phone, email, address });
    console.log(rows);
    res.render("experiences")

    //return inicio(req, res);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const cvExperiences = async (req, res) => {
  try {
    // const { data } = req.body;
    // res.json(data);
    const { experiencies1, experiencies2, experiencies3, experiencies4 } = req.body;

    const [rows] = await pool.query(
      "INSERT INTO experiences (experiencies1, experiencies2, experiencies3, experiencies4) VALUES (?, ?, ?, ?)",
      [experiencies1, experiencies2, experiencies3, experiencies4]
    );
    // res.json({ name, identific, date, phone, email, address });
    console.log(rows);
    res.render("refer")

    //return inicio(req, res);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const cvRefer = async (req, res) => {
  try {
    // const { data } = req.body;
    // res.json(data);
    const { refer1, refer2, refer3, refer4 } = req.body;

    const [rows] = await pool.query(
      "INSERT INTO refer (refer1, refer2, refer3, refer4) VALUES (?, ?, ?, ?)",
      [refer1, refer2, refer3, refer4]
    );
    // res.json({ name, identific, date, phone, email, address });
    console.log(rows);
    return inicio(req, res);

    //return inicio(req, res);
  } catch (err) {
    res.status(500).json(err);
  }
};

// export const ping = async (req, res) => {
//     const [result] = await pool.query('SELECT "Pong" AS result');
//     res.json(result[0]);
//   };
