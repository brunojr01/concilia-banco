import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

const Reconciliation: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Implementar lógica para enviar o arquivo ao servidor
    console.log(file);
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Reconciliation Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is where the reconciliation process will take place.
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <label htmlFor="upload-file">
          <Input
            accept=".csv"
            id="upload-file"
            type="file"
            onChange={handleFileChange}
          />
          <Button variant="contained" component="span">
            Upload CSV
          </Button>
        </label>
        {file && (
          <Typography variant="body2" gutterBottom>
            File selected: {file.name}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Reconciliation;
