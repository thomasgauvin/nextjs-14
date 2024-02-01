export default function handler(req, res) {
    // Get information about the process
    const processInfo = {
      version: process.version
    };
  
    // Send the process information as JSON
    res.status(200).json(processInfo);
  };