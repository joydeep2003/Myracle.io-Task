const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const { analyzeFeatures } = require('./featureAnalyzer');

const app = express();

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  }
});

app.use(cors());
app.use(express.json());

app.post('/analyze', upload.array('images'), async (req, res) => {
  try {
    const images = req.files;
    const context = req.body.context;
    const text = await analyzeFeatures(images, context);
    res.json(text);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred during analysis' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
