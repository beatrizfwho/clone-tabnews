function status(request, response) {
  response.status(200).json({ status: "OK ãoç", timestamp: new Date().toLocaleTimeString() });
}

export default status;
