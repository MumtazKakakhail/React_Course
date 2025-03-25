import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, Box } from "@mui/material";

const HomePage = () => {
  return (
    <>
      {/* Navbar */}
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            IT Company
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar> */}

      {/* Hero Section */}
      <Container sx={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <Box>
          <Typography variant="h3" gutterBottom>
            Welcome to Our IT Solutions
          </Typography>
          <Typography variant="h6" color="textSecondary">
            We provide cutting-edge technology solutions to boost your business.
          </Typography>
        </Box>
      </Container>

      {/* Services Section */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { title: "Web Development", description: "We build responsive and scalable web applications." },
            { title: "Mobile Apps", description: "Creating user-friendly mobile applications for all platforms." },
            { title: "Cloud Solutions", description: "Providing secure and scalable cloud-based solutions." },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ p: 2, textAlign: "center" }}>
                <CardContent>
                  <Typography variant="h5">{service.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ p: 2, textAlign: "center", backgroundColor: "#f8f8f8", mt: 2 }}>
        <Typography variant="body2">&copy; 2025 IT Company. All Rights Reserved.</Typography>
      </Box>
    </>
  );
};

export default HomePage;
