const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mariyajyothy04:<VxB6M7h0oLMctwN6>@cluster.o6wgk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('Failed to connect:', err));
