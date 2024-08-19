// import React, { useState } from 'react';
// import { Container, Grid, Card, CardMedia, CardActionArea, Dialog, IconButton, Typography, Box } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import image1 from '../../images/hair.png';
// import image2 from '../../images/image2.png';

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const images = [
//     { src: image1, alt: 'Haircut 1', title: 'Classic Fade' },
//     { src: image2, alt: 'Haircut 2', title: 'Pompadour' },
//   ];

//   const openModal = (image) => {
//     setSelectedImage(image);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: '85vh', // Ensuring it covers a significant portion of the screen
//         backgroundColor: '#00bcd4',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         py: 8,
//         px: 2,
//       }}
//     >

// <Container 
//   maxWidth="md" 
//   sx={{ 
//     mt: 4, 
//     mb: { xs: 8, md: 12 } // Add bottom margin
//   }}
// >
//   <Grid container spacing={4}>
//     {images.map((image, index) => (
//       <Grid item xs={12} sm={6} md={4} key={index}>
//         <Card>
//           <CardActionArea onClick={() => openModal(image)}>
//             <CardMedia
//               component="img"
//               alt={image.alt}
//               height="200"
//               image={image.src}
//               title={image.title}
//             />
//             <Box 
//               sx={{ 
//                 position: 'absolute', 
//                 bottom: 0, 
//                 left: 0, 
//                 right: 0, 
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)', 
//                 color: 'white', 
//                 textAlign: 'center', 
//                 p: 1 
//               }}
//             >
//               <Typography variant="subtitle1">{image.title}</Typography>
//             </Box>
//           </CardActionArea>
//         </Card>
//       </Grid>


      
//           ))}
//         </Grid>

//         {selectedImage && (
//           <Dialog open={true} onClose={closeModal} maxWidth="md" fullWidth>
//             <Box position="relative">
//               <IconButton
//                 sx={{
//                   position: 'absolute',
//                   top: 8,
//                   right: 8,
//                   color: 'white',
//                 }}
//                 onClick={closeModal}
//               >
//                 <CloseIcon />
//               </IconButton>
//               <img
//                 src={selectedImage.src}
//                 alt={selectedImage.alt}
//                 style={{ width: '100%', height: 'auto' }}
//               />
//             </Box>
//           </Dialog>
//         )}
//       </Container>
//     </Box>
//   );
// };

// export default Gallery;


import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, CardActionArea, Dialog, IconButton, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import image1 from '../../images/hair.png';
import image2 from '../../images/image2.png';
import backgroundImage from '../../images/barbertools.png'; // Importing the background image

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: image1, alt: 'Haircut 1', title: 'Classic Fade' },
    { src: image2, alt: 'Haircut 2', title: 'Pompadour' },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Box
      sx={{
        minHeight: '86vh', // Ensuring it covers a significant portion of the screen
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover', // Ensure the image covers the entire section
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Avoid repeating the image
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        px: 2,
        width: '100vw', // Make sure the background covers the full width of the viewport
        position: 'relative', // Position relative to ensure full-width background
        left: '50%',
        transform: 'translateX(-50%)' // Center the background horizontally
      }}
    >
      <Container 
        maxWidth="md" 
        sx={{ 
          mt: 4, 
          mb: { xs: 8, md: 12 } // Add bottom margin
        }}
      >
        <Grid container spacing={4}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardActionArea onClick={() => openModal(image)}>
                  <CardMedia
                    component="img"
                    alt={image.alt}
                    height="200"
                    image={image.src}
                    title={image.title}
                  />
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      right: 0, 
                      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                      color: 'white', 
                      textAlign: 'center', 
                      p: 1 
                    }}
                  >
                    <Typography variant="subtitle1">{image.title}</Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        {selectedImage && (
          <Dialog open={true} onClose={closeModal} maxWidth="md" fullWidth>
            <Box position="relative">
              <IconButton
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  color: 'white',
                }}
                onClick={closeModal}
              >
                <CloseIcon />
              </IconButton>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Dialog>
        )}
      </Container>
    </Box>
  );
};

export default Gallery;
